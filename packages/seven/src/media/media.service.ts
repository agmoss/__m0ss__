import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MediaInput } from "./dto/media.dto";
import { Media } from "./media.entity";

@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Media)
        private readonly MediaRepository: Repository<Media>
    ) {}

    async findAll(): Promise<Media[]> {
        return this.MediaRepository.find();
    }

    async create(data: MediaInput): Promise<Media> {
        return await this.MediaRepository.save(data);
    }
}
