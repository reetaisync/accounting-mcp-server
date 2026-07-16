import type { IAccountingProvider } from "../sdk/provider/IAccountingProvider.js";
import type { Company } from "../domain/models/Company.js";

export class AccountingService {
    constructor(
        private readonly provider: IAccountingProvider
    ) {}

    async connect(): Promise<void> {
        await this.provider.connect();
    }

    async getCompany(): Promise<Company> {
        return this.provider.getCompany();
    }
}