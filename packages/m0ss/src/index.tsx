import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store, { history } from "./redux/store";

import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
