import React from "react";

import withPage from "../../components/withPage";
import { Error, Loading } from "../../pages/placeholders";
import { Article } from "../../views/article";

import { useDispatch } from "react-redux";
import { compose } from "redux";
import { actions as articleActions } from "../redux/model";
import { useArticle } from "../redux/hooks";

interface IArticleContainer {
    id: string;
}

const ArticleContainer = ({ id }: IArticleContainer) => {
    const dispatch = useDispatch();

    const fetchArticle = compose(dispatch, articleActions.fetchArticle);

    const article = useArticle();

    if (article === "Init") {
        fetchArticle(id);
    }

    if (article === "Fail") {
        return <Error />;
    }

    if (article === "Init" || article === "Pend") {
        return <Loading />;
    }

    return React.createElement(Article, {
        article: article,
    });
};

export default withPage(ArticleContainer);
