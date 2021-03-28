import {MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../users/user.entity";

export class AddUser1616956973220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userRepo = queryRunner.connection.getRepository(User);
        await userRepo.insert([
			{
				userName: "andrew",
				password: 'XXXXXXX',
			},
            {
				userName: "gordon",
				password: 'XXXXXXXX',
			},
		])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

