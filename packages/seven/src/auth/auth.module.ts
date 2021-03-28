import { SECRET } from "@environments";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { UsersModule } from "../users/users.module";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: SECRET,
            signOptions: { expiresIn: "60s" },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
    exports: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
