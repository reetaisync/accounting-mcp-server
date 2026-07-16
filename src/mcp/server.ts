import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerMcp } from "./registry/registry.js";
import type { ApplicationContainer } from "../app/container.js";

export function createMcpServer(
    container: ApplicationContainer,
) {
    const server = new McpServer({
        name: "Accounting MCP Server",
        version: "0.1.0",
    });

    registerMcp(server, container);

    return server;
}