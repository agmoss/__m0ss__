import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/landing";
import { Circles } from "./pages/circles";
import Readme from "./pages/readme";
import withFade from "./components/withFade";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Landing} />
            </Switch>
            <Switch>
                <Route path="/circles" component={withFade(Circles)} />
            </Switch>
            <Switch>
                <Route path="/README" component={withFade(Readme)} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
