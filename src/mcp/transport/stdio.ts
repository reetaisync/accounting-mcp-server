import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

/**
 * Connects the MCP server to the STDIO transport.
 * This is used by Claude Desktop and MCP Inspector.
 */
export async function connectStdio(
  server: McpServer,
): Promise<void> {
  const transport = new StdioServerTransport();

  await server.connect(transport);
}