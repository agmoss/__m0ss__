import { Controller, Request, Post, UseGuards, Get } from "@nestjs/common";
import { JwtAuthGuard } from "./jwt.guard";
import { LocalAuthGuard } from "./local.guard";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("protected")
    getProtected(@Request() req) {
        return req.user;
    }
}
