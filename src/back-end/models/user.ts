import { Document } from "mongodb";
import database from "infra/database";
import { ObjectId } from "mongodb";
import { ValidationError, NotFoundError } from "infra/error";
import password from "models/password";

interface UserInput {
  username: string;
  email: string;
  password: string;
}

async function findOneByUsername(username: string) {
  const userFound = await runFindQuery(username);

  return userFound;

  async function runFindQuery(username: string) {
    const results = await database.db.collection("users").findOne({
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
  await hashPasswordInObject(userInputValues);

  const newUser = await runInsertQuery();
  return newUser;

  async function validateUniqueEmail(email: string) {
    const results = await database.db.collection("users").findOne({
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
    const results = await database.db.collection("users").findOne({
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

  async function hashPasswordInObject(userInputValues: UserInput) {
    const hashedPassword = await password.hash(userInputValues.password);

    userInputValues.password = hashedPassword;
  }

  async function runInsertQuery() {
    const results = await database.db.collection("users").insertOne({
      username: userInputValues.username,
      email: userInputValues.email,
      password: userInputValues.password,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const insertedUser = (await database.db.collection("users").findOne({
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
