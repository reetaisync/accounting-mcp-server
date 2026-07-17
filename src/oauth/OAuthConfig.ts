export interface OAuthConfig {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    environment: "sandbox" | "production";
}