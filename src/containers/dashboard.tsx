import React, { useState } from "react";
import useSWR from "swr";

import { queryArticles, convertArticleToTarget } from "../gqlQuery";
import { IArticleTarget, IArticles } from "../models";
import { client } from "../gqlClient";

import DashboardPresentation from "../pages/dashboard";
import { Loading, Error } from "../pages/placeholders";

const Dashboard = () => {
    const [articles, setArticles] = useState<IArticleTarget[] | null>(null);

    function fetcher(query: string) {
        return client.request<IArticles>(query);
    }

    const { data, error } = useSWR<IArticles>(queryArticles, fetcher);

    const dataFormatter = async (art: IArticles) => {
        const createTargetArticles = async () => {
            return Promise.all(
                art.articles.map((a) => convertArticleToTarget({ article: a }))
            );
        };
        const targetArticles = await createTargetArticles();
        setArticles(targetArticles);
    };

    if (error) return <Error />;
    if (!data) {
        return <Loading />;
    }
    if (articles === null) {
        try {
            dataFormatter(data);
        } catch (e) {
            return <Error />;
        }
        return <Loading />;
    }
    return React.createElement(DashboardPresentation, { articles });
};

export default Dashboard;
