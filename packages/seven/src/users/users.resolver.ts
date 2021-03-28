import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInput } from "./dto/user.dto";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Resolver((of) => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query((returns) => User)
    async Users(@Args("user_name") userName: string): Promise<User> {
        return await this.usersService.findOne(userName);
    }

    @Mutation((returns) => User)
    async addUser(@Args("newUser") newUser: UserInput): Promise<User> {
        return await this.usersService.create(newUser);
    }
}
