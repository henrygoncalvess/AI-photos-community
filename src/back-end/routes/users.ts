import { FastifyTypedInstance } from "interfaces/fastify";
// import { loginToken } from "middlewares/auth";
import user from "models/user";

export async function userRoute(app: FastifyTypedInstance) {
  app.post("/users", postHandler);

  async function postHandler(request, reply) {
    const userInputValues = request.body;

    const newUser = await user.create(userInputValues);

    reply.status(201).send(newUser);
  }

  app.get("/users/:username", getHandler);

  async function getHandler(request, reply) {
    const userFound = await user.findOneByUsername(request.params.username);

    reply.status(200).send(userFound);
  }
}

// export async function authRoutesMiddle(app: FastifyTypedInstance) {
//   app.addHook("onRequest", loginToken);

//   app.post("/login", () => {});
// }
