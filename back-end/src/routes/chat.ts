import { FastifyTypedInstance } from "../types/fastify";
import { ChatController } from "../controllers/chatController";
import z from 'zod';

export async function chatRoutes(app: FastifyTypedInstance) {
    app.post('/chat', {
        schema: {
            tags: ['user'],
            description: 'verify a logged user',
            body: z.object({
                email: z.string().email(),
                password: z.string().min(8)
            }),
            response: {
                200: z.object({
                    message: z.string().default("valid password, user logged"),
                    ok: z.boolean()
                }),
                400: z.object({
                    message: z.string().default("invalid password"),
                    ok: z.boolean()
                })
            }
        }
    }, ChatController.index)
}