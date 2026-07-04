import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const ConfigSchema = z.object({
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .default("development"),

    PORT: z
        .string()
        .default("3000"),

    LOG_LEVEL: z
        .string()
        .default("info")
});

const config = ConfigSchema.parse(process.env);

export default config;