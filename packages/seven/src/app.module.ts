import { GraphqlOptions, TypeOrmService } from "@config";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesModule } from "./articles/articles.module";
import { ProfilesModule } from "./profiles/profiles.module";
import { MediaModule } from "./media/media.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { AuthController } from "./auth/auth.controller";

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphqlOptions,
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmService,
        }),
        ArticlesModule,
        ProfilesModule,
        MediaModule,
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController, AuthController],
    providers: [AppService],
})
export class AppModule {}
