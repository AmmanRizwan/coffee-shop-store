import { pinoHttp } from "pino-http";
import logger from "../utils/logger";

const pinoLogger = pinoHttp({
  logger
});

export default pinoLogger;