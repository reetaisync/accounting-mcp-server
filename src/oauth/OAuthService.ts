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

    async exchangeCode(
        code: string,
    ): Promise<void> {

        const token =
            await this.oauth.exchangeCode(code);

        await this.tokenStore.save(
            "quickbooks",
            token,
        );

    }

    async isConnected(): Promise<boolean> {

        const token =
            await this.tokenStore.load("quickbooks");

        return token !== null;

    }

}