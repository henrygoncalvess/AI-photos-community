import { FastifyTypedInstance } from "../types/fastify";
import database from "../infra/database";
import { InternalServerError, MethodNotAllowedError } from "../infra/error";

const opts = {
  errorHandler: errorHandlerController,
};

function errorHandlerController(error, request, reply) {
  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.log("\nErro Dentro do catch do errorHandlerController:");
  console.error(publicErrorObject);

  reply.status(publicErrorObject.statusCode).send(publicErrorObject.toJSON());
}

function notFoundHandler(request, reply) {
  const publicErrorObject = new MethodNotAllowedError();
  reply.status(publicErrorObject.statusCode).send(publicErrorObject.toJSON());
}

export async function statusRoutes(app: FastifyTypedInstance) {
  app.setNotFoundHandler(notFoundHandler);

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
