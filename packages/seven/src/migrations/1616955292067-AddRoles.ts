import { Roles } from "../roles/roles.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class Roles1616955292067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const rolesRepo = queryRunner.connection.getRepository(Roles);

        await rolesRepo.insert([
            {
                role: "user"
            }, {
                role: "admin"
            }
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
