import { FastifyTypedInstance } from "../types/fastify";
import { UsersController } from "../controllers/usersController";

export async function usersRoutes(app: FastifyTypedInstance) {
  app.get("/users", {}, UsersController.all);

  app.post("/users", {}, UsersController.verify);

  app.post("/users/image", {}, UsersController.check);
}
