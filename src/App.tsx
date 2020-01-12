import React from "react";
import Landing from "./containers/landing";
import { Circles } from "./pages/circles";
import Readme from "./pages/readme";
import withFade from "./components/withFade";

import { CSSTransition } from "react-transition-group";

import "./styles.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

const routes = [
    { path: "/", name: "Landing", Component: Landing },
    { path: "/README", name: "Readme", Component: Readme },
    { path: "/circles", name: "Circles", Component: Circles },
];

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={withFade(Landing)} />
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
