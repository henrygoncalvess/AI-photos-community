import { ObjectId } from "mongodb";
import { ChatController } from "../controllers/chatController";
import { FastifyTypedInstance } from "../types/fastify";
import z from 'zod';

export async function chatRoutes(app: FastifyTypedInstance) {
    app.post('/chat', {
        schema: {
            tags: ['chat'],
            description: 'return a logged in user id',
            body: z.object({
                name: z.string()
            }),
            response: {
                200: z.instanceof(ObjectId)
            }
        }
    }, ChatController.index)
}