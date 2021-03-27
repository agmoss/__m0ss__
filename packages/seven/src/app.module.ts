import { GraphqlOptions, TypeOrmService } from "@config";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesModule } from './articles/articles.module';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphqlOptions
        }),
        TypeOrmModule.forRootAsync({
			useClass: TypeOrmService
		}),
        ArticlesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
