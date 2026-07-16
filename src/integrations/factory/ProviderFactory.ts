import { QuickBooksProvider } from "../quickbooks/QuickBooksProvider.js";
import { QuickBooksClient } from "../../sdk/quickbooks/QuickBooksClient.js";
import type { IAccountingProvider } from "../../sdk/provider/IAccountingProvider.js";

export class ProviderFactory {

    static createProvider(provider: string): IAccountingProvider {

        switch (provider) {

            case "quickbooks": {

                const client = new QuickBooksClient();

                return new QuickBooksProvider(client);
            }

            default:
                throw new Error("Unsupported provider");
        }

    }

}