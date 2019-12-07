import React from "react";

import Landing from "./pages/landing";
import { Circles } from "./pages/circles";
import Readme from "./pages/readme";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Landing} />
            </Switch>
            <Switch>
                <Route path="/circles" component={Circles} />
            </Switch>
            <Switch>
                <Route path="/README" component={Readme} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
