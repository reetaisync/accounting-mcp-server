import { IAccountingProvider } from "../../sdk/provider/IAccountingProvider.js";

export class ProviderRegistry {

    private readonly providers = new Map<string, IAccountingProvider>();

    register(provider: IAccountingProvider): void {
        this.providers.set(provider.metadata.id, provider);
    }

    get(id: string): IAccountingProvider | undefined {
        return this.providers.get(id);
    }

    getAll(): IAccountingProvider[] {
        return [...this.providers.values()];
    }

    has(id: string): boolean {
        return this.providers.has(id);
    }

}