import { InternalServerError, MethodNotAllowedError } from "../infra/error";

function errorHandler(error, request, reply) {
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

const handler = {
  errorHandler,
  notFoundHandler,
};

export default handler;
