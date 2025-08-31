import { FastifyTypedInstance } from "interfaces/fastify";
import session from "models/session";
import user from "models/user";
import handler from "controllers/errorHandler";

export async function userRoute(app: FastifyTypedInstance) {
  app.get("/user", getHandler);

  async function getHandler(request, reply) {
    const headersCookie = request.headers.cookie;
    const sessionToken = headersCookie.split("session_id=")[1];

    const sessionObject = await session.findOneValidByToken(sessionToken);

    await session.renew(sessionObject._id);
    handler.setSessionCookie(sessionObject.token, reply);

    const userFound = await user.findOneById(sessionObject._id);

    reply.status(200).send(userFound);
  }
}
