import type { AccountingProvider } from "../domain/interfaces/AccountingProvider.js";
import type { Company } from "../domain/models/Company.js";

export class AccountingService {
    constructor(
        private readonly provider: AccountingProvider
    ) {}

    async connect(): Promise<void> {
        await this.provider.connect();
    }

    async getCompany(): Promise<Company> {
        return this.provider.getCompany();
    }
}