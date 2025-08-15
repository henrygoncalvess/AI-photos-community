import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { statusRoutes } from "./routes/status";
import { userRoute } from "./routes/users";
import { env } from "./env";
import handler from "./controllers/errorHandler";
// import { fastifySwagger } from '@fastify/swagger';
// import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
// import path from 'node:path';

class App {
  public fastify;

  constructor() {
    // this.fastify = fastify().withTypeProvider<ZodTypeProvider>()
    this.fastify = fastify();
    this.#middlewares();
  }

  #middlewares() {
    this.fastify.register(fastifyCors, {
      origin: !(process.env.NODE_ENV === "production")
        ? "*"
        : env.STATIC_PAGE_URL,
    });

    // this.fastify.setValidatorCompiler(validatorCompiler);

    // this.fastify.setSerializerCompiler(serializerCompiler);

    // this.fastify.register(fastifySwagger, {
    //     openapi: {
    //         info: {
    //             title: "AI-photos-community",
    //             version: '1.0.0'
    //         },
    //     },
    //     transform: jsonSchemaTransform
    // });

    // this.fastify.register(import("@scalar/fastify-api-reference"), {
    //     routePrefix: '/docs',
    //     configuration: {
    //         hideDownloadButton: true,
    //         forceDarkModeState: 'dark',
    //         defaultHttpClient: {
    //             targetKey: 'js',
    //             clientKey: 'fetch',
    //         }
    //     }
    // });

    // this.fastify.register(import("@fastify/static"), {
    //     root: path.join(__dirname, "../uploads"),
    //     prefix: "/images"
    // })

    this.fastify.setNotFoundHandler(handler.notFoundHandler);
    this.fastify.setErrorHandler(handler.errorHandler);

    this.fastify.register(statusRoutes, { prefix: "/api/v1" });
    this.fastify.register(userRoute, { prefix: "/api/v1" });
  }
}

export default new App().fastify;
