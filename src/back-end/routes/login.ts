import { FastifyTypedInstance } from "../types/fastify";
import { loginToken } from "../middlewares/auth";
import errorHandler from "../controllers/errorHandler";

const opts = {
  errorHandler: errorHandler.onError,
};

export async function authRoutes(app: FastifyTypedInstance) {
  app.post("/signup", opts, signup);

  async function signup(request, reply) {
    reply.status(200).send();
  }
}

export async function authRoutesMiddle(app: FastifyTypedInstance) {
  app.addHook("onRequest", loginToken);

  app.post("/login", opts, () => {});
}
