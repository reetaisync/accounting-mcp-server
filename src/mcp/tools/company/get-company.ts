import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ApplicationContainer } from "../../../app/container.js";

export function registerCompanyTools(
    server: McpServer,
    container: ApplicationContainer,
): void {

    server.tool(
        "get_company",
        "Returns company information",
        {},
        async () => {

            const company =
                await container.accountingService.getCompany();

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(company, null, 2),
                    },
                ],
            };
        },
    );

}