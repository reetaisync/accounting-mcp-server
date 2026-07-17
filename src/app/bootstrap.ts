import logger from "../core/logger/logger.js";
import { ApplicationContainer } from "./container.js";
import { startHttp } from "./http.js";
import { startMcp } from "./mcp.js";

export class Bootstrap {

    async start(): Promise<void> {

        logger.info("Bootstrapping Accounting MCP Server...");

        const container = new ApplicationContainer();

        logger.info("Application Container initialized.");

        await startHttp(container);

        await startMcp(container);

        logger.info("Bootstrap complete.");
    }

}