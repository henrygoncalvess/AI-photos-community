import { FastifyTypedInstance } from "../types/fastify";
import { AuthController } from "../controllers/authController";
import { loginToken } from "../middlewares/auth";

export async function authRoutes(app: FastifyTypedInstance) {
  app.post("/signup", {}, signup);

  async function signup(request, reply) {
    reply.status(200).send();
  }
}

export async function authRoutesMiddle(app: FastifyTypedInstance) {
  app.addHook("onRequest", loginToken);

  app.post("/login", {}, AuthController.login);
}
