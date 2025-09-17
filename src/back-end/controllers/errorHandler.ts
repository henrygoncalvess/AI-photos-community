import * as cookie from "cookie";
import {
  InternalServerError,
  MethodNotAllowedError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from "infra/error";
import session from "models/session";

function errorHandler(error, request, reply) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    return reply.status(error.statusCode).send(error.toJSON());
  }

  if (error instanceof UnauthorizedError) {
    clearSessionCookie(reply);
    return reply.status(error.statusCode).send(error.toJSON());
  }

  const publicErrorObject = new InternalServerError({
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

function setSessionCookie(sessionToken, reply) {
  const setCookie = cookie.serialize("session_id", sessionToken, {
    path: "/",
    maxAge: session.EXPIRATION_IN_MILLISECONDS / 1000,
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
  reply.header("Set-Cookie", setCookie);
}

function clearSessionCookie(reply) {
  const setCookie = cookie.serialize("session_id", "invalid", {
    path: "/",
    maxAge: -1,
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
  reply.header("Set-Cookie", setCookie);
}

const handler = {
  errorHandler,
  notFoundHandler,
  setSessionCookie,
  clearSessionCookie,
};

export default handler;
