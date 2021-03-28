import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { RolesInput } from "./dto/roles.dto";
import { Roles } from "./roles.entity";

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Roles)
        private readonly rolesRepository: Repository<Roles>
    ) {}

    async findAll(): Promise<Roles[]> {
        return this.rolesRepository.find();
    }

    async create(data: RolesInput): Promise<Roles> {
        return await this.rolesRepository.save(data);
    }
}
