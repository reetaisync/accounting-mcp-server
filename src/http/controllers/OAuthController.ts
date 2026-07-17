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

}