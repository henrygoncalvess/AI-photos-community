import { FastifyTypedInstance } from "../types/fastify";

export async function statusRoutes(app: FastifyTypedInstance) {
  app.get("/status", (request, reply) => {
    reply.status(200).send({ "test": "test" })
  });
}
