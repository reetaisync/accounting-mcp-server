import { ProviderFactory } from "../integrations/factory/ProviderFactory.js";
import { AccountingService } from "../services/AccountingService.js";
import { createServer } from "./server.js";
import { createMcpServer } from "../mcp/mcp-server.js";

export class ApplicationContainer {
    readonly provider = ProviderFactory.create("quickbooks");

    readonly accountingService =
        new AccountingService(this.provider);

    readonly server = createServer();

    readonly mcpServer = createMcpServer(this);
}