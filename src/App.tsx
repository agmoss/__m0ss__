import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import Circles from "react-circles";
import OffCircleWeb from "./pages/offcircleweb";
import ProjectReadme from "./pages/ProjectReadme";
import Landing from "./containers/landing";
import Dashboard from "./containers/dashboard";
import CardReadme from "./pages/CardReadme";
import { ColorPage } from "./pages/color";

import { getText, getImgs } from "./getData";
import { withFade } from "./components/withFade";
import customTheme from "./components/theme";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({ text: "", imgs: new Array<Blob>() });
    const [theme, setTheme] = useState(createMuiTheme(customTheme));

    const setColor = (color: string) => {
        setTheme({
            ...theme,
            palette: {
                ...theme.palette,
                type: "light",
                primary: {
                    ...theme.palette.primary,
                    main: color,
                },
            },
        });
    };

    const dataGetter = () => {
        Promise.all([
            getText("https://m0ss.blob.core.windows.net/media/landing.md"),
            getImgs([
                "https://m0ss.blob.core.windows.net/media/DSC_7024.JPG",
                "https://source.unsplash.com/random/600x600",
            ]),
        ]).then((responses) => {
            ReactDOM.unstable_batchedUpdates(() => {
                setState({ text: responses[0], imgs: responses[1] });
                setLoading(false);
            });
        });
    };

    const WrappedCardReadme = withFade(1000, 1000)(CardReadme);
    const WrappedProjectReadme = withFade(1000, 1000)(ProjectReadme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Landing
                            text={state.text}
                            imgs={state.imgs}
                            fetchData={dataGetter}
                            loading={loading}
                            setColor={setColor}
                        />
                    </Route>
                    <Route path="/content">
                        <Dashboard />
                    </Route>
                    <Route path="/react-circles">
                        <div
                            style={{
                                height: window.innerHeight,
                                width: window.innerWidth,
                                maxWidth: "100%",
                                maxHeight: "100%",
                                overflowX: "hidden",
                                overflowY: "hidden",
                                backgroundColor: "black",
                            }}
                        >
                            <Circles numCircles={60} speed="slow" />
                        </div>
                    </Route>
                    <Route path="/offcircle">
                        <div
                            style={{
                                overflowX: "hidden",
                                overflowY: "hidden",
                            }}
                        >
                            <OffCircleWeb />
                        </div>
                    </Route>
                    <Route path="/color">
                        <ColorPage setColor={setColor} />
                    </Route>
                    <Route path="/card">
                        <WrappedCardReadme />
                    </Route>
                    <Route path="/README">
                        <WrappedProjectReadme />
                    </Route>
                    <Route component={withFade(1000, 1000)(Circles)} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
