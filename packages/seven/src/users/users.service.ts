import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as E from "fp-ts/lib/Either";
import * as bcrypt from "bcrypt";

import { UserInput } from "./dto/user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) {}

    async findOne(user_name: string): Promise<User> {
        return this.usersRepository.findOne({
            where: {
                user_name: user_name,
            },
        });
    }

    async findById(id: number): Promise<E.Either<ForbiddenException, User>> {
        const user = await this.usersRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!user) {
            return E.left(new ForbiddenException("User not found"));
        }
        return E.right(user);
    }

    async create(data: UserInput): Promise<User> {
        return this.usersRepository.save({
            ...data,
            password: await bcrypt.hash(data.password, 10),
        });
    }
}
