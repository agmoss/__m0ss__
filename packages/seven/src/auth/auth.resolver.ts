import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { AuthService } from "./auth.service";
import { AccessToken, LoginInput } from "./dto/auth.dto";
import { LocalGqlStrategy } from "./LocalGql.strategy";

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalGqlStrategy)
    @Mutation((returns) => AccessToken)
    async login(@Args("loginInput") userLogin: LoginInput) {
        return this.authService.login(userLogin);
    }
}
