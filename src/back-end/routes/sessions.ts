import { FastifyTypedInstance } from "interfaces/fastify";
import authentication from "models/authentication";
import session from "models/session";
import handler from "controllers/errorHandler";

export async function sessionRoute(app: FastifyTypedInstance) {
  app.post("/sessions", postHandler);

  async function postHandler(request, reply) {
    const userInputValues = request.body;

    const authenticatedUser = await authentication.getAuthenticatedUser(
      userInputValues.email,
      userInputValues.password,
    );

    const newSession = await session.create(authenticatedUser._id);

    handler.setSessionCookie(newSession.token, reply);

    reply.status(201).send(newSession);
  }
}
