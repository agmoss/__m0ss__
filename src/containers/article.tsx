import React, { useState } from "react";
import useSWR from "swr";

import { client } from "../gqlClient";
import { queryArticle, convertArticleToTarget } from "../gqlQuery";
import { IArticleTarget, IArticle } from "../models";

import { Loading, Error } from "../pages/placeholders";
import { Article } from "../views/article";

interface IArticleContainer {
    id: string;
}

const ArticleContainer = ({ id }: IArticleContainer) => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState<IArticleTarget | null>(null);

    function fetcher(query: string, _id: string) {
        return client.request<IArticle>(query, { id: _id });
    }

    const { data, error } = useSWR([queryArticle, id], fetcher);

    const dataFormatter = async (art: IArticle) => {
        const targetArticle = await convertArticleToTarget(art);
        setArticle(targetArticle);
        setLoading(false);
    };

    if (error) {
        return <Error />;
    }
    if (!data) {
        return <Loading />;
    }
    if (
        article === null ||
        article.article.markdown.content === null ||
        loading
    ) {
        try {
            dataFormatter(data);
        } catch (e) {
            return <Error />;
        }
        return <Loading />;
    }

    return React.createElement(Article, {
        content: article.article.markdown.content,
    });
};

export default ArticleContainer;
