import { ObjectId } from "mongodb";
import { ChatController } from "../controllers/chatController";
import { FastifyTypedInstance } from "../types/fastify";
import z from 'zod';

export async function chatRoutes(app: FastifyTypedInstance) {
    app.get('/chat', {
        schema: {
            tags: ['chat'],
            description: 'returns all logged in users',
            response: {
                200: z.array(z.object({
                    _id: z.instanceof(ObjectId),
                    name: z.string().default("John"),
                    email: z.string().email().default("john@john.com"),
                    password: z.string().min(8).default("12345678")
                }))
            }
        }
    }, ChatController.index)

    app.post('/chat', {
        schema: {
            tags: ['chat'],
            description: 'returns all logged in users',
            response: {
                200: z.array(z.object({
                    _id: z.instanceof(ObjectId),
                    name: z.string().default("John"),
                    email: z.string().email().default("john@john.com"),
                    password: z.string().min(8).default("12345678")
                }))
            }
        }
    }, ChatController.index)
}