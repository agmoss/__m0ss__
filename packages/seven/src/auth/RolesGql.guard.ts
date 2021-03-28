import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class RolesGqlGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);

        const roles = this.reflector.get<readonly string[]>(
            "roles",
            ctx.getHandler()
        );

        if (!roles) {
            return true;
        }

        const user = ctx.getContext().req.user;

        const userRoles = user.roles.map((r) => r.role);

        const _hasRole = () => {
            return roles.some((role) => userRoles.includes(role));
        };
        return user && user.roles && _hasRole();
    }
}
