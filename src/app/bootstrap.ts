import logger from "../core/logger/logger.js";
import { createMcpServer } from "../mcp/server.js";
import { connectStdio } from "../mcp/transport/stdio.js";
import { ApplicationContainer } from "./container.js";

export class Bootstrap {

    async start(): Promise<void> {

        logger.info("Bootstrapping Accounting MCP Server...");

        const container = new ApplicationContainer();

        const server = createMcpServer(container);

        await connectStdio(server);

        //logger.info("Application Container initialized.");
        //logger.info("Accounting Service initialized.");
        //logger.info("Fastify initialized.");
        
        // We'll add Fastify here next
        // We'll add MCP here after that

    }

}