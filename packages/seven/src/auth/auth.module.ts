import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { SECRET } from "@environments";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";

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
