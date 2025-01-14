import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { authRoutes, authRoutesMiddle } from './routes/login';
import { fastifySwagger } from '@fastify/swagger';
import { chatRoutes } from './routes/chat';

class App {
    public fastify

    constructor(){
        this.fastify = fastify().withTypeProvider<ZodTypeProvider>()
        this.#middlewares()
    }

    #middlewares(){
        this.fastify.register(fastifyCors, { origin: 'http://localhost:3001' });

        this.fastify.setValidatorCompiler(validatorCompiler);

        this.fastify.setSerializerCompiler(serializerCompiler);

        this.fastify.register(fastifySwagger, {
            openapi: {
                info: {
                    title: "sem nome",
                    version: '1.0.0'
                }
            },
            transform: jsonSchemaTransform
        });

        this.fastify.register(import("@scalar/fastify-api-reference"), {
            routePrefix: '/docs',
            configuration: {
                hideDownloadButton: true,
                forceDarkModeState: 'dark',
                defaultHttpClient: {
                    targetKey: 'js',
                    clientKey: 'fetch',
                }
            }
        });
        
        this.fastify.register(authRoutes);
        this.fastify.register(authRoutesMiddle);
        this.fastify.register(chatRoutes);
    }
}

export default new App().fastify