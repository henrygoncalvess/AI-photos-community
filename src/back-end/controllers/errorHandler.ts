import { InternalServerError, MethodNotAllowedError } from "../infra/error";

function onError(error, request, reply) {
  const publicErrorObject = new InternalServerError({
    statusCode: error.statusCode,
    cause: error,
  });

  console.log("\nErro Dentro do catch do errorHandlerController:");
  console.error(publicErrorObject);

  reply.status(publicErrorObject.statusCode).send(publicErrorObject.toJSON());
}

function onNoMatchRoute(request, reply) {
  const publicErrorObject = new MethodNotAllowedError();
  reply.status(publicErrorObject.statusCode).send(publicErrorObject.toJSON());
}

const errorHandler = {
  onError,
  onNoMatchRoute,
};

export default errorHandler;
