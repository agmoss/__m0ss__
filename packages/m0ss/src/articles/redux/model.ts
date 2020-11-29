import { IArticleTarget } from "blog-types";
import { ActionType, action } from "typesafe-actions";

type RD<T> = "Init" | "Pend" | "Fail" | T;

interface IArticleModel {
    art: RD<IArticleTarget>;
    articles: RD<IArticleTarget[]>;
}

const initialState: IArticleModel = {
    art: "Init",
    articles: "Init",
};

export const actions = {
    fetchArticle: (id: string) => action("FETCH_ARTICLE", id),
    receiveArticle: (v: IArticleTarget) => action("RECEIVE_ARTICLE", v),
    fetchArticleError: (e: string) => action("FETCH_ARTICLE_ERROR", { e }),
    fetchArticles: () => action("FETCH_ARTICLES"),
    receiveArticles: (v: IArticleTarget[]) => action("RECEIVE_ARTICLES", v),
    fetchArticlesError: (e: string) => action("FETCH_ARTICLES_ERROR", { e }),
};

export type ArticlesActionType = ActionType<typeof actions>;

export const reducer = (
    state: IArticleModel = initialState,
    action: ArticlesActionType
): IArticleModel => {
    switch (action.type) {
        case "FETCH_ARTICLE":
            return {
                ...state,
                art: "Pend",
            };
        case "RECEIVE_ARTICLE":
            return {
                ...state,
                art: action.payload,
            };
        case "FETCH_ARTICLE_ERROR": {
            return {
                ...state,
                art: "Fail",
            };
        }
        case "FETCH_ARTICLES":
            return {
                ...state,
                articles: "Pend",
            };
        case "RECEIVE_ARTICLES":
            return {
                ...state,
                articles: action.payload,
            };
        case "FETCH_ARTICLES_ERROR": {
            return {
                ...state,
                articles: "Fail",
            };
        }
        default:
            return state;
    }
};
