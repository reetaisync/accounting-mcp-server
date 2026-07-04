import logger from "../core/logger/logger.js";
import config from "../core/config/config.js";
import { Bootstrap } from "./bootstrap.js";

const app = new Bootstrap();

await app.start();
logger.info("Accounting MCP Server starting...");

logger.info(`Environment : ${config.NODE_ENV}`);
logger.info(`Port        : ${config.PORT}`);
logger.info(`Log Level   : ${config.LOG_LEVEL}`);

