import { OAuthToken, TokenStore } from "./TokenStore.js";

export class MemoryTokenStore implements TokenStore {

    private readonly tokens = new Map<string, OAuthToken>();

    async save(provider: string, token: OAuthToken): Promise<void> {
        this.tokens.set(provider, token);
    }

    async load(provider: string): Promise<OAuthToken | null> {
        return this.tokens.get(provider) ?? null;
    }

    async remove(provider: string): Promise<void> {
        this.tokens.delete(provider);
    }

}