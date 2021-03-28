import { SECRET } from "@environments";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { ExtractJwt, Strategy } from "passport-jwt";

import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: SECRET,
        });
    }

    async validate(payload: any) {
        const user = await this.usersService.findById(payload.sub);
        return pipe(
            user,
            E.fold<ForbiddenException, User, ForbiddenException | User>(
                (errors) => errors,
                (u) => u
            )
        );
    }
}
