import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(userName: string, pass: string): Promise<User> {
        const user = await this.usersService.findOne(userName);

        if (!user) {
            throw new ForbiddenException("User not found!");
        }

        const validCredentials = await bcrypt.compare(pass, user.password);

        if (!validCredentials) {
            throw new ForbiddenException("Credentials are invalid");
        }

        return user;
    }

    async login(user: any) {
        // const payload = { username: user.username, sub: user.userId };

        const _user = await this.validateUser(user.userName, user.password);

        const payload = { username: _user.userName, sub: _user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
