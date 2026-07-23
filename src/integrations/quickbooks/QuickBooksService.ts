import { QuickBooksClient } from "./QuickBooksClient.js";
import type { TokenStore } from "../../oauth/TokenStore.js";

export class QuickBooksService {

    constructor(
        private readonly tokenStore: TokenStore,
    ) {}

    async getCompany(): Promise<any> {

        const token =
            await this.tokenStore.load("quickbooks");

        if (!token) {
            throw new Error("QuickBooks is not connected.");
        }

        if (!token.realmId) {
            throw new Error("Realm ID not found.");
        }

        const client =
            new QuickBooksClient(token);

        return client.getCompany(token.realmId);

    }

}