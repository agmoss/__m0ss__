import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticlesService } from "./articles.service";
import { ArticlesResolver } from "./articles.resolver";
import { Article } from "./article.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticlesService, ArticlesResolver],
})
export class ArticlesModule {}
