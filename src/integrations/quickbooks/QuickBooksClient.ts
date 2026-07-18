import type { OAuthToken } from "../../oauth/OAuthToken.js";

export class QuickBooksClient {

    constructor(
        private readonly token: OAuthToken,
    ) {}

    async get<T>(
        url: string,
    ): Promise<T> {

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.token.accessToken}`,
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.json() as T;

    }

}