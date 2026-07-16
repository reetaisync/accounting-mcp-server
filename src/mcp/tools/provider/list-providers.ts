import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ApplicationContainer } from "../../../app/container.js";

export function registerProviderTools(
    server: McpServer,
    _container: ApplicationContainer,
): void {

    server.tool(
        "listProviders",
        "List supported accounting providers",
        {},
        async () => {

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(
                            [
                                {
                                    id: "quickbooks",
                                    name: "QuickBooks Online",
                                    authentication: "oauth2",
                                    version: "1.0.0",
                                },
                            ],
                            null,
                            2,
                        ),
                    },
                ],
            };

        },
    );

}