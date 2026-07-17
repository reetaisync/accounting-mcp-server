import { OAuthConfig } from "./OAuthConfig.js";
import crypto from "node:crypto";

export class IntuitOAuth {

    constructor(
        private readonly config: OAuthConfig
    ) {}

    createAuthorizationUrl() {

        const state = crypto.randomUUID();

        const base =
            this.config.environment === "production"
                ? "https://appcenter.intuit.com/connect/oauth2"
                : "https://appcenter.intuit.com/connect/oauth2";

        const params = new URLSearchParams({

            client_id: this.config.clientId,

            response_type: "code",

            scope: "com.intuit.quickbooks.accounting",

            redirect_uri: this.config.redirectUri,

            state,

        });

        return `${base}?${params.toString()}`;

    }

}