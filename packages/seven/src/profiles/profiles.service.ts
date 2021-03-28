import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ProfileInput } from "./dto/profile.dto";
import { Profile } from "./profile.entity";

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profile)
        private readonly profilesRepository: Repository<Profile>
    ) {}

    async findAll(): Promise<Profile[]> {
        return this.profilesRepository.find();
    }

    async create(data: ProfileInput): Promise<Profile> {
        return this.profilesRepository.save(data);
    }
}
