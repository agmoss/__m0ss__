import React, { useState, useEffect } from "react";
import DashboardPresentation from "../pages/dashboard";
import {
    IArticleTarget,
    queryArticles,
    IArticle,
    convertArticleToTarget,
} from "../gqlQuery";
import { client } from "../gqlClient";
import { Loading as LoadingPage } from "../pages/loading";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState<IArticleTarget[] | null>(null);

    const dataGetter = async () => {
        const articlesResult = await client.request(queryArticles);

        const art: IArticle[] = articlesResult.articles;

        const createTargetArticles = async () => {
            return Promise.all(art.map((a) => convertArticleToTarget(a)));
        };

        const targetArticles = await createTargetArticles();

        setArticles(targetArticles);

        setLoading(false);
    };

    useEffect(() => {
        if (articles === null) {
            dataGetter();
        }
    });

    if (loading || articles === null) {
        return <LoadingPage />;
    }

    return React.createElement(DashboardPresentation, { articles });
};

export default Dashboard;
