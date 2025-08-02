import { FastifyTypedInstance } from "../types/fastify";

export async function chatRoutes(app: FastifyTypedInstance) {
  app.post("/chat/image", () => {});
}
