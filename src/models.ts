export interface ITargetProfile {
    profile: {
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
    };
}

export interface IProfile {
    profile: {
        firstName: string;
        lastName: string;
        profilePhoto: {
            url: string;
        };
        email: string;
        rant: {
            url: string;
        };
        bio: string;
        color: string;
    };
}

export interface IArticle {
    article: {
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
    };
}

export interface IArticles {
    articles: [
        {
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
    ];
}

export interface IArticleTarget {
    article: {
        id: string;
        title: string;
        description: string;
        internalLink: string | null;
        markdown: {
            content: string | null;
        };
        externalLink: string | null;
    };
}

export interface IMedia {
    images: [
        {
            title: string;
            asset: {
                id: string;
                url: string;
            };
            preview: {
                id: string;
                url: string;
            };
        }
    ];
}
