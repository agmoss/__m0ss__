import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProfileInput } from "./dto/profile.dto";
import { Profile } from "./profile.entity";
import { ProfilesService } from "./profiles.service";

@Resolver((of) => Profile)
export class ProfilesResolver {
    constructor(private readonly profilesService: ProfilesService) {}

    @Query((returns) => [Profile])
    async Profiles(): Promise<Profile[]> {
        return await this.profilesService.findAll();
    }

    @Mutation((returns) => Profile)
    async addProfile(
        @Args("newProfile") newProfile: ProfileInput
    ): Promise<Profile> {
        return await this.profilesService.create(newProfile);
    }
}
