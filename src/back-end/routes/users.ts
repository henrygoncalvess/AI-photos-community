import { FastifyTypedInstance } from "../types/fastify";

export async function usersRoutes(app: FastifyTypedInstance) {
  app.get("/users", () => {});

  app.post("/users", () => {});

  app.post("/users/image", () => {});
}
