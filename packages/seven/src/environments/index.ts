import * as dotenv from "dotenv";
dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || "development";
const AUTHOR: string = process.env.AUTHOR || "Andrew Moss";
const PORT: number = ((process.env.PORT as unknown) as number) || 4000;
const END_POINT: string = process.env.END_POINT || "graphql";
const RATE_LIMIT_MAX: number =
    ((process.env.RATE_LIMIT_MAX as unknown) as number) || 10000;
const GRAPHQL_DEPTH_LIMIT: number =
    ((process.env.GRAPHQL_DEPTH_LIMIT as unknown) as number) || 3;

const DB_PORT = (process.env.DEV_PORT as unknown) as number;
const DEV_HOST = process.env.DEV_HOST;
const DEV_USERNAME = process.env.DEV_USERNAME;
const DEV_PASSWORD = process.env.DEV_PASSWORD;
const DEV_DATABASE = process.env.DEV_DATABASE;

const SECRET = process.env.SECRET;

export {
    NODE_ENV,
    AUTHOR,
    PORT,
    END_POINT,
    RATE_LIMIT_MAX,
    GRAPHQL_DEPTH_LIMIT,
    DB_PORT,
    DEV_HOST,
    DEV_USERNAME,
    DEV_PASSWORD,
    DEV_DATABASE,
    SECRET,
};
