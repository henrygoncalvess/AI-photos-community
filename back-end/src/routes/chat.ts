import { ChatController } from "../controllers/chatController";
import { FastifyTypedInstance } from "../types/fastify";
import z from 'zod';

export async function chatRoutes(app: FastifyTypedInstance) {
    app.post('/chat/image', {
        schema: {
            tags: ['chat'],
            description: 'generate an image',
            body: z.object({
                prompt: z.string().default("an apple"),
                id: z.string().default("12jb132kr")
            }),
            response: {
                200: z.object({
                    message: z.string().default("image successfully generated"),
                    urlImage: z.string().default("http://localhost:3000/images/id.jpeg"),
                    ok: z.boolean().default(true)
                }),
                500: z.object({
                    status: z.number().default(403),
                    message: z.string().default("Your request was flagged by our content moderation system")
                })
            }
        }
    }, ChatController.index)
}