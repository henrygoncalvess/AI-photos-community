import { FastifyTypedInstance } from "../interfaces/fastify";
// import { loginToken } from "../middlewares/auth";
import user from "../models/user";

export async function userRoute(app: FastifyTypedInstance) {
  app.post("/users", signin);

  async function signin(request, reply) {
    const userInputValues = request.body;

    const newUser = await user.create(userInputValues);

    reply.status(201).send(newUser);
  }
}

// export async function authRoutesMiddle(app: FastifyTypedInstance) {
//   app.addHook("onRequest", loginToken);

//   app.post("/login", () => {});
// }
