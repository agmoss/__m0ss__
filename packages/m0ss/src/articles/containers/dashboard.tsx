import React from "react";
import { useDispatch } from "react-redux";
import { compose } from "redux";

import { Error, Loading } from "../../pages/placeholders";
import DashboardPresentation from "../pages/dashboard";
import { useArticles } from "../redux/hooks";
import { actions as articleActions } from "../redux/model";

const Dashboard = () => {
    const dispatch = useDispatch();

    const fetchArticles = compose(dispatch, articleActions.fetchArticles);

    const resetArticleState = compose(
        dispatch,
        articleActions.resetArticleState
    );

    resetArticleState();

    const articles = useArticles();

    if (articles === "Init") {
        fetchArticles();
    }

    if (articles === "Fail") {
        return <Error />;
    }

    if (articles === "Init" || articles === "Pend") {
        return <Loading />;
    }
    return React.createElement(DashboardPresentation, { articles });
};

export default Dashboard;
