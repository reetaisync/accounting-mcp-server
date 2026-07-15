import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ApplicationContainer } from "../../app/container.js";
import { registerCompanyTools } from "../tools/company/get-company.js";

export function registerMcp(
    server: McpServer,
    container: ApplicationContainer,
): void {

    registerCompanyTools(server, container);

}