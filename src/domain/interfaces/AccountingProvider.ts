import type { Company } from "../models/Company.js";

export interface AccountingProvider {

    connect(): Promise<void>;

    getCompany(): Promise<Company>;

}