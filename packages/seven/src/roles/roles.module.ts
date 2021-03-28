import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Roles } from "./roles.entity";
import { RolesResolver } from "./roles.resolver";
import { RolesService } from "./roles.service";

@Module({
    imports: [TypeOrmModule.forFeature([Roles])],
    providers: [RolesResolver, RolesService],
})
export class RolesModule {}
