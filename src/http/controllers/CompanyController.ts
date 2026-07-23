import type { FastifyReply, FastifyRequest } from "fastify";
import { QuickBooksService } from "../../integrations/quickbooks/QuickBooksService.js";

export class CompanyController {

    constructor(
        private readonly quickBooksService: QuickBooksService,
    ) {}

    async getCompany(
        _request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<void> {

        const company =
            await this.quickBooksService.getCompany();

        reply.send(company);

    }

}