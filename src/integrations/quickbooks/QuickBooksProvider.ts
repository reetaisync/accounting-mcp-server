import { IAccountingProvider } from "../../sdk/provider/IAccountingProvider.js";
import { ProviderCapabilities } from "../../sdk/provider/ProviderCapabilities.js";
import { ProviderMetadata } from "../../sdk/provider/ProviderMetadata.js";
import type { Company } from "../../domain/models/Company.js";

export class QuickBooksProvider implements IAccountingProvider {

    readonly metadata: ProviderMetadata = {
        id: "quickbooks",
        displayName: "QuickBooks Online",
        version: "1.0.0",
        vendor: "Intuit",
        authentication: "oauth2",
    };

    private connected = false;

    async connect(): Promise<void> {
        this.connected = true;
    }

    async disconnect(): Promise<void> {
        this.connected = false;
    }

    isConnected(): boolean {
        return this.connected;
    }

    getCapabilities(): ProviderCapabilities {
        return {
            supportsInvoices: true,
            supportsCustomers: true,
            supportsPayments: true,
            supportsVendors: true,
            supportsAccounts: true,
            supportsReports: true,
        };
    }

    async getCompany(): Promise<Company> {
        throw new Error("Not implemented yet");
    }

}