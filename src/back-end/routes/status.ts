import { FastifyTypedInstance } from "../types/fastify";
import database from "../infra/database";
import errorHandler from "../controllers/errorHandler";

const opts = {
  errorHandler: errorHandler.onError,
};

export async function statusRoutes(app: FastifyTypedInstance) {
  app.get("/status", opts, async (request, reply) => {
    const updatedAt = new Date().toISOString();

    const databaseServerStatusResult = await database.query({
      serverStatus: 1,
    });

    const databaseVersionValue = databaseServerStatusResult.version;

    const databaseMaxConnectionsValue =
      databaseServerStatusResult.connections.available;

    const databaseOpenedConnectionsValue = databaseServerStatusResult
      .connections.active
      ? databaseServerStatusResult.connections.active
      : databaseServerStatusResult.connections.current;

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
