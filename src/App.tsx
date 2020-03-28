import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import Circles from "./pages/circles";
import ProjectReadme from "./pages/ProjectReadme";
import Landing from "./containers/landing";
import Dashboard from "./containers/dashboard";
import CardReadme from "./pages/CardReadme";

import { getText, getImgs } from "./getData";
import { withFade } from "./components/withFade";
import customTheme from "./components/theme";
import Header from "./views/header";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({ text: "", imgs: new Array<Blob>() });
    const [theme, setTheme] = useState(createMuiTheme(customTheme));
    const [checked, setChecked] = useState(true);

    const toggleTheme = () => {
        setChecked(!checked);
        const color = checked ? "#ff0077" : "#00ffb7";
        setTheme({
            ...theme,
            palette: {
                ...theme.palette,
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
        ]).then(responses => {
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
                <Header checked={checked} toggleTheme={toggleTheme} />
                <Switch>
                    <Route exact path="/">
                        <Landing
                            text={state.text}
                            imgs={state.imgs}
                            fetchData={dataGetter}
                            loading={loading}
                            checked={checked}
                            toggleTheme={toggleTheme}
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/card">
                        <WrappedCardReadme
                            checked={checked}
                            toggleTheme={toggleTheme}
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/README">
                        <WrappedProjectReadme
                            checked={checked}
                            toggleTheme={toggleTheme}
                        />
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
                        component={withFade(1000, 1000)(Circles)}
                    />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
