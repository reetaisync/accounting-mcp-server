export interface OAuthToken {

    accessToken: string;

    refreshToken: string;

    expiresIn: number;

    tokenType: string;

    realmId?: string;

}

export interface TokenStore {

    save(provider: string, token: OAuthToken): Promise<void>;

    load(provider: string): Promise<OAuthToken | null>;

    remove(provider: string): Promise<void>;

}