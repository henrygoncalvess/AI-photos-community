import { FastifyTypedInstance } from "../types/fastify";
import { HomeController } from "../controllers/homeController";
import z from 'zod';

export async function homeRoutes(app: FastifyTypedInstance) {
    app.post('/home', {
        schema: {
            tags: ['user'],
            description: 'verify a logged user',
            body: z.object({
                name: z.string(),
                password: z.string().min(8)
            }),
            response: {
                201: z.object({
                    message: z.string().default("credential OK"),
                    ok: z.boolean()
                }),
                400: z.object({
                    message: z.string().default("invalid credential"),
                    ok: z.boolean()
                })
            }
        }
    }, HomeController.index)
}