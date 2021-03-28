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
import { RolesModule } from "./roles/roles.module";

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
        RolesModule
    ],
    controllers: [AppController, AuthController],
    providers: [AppService],
})
export class AppModule {}
