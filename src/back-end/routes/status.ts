import { FastifyTypedInstance } from "../interfaces/fastify";
import database from "../infra/database";

export async function statusRoutes(app: FastifyTypedInstance) {
  app.get("/status", async (request, reply) => {
    const updatedAt = new Date().toISOString();

    const databaseBuildInfoResult = await database.buildInfo();

    const databaseVersionValue = databaseBuildInfoResult.version;

    const databaseConnectionsResult = await database.serverStatusConnections();

    const databaseMaxConnectionsValue = databaseConnectionsResult.available;

    const databaseOpenedConnectionsValue = databaseConnectionsResult.active
      ? databaseConnectionsResult.active
      : databaseConnectionsResult.current;

    reply.status(200).send({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersionValue,
          max_connections: databaseMaxConnectionsValue,
          opened_connections: databaseOpenedConnectionsValue,
        },
      },
    });
  });
}
