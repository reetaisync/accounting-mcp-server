import { ApplicationContainer } from "./container.js";
import { createMcpServer } from "../mcp/server.js";
import { connectStdio } from "../mcp/transport/stdio.js";

export async function startMcp(
    container: ApplicationContainer,
): Promise<void> {

    const server = createMcpServer(container);

    await connectStdio(server);

    console.log("MCP Server connected via stdio");
}