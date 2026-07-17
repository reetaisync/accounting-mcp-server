import { ApplicationContainer } from "./container.js";

export async function startHttp(
    container: ApplicationContainer,
): Promise<void> {

    await container.server.listen({
        port: 3000,
        host: "0.0.0.0",
    });

    console.log("HTTP Server: http://localhost:3000");
}