import React from "react";
import Landing from "./containers/landing";
import { Circles } from "./pages/circles";
import Readme from "./pages/readme";

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
        <Router>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact={true} path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit={true}
                        >
                            <div className="page">
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </Router>
    );
};

export default App;
