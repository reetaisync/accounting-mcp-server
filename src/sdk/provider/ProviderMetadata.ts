export interface ProviderMetadata {
    id: string;
    displayName: string;
    version: string;
    vendor: string;

    authentication:
        | "oauth2"
        | "apikey"
        | "basic";
}