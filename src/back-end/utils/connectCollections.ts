import { client } from "../infra/database";
import { env } from "../env";

export async function usersCollection() {
  const database = await client.db(env.DATABASE);

  const users = await database.collection(env.COLLECTION);

  return users;
}
