import Fastify from "fastify";
import type { ApplicationContainer } from "./container.js";
import { QuickBooksService } from "../integrations/quickbooks/QuickBooksService.js";

export function createServer(
    container: ApplicationContainer,
) {

    const app = Fastify({
        logger: false,
    });

    const quickBooksService =
        new QuickBooksService(
            container.tokenStore,
        );

    app.get("/", async () => {

        return {
            name: "Accounting MCP Server",
            version: "0.1.0",
            status: "running",
        };

    });

    app.get("/health", async () => {

        return {
            status: "ok",
        };

    });

    app.get(
        "/oauth/login",
        container.oauthController.login.bind(
            container.oauthController,
        ),
    );

    app.get(
        "/oauth/callback",
        container.oauthController.callback.bind(
            container.oauthController,
        ),
    );

    app.get("/oauth/status", async () => {

        return {
            connected: await container.oauthService.isConnected(),
        };

    });

    app.get("/company", async () => {

        return await quickBooksService.getCompany();

    });

    return app;

}