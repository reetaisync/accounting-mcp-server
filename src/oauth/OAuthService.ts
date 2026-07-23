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
    realmId: string,
): Promise<void> {

    const token =
        await this.oauth.exchangeCode(
            code,
            realmId,
        );

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