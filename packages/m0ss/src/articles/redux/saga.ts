import { IArticle, IArticles, IArticleTarget } from "blog-types";

import { all, put, takeLatest, call } from "redux-saga/effects";
import { createAsyncAction } from "typesafe-actions";
import { client, getEndpoint } from "../../gqlClient";
import { getText } from "../../getData";
import { Variables } from "graphql-request/dist/types";

const fetcher = <F, P>(q: string, a?: F) => client.request<P>(q, a);
const fetcher2 = <F, P>(q: string, a: Variables) => client.request<P>(q, a);

export const convertArticleToTarget = async (a: IArticle) => {
    let md = "";

    if (a.article.markdownLink) {
        md = await getText(a.article.markdownLink);
    } else if (a.article.markdown.url) {
        md = await getText(`${getEndpoint()}${a.article.markdown.url}`);
    }

    const artTarget: IArticleTarget = {
        article: {
            id: a.article.id,
            title: a.article.title,
            description: a.article.description,
            internalLink: a.article.internalLink,
            markdown: {
                content: md,
            },
            externalLink: a.article.externalLink,
        },
    };

    return artTarget;
};

const fetchArticleAsync = createAsyncAction(
    "FETCH_ARTICLE",
    "RECEIVE_ARTICLE",
    "FETCH_ARTICLE_ERROR"
)<string, IArticleTarget, Error>();

export const queryArticle = `
    query article($id: ID!) {
        article(id: $id) {
            id
            title
            description
            internalLink
            image {
                url
            }
            markdown {
                url
            }
            markdownLink
            externalLink
        }
    }
`;

function* fetchArticle(action: ReturnType<typeof fetchArticleAsync.request>) {
    try {
        const response: IArticle = yield call(fetcher2, queryArticle, {
            id: action.payload,
        });
        const article = yield convertArticleToTarget(response);
        yield put(fetchArticleAsync.success(article));
    } catch (e) {
        yield put(fetchArticleAsync.failure(e.message));
    }
}

function* fetchArticleWatcher() {
    yield takeLatest("FETCH_ARTICLE", fetchArticle);
}

const fetchArticlesAsync = createAsyncAction(
    "FETCH_ARTICLES",
    "RECEIVE_ARTICLES",
    "FETCH_ARTICLES_ERROR"
)<string, IArticleTarget[], Error>();

export const queryArticles = `
    query {
        articles {
            id
            title
            description
            internalLink
            image {
                url
            }
            markdown {
                url
            }
            markdownLink
            externalLink
        }
    }
`;

function* fetchArticles(action: ReturnType<typeof fetchArticlesAsync.request>) {
    try {
        const response: IArticles = yield call(
            fetcher,
            queryArticles,
            action.payload
        );

        const createTargetArticles = async () => {
            return Promise.all(
                response.articles.map((a) =>
                    convertArticleToTarget({ article: a })
                )
            );
        };

        const articles: IArticleTarget[] = yield createTargetArticles();

        yield put(fetchArticlesAsync.success(articles));
    } catch (e) {
        yield put(fetchArticlesAsync.failure(e.message));
    }
}

function* fetchArticlesWatcher() {
    yield takeLatest("FETCH_ARTICLES", fetchArticles);
}

export default function* rootSaga() {
    yield all([fetchArticleWatcher(), fetchArticlesWatcher()]);
}
