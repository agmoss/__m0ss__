import { IArticle, IArticleTarget } from "blog-types";
import React, { useState } from "react";
import useSWR from "swr";

import withPage from "../components/withPage";
import { client } from "../gqlClient";
import { convertArticleToTarget, queryArticle } from "../gqlQuery";
import { Error, Loading } from "../pages/placeholders";
import { Article } from "../views/article";

interface IArticleContainer {
    id: string;
}

const ArticleContainer = ({ id }: IArticleContainer) => {
    const [article, setArticle] = useState<IArticleTarget | null>(null);

    function fetcher(query: string, _id: string) {
        return client.request<IArticle>(query, { id: _id });
    }

    const { data, error } = useSWR<IArticle, any>([queryArticle, id], fetcher);

    const dataFormatter = async (art: IArticle) => {
        const targetArticle = await convertArticleToTarget(art);
        setArticle(targetArticle);
    };

    if (error) {
        return <Error />;
    }
    if (!data) {
        return <Loading />;
    }
    if (article === null || article.article.markdown.content === null) {
        try {
            dataFormatter(data);
        } catch (e) {
            return <Error />;
        }
        return <Loading />;
    }

    return React.createElement(Article, {
        article: article,
    });
};

export default withPage(ArticleContainer);
