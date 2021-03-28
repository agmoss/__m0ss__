import {
    DB_PORT,
    DEV_DATABASE,
    DEV_PASSWORD,
    DEV_USERNAME,
} from "@environments";
import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            type: "postgres",
            host: "localhost",
            port: DB_PORT,
            username: DEV_USERNAME,
            password: DEV_PASSWORD,
            database: DEV_DATABASE,
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
