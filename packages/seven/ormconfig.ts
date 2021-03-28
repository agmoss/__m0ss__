import * as env from "./src/environments"

export = {
    host: env.DEV_HOST,
    type: 'postgres',
    port: env.DB_PORT,
    username: env.DEV_USERNAME,
    password: env.DEV_PASSWORD,
    database: env.DEV_DATABASE,
    entities: [
        'src/**/**.entity{.ts,.js}',
    ],
    migrations: [
        'src/migrations/*.ts',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    },
    synchronize: true,
    migrationsTableName: "migrations_typeorm",
    migrationsRun: true
};
