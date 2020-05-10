import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DashboardPresentation from "../pages/dashboard";
import { withFade } from "../components/withFade";
import {
    IArticleTarget,
    queryArticles,
    IArticle,
    convertArticleToTarget,
} from "../gqlQuery";
import { client } from "../gqlClient";
import { Loading as LoadingPage } from "../pages/loading";

const Dashboard = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState<IArticleTarget[] | null>(null);

    const exitTimeout = 1000;
    const [enterTimeout, setEnterTimeout] = useState(1000);

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
        if (history.action !== "POP") {
            setEnterTimeout(0);
        }
    }, [history.action]);

    useEffect(() => {
        if (articles === null) {
            dataGetter();
        }
    });

    if (loading || articles === null) {
        return <LoadingPage />;
    }

    return React.createElement(
        withFade(enterTimeout, exitTimeout)(DashboardPresentation),
        { articles }
    );
};

export default Dashboard;
