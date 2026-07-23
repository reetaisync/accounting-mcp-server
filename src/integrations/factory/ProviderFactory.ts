import type { IAccountingProvider } from "../../sdk/provider/IAccountingProvider.js";
import { QuickBooksProvider } from "../quickbooks/QuickBooksProvider.js";

export class ProviderFactory {

    static createProvider(
        provider: string,
    ): IAccountingProvider {

        switch (provider) {

            case "quickbooks":
                return new QuickBooksProvider();

            default:
                throw new Error("Unsupported provider");

        }

    }

}