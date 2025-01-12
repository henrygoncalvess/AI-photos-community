import { FastifyTypedInstance } from "../types/fastify";
import { AuthController } from "../controllers/authController";
import { loginToken } from "../middlewares/auth";
import z from 'zod';

export async function authRoutes(app: FastifyTypedInstance) {
    app.post('/signup', {
        schema: {
            tags: ['authentication'],
            description: 'register a user',
            body: z.object({
                name: z.string(),
                email: z.string().email(),
                password: z.string()
            }),
            response: {
                201: z.object({
                    message: z.string().default("Email successfully sent to: (example)"),
                    ok: z.boolean()
                }),
                400: z.object({
                    message: z.string().default("already registered user"),
                    ok: z.boolean()
                })
            }
        }
    }, AuthController.sigup)
}

export async function authRoutesMiddle(app: FastifyTypedInstance) {
    app.addHook('onRequest', loginToken)

    app.get('/login', {
        schema: {
            tags: ['authentication'],
            description: 'confirms user identity and shows login option',
            response: {
                200: z.object({
                    message: z.string().default("user (example) registered successfully"),
                    ok: z.boolean()
                }),
                400: z.object({
                    message: z.string().default("Required access token"),
                    ok: z.boolean()
                }),
                403: z.object({
                    message: z.string().default("Invalid or expired token"),
                    ok: z.boolean()
                })
            }
        }
    }, AuthController.login)
}