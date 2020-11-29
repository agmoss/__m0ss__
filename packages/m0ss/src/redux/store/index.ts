import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import articlesRootSaga from "../../articles/redux/saga";
import profileRootSaga from "../../profile/redux/saga";
import userRootSaga from "../../user/redux/saga";
import createRootReducer from "../reducer";

const logger = createLogger({
    predicate: () => process.env.NODE_ENV !== "production",
});
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    createRootReducer(history),
    undefined,
    compose(
        process.env.NODE_ENV === "production"
            ? applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
            : applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
    )
);

sagaMiddleware.run(profileRootSaga);
sagaMiddleware.run(articlesRootSaga);
sagaMiddleware.run(userRootSaga);

export default store;
