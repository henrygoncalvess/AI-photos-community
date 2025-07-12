import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

import { z } from "zod";

const envSchema = z.object({
  EMAIL: z.string().email(),
  APP_PASSWORD: z.string(),
  URI_MONGODB: z.string().url(),
  DATABASE: z.string(),
  COLLECTION: z.string(),
  JWT_SECRET: z.string(),
  STABILITY_API_KEY: z.string(),
  STATIC_PAGE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
