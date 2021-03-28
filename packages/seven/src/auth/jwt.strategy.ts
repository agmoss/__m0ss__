import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { SECRET } from "@environments";
import { UsersService } from "../users/users.service";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { User } from "../users/user.entity";

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
        console.log(payload)
        const user = await this.usersService.findById(payload.sub);
        return pipe(
            user,
            E.fold<ForbiddenException, User, ForbiddenException | User>(
                (errors) => {
                    return errors;
                },
                (u) => {
                    return u;
                }
            )
        );
    }
}
