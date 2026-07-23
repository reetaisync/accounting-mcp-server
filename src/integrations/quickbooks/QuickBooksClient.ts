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
            throw new Error(
                `QuickBooks API Error (${response.status}): ${await response.text()}`,
            );
        }

        return await response.json() as T;

    }

    async getCompany(
        realmId: string,
    ): Promise<any> {

        return this.get(
            `https://sandbox-quickbooks.api.intuit.com/v3/company/${realmId}/companyinfo/${realmId}?minorversion=75`,
        );

    }

}