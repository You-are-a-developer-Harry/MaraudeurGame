import { createLogger, format, transports } from "winston";
import { config } from "./config";

export const logger = createLogger({
  level: config.logLevel,
  format: format.combine(format.splat(), format.simple()),
  transports: [new transports.Console()],
})
