import { Document, MongoClient } from "mongodb";
import { env } from "../env";

export const client = new MongoClient(env.URI_MONGODB);

async function query(queryObject): Promise<Document> {
  try {
    await client.connect();
    const result = await client.db("admin").command(queryObject);
    return result;
  } catch (error) {
    console.error("falha na conexão com o banco: ", error);
    throw error;
  } finally {
    await client.close();
  }
}

export default {
  query: query,
};
