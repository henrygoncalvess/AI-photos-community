import { Document } from "mongodb";
import { env } from "env";
import database from "infra/database";
import { ObjectId } from "mongodb";
import { ValidationError, NotFoundError } from "infra/error";

interface UserInput {
  username: string;
  email: string;
  password: string;
}

async function findOneByUsername(username: string) {
  const userFound = await runFindQuery(username);

  return userFound;

  async function runFindQuery(username: string) {
    const results = await database.db.collection(env.COLLECTION).findOne({
      $expr: {
        $eq: [{ $toLower: `$username` }, { $toLower: `${username}` }],
      },
    });

    if (results === null) {
      throw new NotFoundError({
        message: "O apelido informado não foi encontrado no sistema.",
        action: "Verifique se o apelido está digitado corretamente.",
      });
    }

    return results;
  }
}

async function create(userInputValues: UserInput): Promise<Document> {
  await validateUniqueEmail(userInputValues.email);
  await validateUniqueUsername(userInputValues.username);

  const newUser = await runInsertQuery();
  return newUser;

  async function validateUniqueEmail(email: string) {
    const results = await database.db.collection(env.COLLECTION).findOne({
      $expr: {
        $eq: [{ $toLower: `$email` }, { $toLower: `${email}` }],
      },
    });

    if (results !== null) {
      throw new ValidationError({
        message: "O email informado já está sendo utilizado.",
        action: "Utilize outro email para realizar o cadastro.",
      });
    }
  }

  async function validateUniqueUsername(username: string) {
    const results = await database.db.collection(env.COLLECTION).findOne({
      $expr: {
        $eq: [{ $toLower: `$username` }, { $toLower: `${username}` }],
      },
    });

    if (results !== null) {
      throw new ValidationError({
        message: "O apelido informado já está sendo utilizado.",
        action: "Utilize outro apelido para realizar o cadastro.",
      });
    }
  }

  async function runInsertQuery() {
    const results = await database.db.collection(env.COLLECTION).insertOne({
      username: userInputValues.username,
      email: userInputValues.email,
      password: userInputValues.password,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const insertedUser = (await database.db.collection(env.COLLECTION).findOne({
      _id: new ObjectId(results.insertedId),
    })) as Document;

    return insertedUser;
  }
}

const user = {
  create,
  findOneByUsername,
};

export default user;
