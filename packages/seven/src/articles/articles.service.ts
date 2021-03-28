import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "./article.entity";
import { ArticleInput } from "./dto/article.dto";

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private readonly articlesRepository: Repository<Article>
    ) {}

    async findAll(): Promise<Article[]> {
        return this.articlesRepository.find();
    }

    async create(data: ArticleInput): Promise<Article> {
        return await this.articlesRepository.save(data);
    }
}
