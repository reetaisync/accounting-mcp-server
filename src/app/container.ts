import { ProviderFactory } from "../integrations/factory/ProviderFactory.js";
import { AccountingService } from "../services/AccountingService.js";
import { createServer } from "./server.js";

export class ApplicationContainer {

    readonly provider = ProviderFactory.create("quickbooks");

    readonly accountingService =
        new AccountingService(this.provider);

    readonly server = createServer();

}