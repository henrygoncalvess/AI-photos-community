import { FastifyTypedInstance } from "interfaces/fastify";
// import { loginToken } from "middlewares/auth";
import authentication from "models/authentication";
import session from "models/session";
import * as cookie from "cookie";

export async function sessionRoute(app: FastifyTypedInstance) {
  app.post("/sessions", postHandler);

  async function postHandler(request, reply) {
    const userInputValues = request.body;

    const authenticatedUser = await authentication.getAuthenticatedUser(
      userInputValues.email,
      userInputValues.password,
    );

    const newSession = await session.create(authenticatedUser._id);

    const setCookie = cookie.serialize("session_id", newSession.token, {
      path: "/",
      maxAge: session.EXPIRATION_IN_MILLISECONDS / 1000,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    });

    reply.header("Set-Cookie", setCookie);

    reply.status(201).send(newSession);
  }
}

// export async function authRoutesMiddle(app: FastifyTypedInstance) {
//   app.addHook("onRequest", loginToken);

//   app.post("/login", () => {});
// }
