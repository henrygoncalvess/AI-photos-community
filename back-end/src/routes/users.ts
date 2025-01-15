import { FastifyTypedInstance } from "../types/fastify";
import { UsersController } from "../controllers/usersController";
import z from 'zod';

export async function usersRoutes(app: FastifyTypedInstance) {
    app.post('/users', {
        schema: {
            tags: ['user'],
            description: 'verify a logged user',
            body: z.object({
                email: z.string().email().default("test@test.com"),
                password: z.string().min(8).default("12345678")
            }),
            response: {
                200: z.object({
                    message: z.string().default("valid password, user logged"),
                    ok: z.boolean().default(true)
                }),
                403: z.object({
                    message: z.string().default("invalid password"),
                    password: z.boolean().default(false)
                }),
                400: z.object({
                    message: z.string().default("unregistered user"),
                    user: z.boolean().default(false)
                })
            }
        }
    }, UsersController.verify)
}