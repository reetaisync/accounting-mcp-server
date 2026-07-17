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

        console.log("Authorization Code:", request.query.code);
        console.log("Realm ID:", request.query.realmId);

        reply.send({
            success: true,
            code: request.query.code,
            realmId: request.query.realmId,
        });

    }

}