import { IntuitOAuth } from "./IntuitOAuth.js";
import { TokenStore } from "./TokenStore.js";

export class OAuthService {

    constructor(
        private readonly oauth: IntuitOAuth,
        private readonly tokenStore: TokenStore,
    ) {}

    getAuthorizationUrl(): string {
        return this.oauth.createAuthorizationUrl();
    }

    async isConnected(): Promise<boolean> {

        const token = await this.tokenStore.load("quickbooks");

        return token !== null;

    }

}