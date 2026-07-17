import crypto from "node:crypto";
import { OAuthConfig } from "./OAuthConfig.js";

export class IntuitOAuth {

    constructor(
        private readonly config: OAuthConfig,
    ) {}

    createAuthorizationUrl(): string {

    console.log("IntuitOAuth clientId:", this.config.clientId);
    console.log("IntuitOAuth redirectUri:", this.config.redirectUri);

    const base = "https://appcenter.intuit.com/connect/oauth2";

    const params = new URLSearchParams({
        client_id: this.config.clientId,
        response_type: "code",
        scope: "com.intuit.quickbooks.accounting",
        redirect_uri: this.config.redirectUri,
        state: crypto.randomUUID(),
    });

    const url = `${base}?${params.toString()}`;

    console.log("OAuth URL:", url);

    return url;
}

}