import Fastify from "fastify";
import type { ApplicationContainer } from "./container.js";

export function createServer(
    container: ApplicationContainer,
) {
    const app = Fastify({
        logger: false,
    });

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

    app.get("/oauth/status", async () => {
        return {
            connected: await container.oauthService.isConnected(),
        };
    });

    return app;
}