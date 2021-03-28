import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { AuthService } from "./auth.service";

@Injectable()
export class LocalGqlStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }

    async validate(username: string, password: string): Promise<any> {
        return await this.authService.validateUser(username, password);
    }
}
