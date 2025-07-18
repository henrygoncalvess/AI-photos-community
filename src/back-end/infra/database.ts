import { Document, MongoClient } from "mongodb";
import { env } from "../env";
import { ServiceError } from "./error";

export const client = new MongoClient(env.URI_MONGODB);

async function query(queryObject): Promise<Document> {
  try {
    await client.connect();
    const result = await client.db("admin").command(queryObject);
    return result;
  } catch (error) {
    const serviceErrorObject = new ServiceError({
      message: "Erro na conexão com Banco ou na Query",
      cause: error,
    });
    throw serviceErrorObject;
  } finally {
    await client.close();
  }
}

export default {
  query: query,
};
