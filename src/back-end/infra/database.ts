import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "../env";

export const client = new MongoClient(env.URI_MONGODB, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function query(queryObject) {
  try {
    await client.connect();
    console.log("conectado ao MongoDB com sucesso");
    const result = await client.db("admin").command(queryObject)
    return result
  } catch (erro) {
    console.error("falha na conexão com o banco: ", erro);
    await client.close();
  } finally {
    await client.close();
  }
}

export default {
  query: query
}