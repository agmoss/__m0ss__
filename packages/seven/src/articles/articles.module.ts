import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Article } from "./article.entity";
import { ArticlesResolver } from "./articles.resolver";
import { ArticlesService } from "./articles.service";

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticlesService, ArticlesResolver],
})
export class ArticlesModule {}
