import { GraphQLClient } from "graphql-request";

export const getEndpoint = () => {
    let ENDPOINT = "";
    if (process.env.NODE_ENV === "development") {
        ENDPOINT = "http://localhost:1337";
    } else if (process.env.NODE_ENV === "production") {
        ENDPOINT = "https://honeyy.azurewebsites.net";
    }
    return ENDPOINT;
};

export const client = new GraphQLClient(`${getEndpoint()}/graphql`, {
    mode: "cors",
});
