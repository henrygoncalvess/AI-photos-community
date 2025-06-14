import { FastifyTypedInstance } from "../types/fastify";
import database from "../infra/database";
import { Document } from "mongodb";

export async function statusRoutes(app: FastifyTypedInstance) {
  app.get("/status", async (request, reply) => {
    const updatedAt = new Date().toISOString();

    const databaseVersionResult = (await database.query({
      buildInfo: 1,
    })) as Document;

    const databaseVersionValue = databaseVersionResult.version;

    const databaseInfoConnectionsResult = (await database.query({
      serverStatus: 1,
    })) as Document;

    const databaseMaxConnectionsValue =
      databaseInfoConnectionsResult.connections.available;

    const databaseOpenedConnectionsValue =
      databaseInfoConnectionsResult.connections.active;

    const databaseCurrentConnectionValue =
      databaseInfoConnectionsResult.connections.current;

    reply.status(200).send({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersionValue,
          max_connections: databaseMaxConnectionsValue,
          opened_connections: databaseOpenedConnectionsValue,
          current_connections: databaseCurrentConnectionValue,
        },
      },
    });
  });
}
