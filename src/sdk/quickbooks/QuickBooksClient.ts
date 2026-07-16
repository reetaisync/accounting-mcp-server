import type { Company } from "../../domain/models/Company.js";

export class QuickBooksClient {

    async getCompanyInfo(): Promise<Company> {
        return {
            id: "demo-company",
            name: "Demo Company",
        } as Company;
    }

    async getCustomers() {}

    async getInvoices() {}

    async createInvoice() {}

}