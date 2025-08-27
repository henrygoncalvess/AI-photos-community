import { MongoClient, Db, Document } from "mongodb";
import { env } from "env";

const client = new MongoClient(env.URI_MONGODB, {
  maxPoolSize: 20, // Up to 20 simultaneous connections
  minPoolSize: 5, // Keeps at least 5 opportunities open
  maxConnecting: 2, // Maximum of 2 connections being created at the same time
  maxIdleTimeMS: 30000, // Connections idle for more than 30 seconds will be closed
  waitQueueTimeoutMS: 10000, // Waits a maximum of 10 seconds for a free connection
});

const db: Db = client.db(env.DATABASE);

async function buildInfo(): Promise<Document> {
  return await client.db("admin").command({
    buildInfo: 1,
  });
}

async function serverStatusConnections(): Promise<Document> {
  const serverStatus = await client.db("admin").command({
    serverStatus: 1,
  });

  return serverStatus.connections;
}

const database = {
  buildInfo,
  serverStatusConnections,
  db,
};

export default database;
