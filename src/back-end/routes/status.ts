import { FastifyTypedInstance } from "../types/fastify";
import database from "../infra/database"

export async function statusRoutes(app: FastifyTypedInstance) {
  app.get("/status", async (request, reply) => {
    const result = await database.query({ ping: 1 })
    console.log(result)

    reply.status(200).send({ "test": "test" })
  });
}
