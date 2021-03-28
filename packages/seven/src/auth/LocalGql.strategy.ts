import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { GqlExecutionContext } from "@nestjs/graphql";

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
