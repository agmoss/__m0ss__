import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "src/auth/CurrentUser";
import { JwtAuthGuard } from "src/auth/jwt.guard";
import { Role } from "src/auth/role.enum";
import { Roles } from "src/auth/roles.decorator";
import { RolesGqlGuard } from "src/auth/RolesGql.guard";
import { User } from "src/users/user.entity";

import { GqlAuth } from "../auth/gql.guard";
import { Article } from "./article.entity";
import { ArticlesService } from "./articles.service";
import { ArticleInput } from "./dto/article.dto";

@Resolver((of) => Article)
export class ArticlesResolver {
    constructor(private readonly articlesService: ArticlesService) {}

    @Query((returns) => [Article])
    async articles(): Promise<Article[]> {
        return await this.articlesService.findAll();
    }

    @Mutation((returns) => Article)
    @UseGuards(GqlAuth, RolesGqlGuard)
    @Roles(Role.Admin)
    async addArticle(
        @Args("newArticle") newArticle: ArticleInput,
        @CurrentUser() user: User
    ): Promise<Article> {
        return await this.articlesService.create(newArticle);
    }
}
