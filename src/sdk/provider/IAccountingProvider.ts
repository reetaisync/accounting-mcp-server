import { ProviderCapabilities } from "./ProviderCapabilities.js";
import { ProviderMetadata } from "./ProviderMetadata.js";
import type { Company } from "../../domain/models/Company.js";

export interface IAccountingProvider {

    readonly metadata: ProviderMetadata;

    connect(): Promise<void>;

    disconnect(): Promise<void>;

    isConnected(): boolean;

    getCapabilities(): ProviderCapabilities;

    getCompany(): Promise<Company>;
}