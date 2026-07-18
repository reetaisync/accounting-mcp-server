import type { FastifyReply, FastifyRequest } from "fastify";
import { OAuthService } from "../../oauth/OAuthService.js";

export class OAuthController {

    constructor(
        private readonly oauthService: OAuthService,
    ) {}

    async login(
        _request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<void> {

        const url = this.oauthService.getAuthorizationUrl();

        reply.redirect(url);

    }

    async callback(
    request: FastifyRequest<{
        Querystring: {
            code: string;
            realmId: string;
            state: string;
        };
    }>,
    reply: FastifyReply,
): Promise<void> {

    await this.oauthService.exchangeCode(
        request.query.code,
    );

    reply.send({
        success: true,
        message: "QuickBooks connected successfully!",
        realmId: request.query.realmId,
    });

}

}