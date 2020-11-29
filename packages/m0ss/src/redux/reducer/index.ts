import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

import { reducer as profileReducer } from "../../profile/redux/model";
import { reducer as articlesReducer } from "../../articles/redux/model";
import { reducer as themeReducer } from "../../theme/redux/model";

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        theme: themeReducer,
        profile: profileReducer,
        art: articlesReducer,
    });

export default createRootReducer;
export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
