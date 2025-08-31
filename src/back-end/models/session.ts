import crypto from "node:crypto";
import { Document, ObjectId } from "mongodb";
import database from "infra/database";

const EXPIRATION_IN_MILLISECONDS = 60 * 60 * 24 * 30 * 1000; // 30 days

async function create(userId: ObjectId) {
  const token = crypto.randomBytes(48).toString("hex");

  const expiresAt = new Date(Date.now() + EXPIRATION_IN_MILLISECONDS);

  const newSession = await runInsertQuery(token, userId, expiresAt);
  return newSession;

  async function runInsertQuery(
    token: string,
    userId: ObjectId,
    expiresAt: Date,
  ) {
    const results = await database.db.collection("sessions").insertOne({
      token: token,
      user_id: userId,
      expires_at: expiresAt,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const insertedUser = (await database.db.collection("sessions").findOne({
      _id: new ObjectId(results.insertedId),
    })) as Document;

    return insertedUser;
  }
}

const session = {
  create,
  EXPIRATION_IN_MILLISECONDS,
};

export default session;
