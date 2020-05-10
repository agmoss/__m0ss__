import React, { useState, useEffect } from "react";

import { client } from "../gqlClient";

import {
    IArticleTarget,
    queryArticle,
    IArticle,
    convertArticleToTarget,
} from "../gqlQuery";

import { Loading as LoadingPage } from "../pages/loading";

import { Article } from "../views/article";

interface IArticleContainer {
    id: string;
}

const ArticleContainer = ({ id }: IArticleContainer) => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState<IArticleTarget | null>(null);

    const dataGetter = async () => {
        const variables = {
            id,
        };
        const articlesResult = await client.request(queryArticle, variables);
        const art: IArticle = articlesResult.article;
        const targetArticles = await convertArticleToTarget(art);
        setArticle(targetArticles);
        setLoading(false);
    };

    useEffect(() => {
        if (article === null) {
            dataGetter();
        }
    });

    if (article === null || article.markdown.content === null || loading) {
        return <LoadingPage />;
    }

    return <Article content={article.markdown.content} />;
};

export default ArticleContainer;
