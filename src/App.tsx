import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import Circles from "./pages/circles";
import Readme from "./pages/ProjectReadme";
import Landing from "./containers/landing";
import Dashboard from "./containers/dashboard";
import CardReadme from "./pages/CardReadme";

import { getText, getImgs } from "./getData";
import { withFade } from "./components/withFade";
import { withTheme } from "./components/withTheme";

export enum PaletteType {
    light = "light",
    dark = "dark",
}

const App = () => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({ text: "", imgs: new Array<Blob>() });

    const dataGetter = () => {
        Promise.all([
            getText("https://m0ss.blob.core.windows.net/media/landing.md"),
            getImgs([
                "https://m0ss.blob.core.windows.net/media/DSC_7024.JPG",
                "https://source.unsplash.com/random/600x600",
            ]),
        ]).then(responses => {
            ReactDOM.unstable_batchedUpdates(() => {
                setState({ text: responses[0], imgs: responses[1] });
                setLoading(false);
            });
        });
    };

    const WrappedCardReadme = withFade(1000, 1000)(CardReadme);
    const WrappedProjectReadme = withFade(1000, 1000)(Readme);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/">
                    <Landing
                        text={state.text}
                        imgs={state.imgs}
                        fetchData={dataGetter}
                        loading={loading}
                    />
                </Route>
            </Switch>
            <Switch>
                <Route path="/card">
                    <WrappedCardReadme />
                </Route>
            </Switch>
            <Switch>
                <Route path="/README">
                    <WrappedProjectReadme />
                </Route>
            </Switch>
            <Switch>
                <Route path="/content">
                    <Dashboard />
                </Route>
            </Switch>
            <Switch>
                <Route
                    path="/circles"
                    component={withFade(
                        1000,
                        1000
                    )(Circles)}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default withTheme(PaletteType.dark)(App);
