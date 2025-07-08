import pino from "pino";
import { env } from "../config/env";

export const logger = pino({
  level: env.logLevel,
  transport:
    env.logLevel === "debug"
      ? { target: "pino-pretty", options: { colorize: true } }
      : undefined,
});
