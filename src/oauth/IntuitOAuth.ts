import crypto from "node:crypto";
import { OAuthConfig } from "./OAuthConfig.js";
import type { OAuthToken } from "./OAuthToken.js";

export class IntuitOAuth {

    constructor(
        private readonly config: OAuthConfig,
    ) {}

    createAuthorizationUrl(): string {

        const base = "https://appcenter.intuit.com/connect/oauth2";

        const params = new URLSearchParams({
            client_id: this.config.clientId,
            response_type: "code",
            scope: "com.intuit.quickbooks.accounting",
            redirect_uri: this.config.redirectUri,
            state: crypto.randomUUID(),
        });

        return `${base}?${params.toString()}`;
    }

    async exchangeCode(
        code: string,
    ): Promise<OAuthToken> {

        const credentials = Buffer.from(
            `${this.config.clientId}:${this.config.clientSecret}`,
        ).toString("base64");

        const body = new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: this.config.redirectUri,
        });

        const response = await fetch(
            "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${credentials}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "application/json",
                },
                body,
            },
        );

        if (!response.ok) {
            throw new Error(await response.text());
        }

        type IntuitTokenResponse = {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
};

const json = await response.json() as IntuitTokenResponse;

        return {
            accessToken: json.access_token,
            refreshToken: json.refresh_token,
            expiresIn: json.expires_in,
            tokenType: json.token_type,
        };
    }

}