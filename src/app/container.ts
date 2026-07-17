import { ProviderFactory } from "../integrations/factory/ProviderFactory.js";
import { AccountingService } from "../services/AccountingService.js";
import { createServer } from "./server.js";
import { createMcpServer } from "../mcp/server.js";
import { MemoryTokenStore } from "../oauth/MemoryTokenStore.js";
import { IntuitOAuth } from "../oauth/IntuitOAuth.js";
import { OAuthService } from "../oauth/OAuthService.js";
import { OAuthController } from "../http/controllers/OAuthController.js";

export class ApplicationContainer {
    readonly provider = ProviderFactory.createProvider("quickbooks");

    readonly accountingService =
        new AccountingService(this.provider);
    readonly tokenStore =
    new MemoryTokenStore();

readonly intuitOAuth =
    new IntuitOAuth({
        clientId: process.env.QBO_CLIENT_ID ?? "",
        clientSecret: process.env.QBO_CLIENT_SECRET ?? "",
        redirectUri: process.env.QBO_REDIRECT_URI ?? "",
        environment: "sandbox",
    });

readonly oauthService =
    new OAuthService(
        this.intuitOAuth,
        this.tokenStore,
    );

readonly oauthController =
    new OAuthController(
        this.oauthService,
    );

    readonly server = createServer(this);

    readonly mcpServer = createMcpServer(this);
}