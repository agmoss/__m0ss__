import { NODE_ENV } from "@environments";
import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt.guard";
import { LocalAuthGuard } from "./local.guard";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Request() req) {
        if (NODE_ENV === "development") {
            return this.authService.login(req.user);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get("protected")
    getProtected(@Request() req) {
        return req.user;
    }
}
