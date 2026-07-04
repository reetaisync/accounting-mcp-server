import type { AccountingProvider } from "../../domain/interfaces/AccountingProvider.js";
import { QuickBooksProvider } from "../quickbooks/QuickBooksProvider.js";

export class ProviderFactory {
    static create(provider: "quickbooks"): AccountingProvider {
        switch (provider) {
            case "quickbooks":
                return new QuickBooksProvider();

            default:
                throw new Error("Unsupported provider");
        }
    }
}