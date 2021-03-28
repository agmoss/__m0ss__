import { GraphqlOptions, TypeOrmService } from "@config";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesModule } from "./articles/articles.module";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { MediaModule } from "./media/media.module";
import { ProfilesModule } from "./profiles/profiles.module";
import { RolesModule } from "./roles/roles.module";
import { UsersModule } from "./users/users.module";

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
        RolesModule,
    ],
    controllers: [AppController, AuthController],
    providers: [AppService],
})
export class AppModule {}
