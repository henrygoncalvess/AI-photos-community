import { MongoClient } from "mongodb";
import { env } from "../env";

export const client = new MongoClient(env.URI_MONGODB);

async function query(queryObject) {
  try {
    await client.connect();
    const result = await client.db("admin").command(queryObject);
    return result;
  } catch (erro) {
    console.error("falha na conexão com o banco: ", erro);
    await client.close();
  } finally {
    await client.close();
  }
}

export default {
  query: query,
};
