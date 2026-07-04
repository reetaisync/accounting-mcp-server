import logger from "../core/logger/logger.js";
import { ApplicationContainer } from "./container.js";

export class Bootstrap {

    async start(): Promise<void> {

        logger.info("Bootstrapping Accounting MCP Server...");

        const container = new ApplicationContainer();
        await container.accountingService.connect();

        logger.info("Application Container initialized.");
        logger.info("Accounting Service initialized.");
        logger.info("Fastify initialized.");
        
        // We'll add Fastify here next
        // We'll add MCP here after that

    }

}