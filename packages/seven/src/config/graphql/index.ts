import { Injectable } from "@nestjs/common";
import { GqlModuleOptions, GqlOptionsFactory } from "@nestjs/graphql";
import { join } from "path";

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
    createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
        return {
            autoSchemaFile: true,
            sortSchema: true,
            context: ({ req, res }) => ({ req, res }),
            debug: true,
            playground: true,
        };
    }
}
