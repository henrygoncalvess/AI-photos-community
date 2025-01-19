import { FastifyTypedInstance } from "../types/fastify";
import { UsersController } from "../controllers/usersController";
import z from 'zod';

export async function usersRoutes(app: FastifyTypedInstance) {
    app.post('/users/url', {
        schema: {
            tags: ['user'],
            description: 'returns the image url',
            body: z.object({
                email: z.string().email().default("test@test.com"),
            }),
            response: {
                200: z.object({
                    urlImage: z.string().default("http://localhost:3000/images/id.jpeg"),
                    prompt: z.string().default("an apple"),
                    ok: z.boolean().default(true)
                })
            }
        }
    }, UsersController.url)

    app.post('/users', {
        schema: {
            tags: ['user'],
            description: 'verify a registered user',
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

    app.post('/users/image', {
        schema: {
            tags: ['user'],
            description: 'checks if user generated image',
            body: z.object({
                email: z.string().email().default("test@test.com"),
            }),
            response: {
                200: z.object({
                    message: z.string().default("user generated image"),
                    ok: z.boolean().default(true)
                }),
                401: z.object({
                    message: z.string().default("user did not generate image"),
                    image: z.boolean().default(false)
                }),
                400: z.object({
                    message: z.string().default("user not found"),
                    user: z.boolean().default(false)
                })
            }
        }
    }, UsersController.check)
}