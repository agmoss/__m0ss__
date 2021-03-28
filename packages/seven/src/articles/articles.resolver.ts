import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
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
    async addArticle(
        @Args("newArticle") newArticle: ArticleInput
    ): Promise<Article> {
        return await this.articlesService.create(newArticle);
    }
}
