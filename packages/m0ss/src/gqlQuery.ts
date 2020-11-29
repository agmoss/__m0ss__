import { IArticle, IArticleTarget } from "blog-types";
import gql from "graphql-tag";

import { getText } from "./getData";
import { getEndpoint } from "./gqlClient";

export const queryProfile = gql`
    query {
        profile(id: "5eb836852461d119fd37aada") {
            firstName
            lastName
            profilePhoto {
                url
            }
            email
            rant {
                url
            }
            bio
            email
            color
        }
    }
`;

export const queryArticles = gql`
    query {
        articles {
            id
            title
            description
            internalLink
            image {
                url
            }
            markdown {
                url
            }
            markdownLink
            externalLink
        }
    }
`;

export const queryArticle = gql`
    query article($id: ID!) {
        article(id: $id) {
            id
            title
            description
            internalLink
            image {
                url
            }
            markdown {
                url
            }
            markdownLink
            externalLink
        }
    }
`;

export const queryMedia = gql`
    query {
        images {
            title
            asset {
                id
                url
            }
            preview {
                id
                url
            }
        }
    }
`;
export const convertArticleToTarget = async (a: IArticle) => {
    let md = "";

    if (a.article.markdownLink) {
        md = await getText(a.article.markdownLink);
    } else if (a.article.markdown.url) {
        md = await getText(`${getEndpoint()}${a.article.markdown.url}`);
    }

    const artTarget: IArticleTarget = {
        article: {
            id: a.article.id,
            title: a.article.title,
            description: a.article.description,
            internalLink: a.article.internalLink,
            markdown: {
                content: md,
            },
            externalLink: a.article.externalLink,
        },
    };

    return artTarget;
};
