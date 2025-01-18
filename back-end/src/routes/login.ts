import { FastifyTypedInstance } from "../types/fastify";
import { AuthController } from "../controllers/authController";
import { loginToken } from "../middlewares/auth";
import z from 'zod';
import { ObjectId } from "mongodb";

export async function authRoutes(app: FastifyTypedInstance) {
    app.post('/signup', {
        schema: {
            tags: ['authentication'],
            description: 'register a user',
            body: z.object({
                name: z.string().default("John"),
                email: z.string().email().default("test@test.com"),
                password: z.string().min(8).default("12345678")
            }),
            response: {
                201: z.object({
                    message: z.string().default("Email successfully sent to: (example)"),
                    sent: z.boolean().default(true).or(z.object({
                        registered: z.boolean().default(true)
                    }))
                })
            }
        }
    }, AuthController.sigup)
}

export async function authRoutesMiddle(app: FastifyTypedInstance) {
    app.addHook('onRequest', loginToken)

    app.post('/login', {
        schema: {
            tags: ['authentication'],
            description: 'confirms user identity',
            response: {
                200: z.object({
                    message: z.string().default("user registered successfully"),
                    user: z.string().default("username"),
                    id: z.instanceof(ObjectId),
                    ok: z.boolean().default(true)
                }),
                400: z.object({
                    message: z.string().default("Required access token"),
                    ok: z.boolean().default(false)
                }),
                403: z.object({
                    message: z.string().default("Invalid or expired token"),
                    ok: z.boolean().default(false)
                })
            }
        }
    }, AuthController.login)
}