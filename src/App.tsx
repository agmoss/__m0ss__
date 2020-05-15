import React, { useState } from "react";

import {
    BrowserRouter,
    Route,
    Switch,
    RouteComponentProps,
} from "react-router-dom";

import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import Circles from "react-circles";
import OffCircleWeb from "./pages/offcircleweb";

import { ITargetProfile } from "./models";
import { withFade } from "./components/withFade";
import customTheme from "./components/theme";

import Landing from "./containers/landing";
import Dashboard from "./containers/dashboard";
import ArticleContainer from "./containers/article";

import { ColorPage } from "./pages/color";
import ProjectReadme from "./pages/ProjectReadme";

interface IMatchParams {
    id: string;
}
type IMatchProps = RouteComponentProps<IMatchParams>;

const App = () => {
    const [theme, setTheme] = useState(createMuiTheme(customTheme));
    const [profile, setProfile] = useState<ITargetProfile | null>(null);

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

    const WrappedProjectReadme = withFade(1000, 1000)(ProjectReadme);

    const ReactCirclesDemo = () => {
        return (
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
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Landing
                            profile={profile}
                            setProfile={setProfile}
                            setColor={setColor}
                        />
                    </Route>
                    <Route path="/content">
                        <Dashboard />
                    </Route>
                    <Route path="/react-circles">
                        <ReactCirclesDemo />
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
                    <Route path="/README">
                        <WrappedProjectReadme />
                    </Route>
                    <Route
                        path="/article/:id"
                        render={({ match }: IMatchProps) => {
                            return <ArticleContainer id={match.params.id} />;
                        }}
                    />
                    <Route>
                        <ReactCirclesDemo />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
