import { AccountingService } from "../services/AccountingService.js";
import { ProviderFactory } from "../integrations/factory/ProviderFactory.js";

const provider = ProviderFactory.create("quickbooks");

const service = new AccountingService(provider);

const company = await service.getCompany();

console.log(company);