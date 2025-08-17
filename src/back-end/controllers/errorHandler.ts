import {
  InternalServerError,
  MethodNotAllowedError,
  NotFoundError,
  ValidationError,
} from "../infra/error";

function errorHandler(error, request, reply) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    return reply.status(error.statusCode).send(error.toJSON());
  }

  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.log("\nErro Dentro do errorHandlerController:");
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
