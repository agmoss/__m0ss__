import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { MediaInput } from "./dto/media.dto";
import { Media } from "./media.entity";
import { MediaService } from "./media.service";

@Resolver((of) => Media)
export class MediaResolver {
    constructor(private readonly mediaService: MediaService) {}

    @Query((returns) => [Media])
    async media(): Promise<Media[]> {
        return await this.mediaService.findAll();
    }

    @Mutation((returns) => Media)
    async addMedia(@Args("newMedia") newMedia: MediaInput): Promise<Media> {
        return await this.mediaService.create(newMedia);
    }
}
