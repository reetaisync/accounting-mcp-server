import type { AccountingProvider } from "../../domain/interfaces/AccountingProvider.js";
import type { Company } from "../../domain/models/Company.js";

export class QuickBooksProvider implements AccountingProvider {

    async connect(): Promise<void> {
        // OAuth comes later
    }

    async getCompany(): Promise<Company> {
        return {id: "12345",name: "Demo QuickBooks Company"};
    }

}