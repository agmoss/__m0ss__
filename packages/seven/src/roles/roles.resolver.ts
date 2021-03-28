import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";
import { RolesInput } from "./dto/roles.dto";

@Resolver((of) => Roles)
export class RolesResolver {
    constructor(private readonly rolesService: RolesService) {}

    @Query((returns) => [Roles])
    async Roles(): Promise<Roles[]> {
        return await this.rolesService.findAll();
    }

    @Mutation((returns) => Roles)
    async addRoles(@Args("newRole") newRole: RolesInput): Promise<Roles> {
        return await this.rolesService.create(newRole);
    }
}
