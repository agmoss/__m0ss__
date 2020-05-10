import { getText } from "./getData";
import { getEndpoint } from "./gqlClient";

export interface IProfile {
    firstName: string;
    lastName: string;
    profilePhoto: {
        blobs: Blob[];
        url: string;
    };
    email: string;
    rant: {
        content: string;
        url: string;
    };
    bio: string;
    color: string;
}

export const queryProfile = `
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

export interface IArticle {
    id: string;
    title: string;
    description: string;
    internalLink: string | null;
    image: {
        url: string;
    };
    markdown: {
        url: string;
    };
    markdownLink: string | null;
    externalLink: string | null;
}

export interface IArticleTarget {
    id: string;
    title: string;
    description: string;
    internalLink: string | null;
    markdown: {
        content: string | null;
    };
    externalLink: string | null;
}

export const queryArticles = `
    query {
        articles{
            id
            title
            description
            internalLink
            image{
                url
            }
            markdown{
                url
            }
            markdownLink
            externalLink
        }
    }
`;

export const queryArticle = `
    query article($id:ID!){
        article(id:$id){
            id
            title
            description
            internalLink
            image{
                url
            }
            markdown{
                url
            }
            markdownLink
            externalLink
        }
    }

`;

export const convertArticleToTarget = async (a: IArticle) => {
    let md = "";

    if (a.markdownLink) {
        md = await getText(a.markdownLink);
    } else if (a.markdown.url) {
        md = await getText(`${getEndpoint()}${a.markdown.url}`);
    }

    const artTarget: IArticleTarget = {
        id: a.id,
        title: a.title,
        description: a.description,
        internalLink: a.internalLink,
        markdown: {
            content: md,
        },
        externalLink: a.externalLink,
    };

    return artTarget;
};
