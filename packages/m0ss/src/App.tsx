import React, { useState } from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    RouteComponentProps,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import Circles from "react-circles";
import { theme as customTheme, withFade } from "three-ui";

import Landing from "./containers/landing";
import Dashboard from "./containers/dashboard";
import ArticleContainer from "./containers/article";
import MediaContainer from "./containers/media";

import OffCircleWeb from "./pages/offcircleweb";
import { ColorPage } from "./pages/color";
import ProjectReadme from "./pages/ProjectReadme";
import Signin from "./pages/signin";
import { withHelmet } from "./components/withHelmet";

interface IMatchParams {
    id: string;
}
type IMatchProps = RouteComponentProps<IMatchParams>;

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(createMuiTheme(customTheme));
    const [state, setState] = useState({ text: "" });

    const dataGetter = () => {
        fetch(
            "https://honeyyy.s3.us-west-2.amazonaws.com/landing_d2bb8f5328.markdown"
        )
            .then((response) => response.text())
            .then((text) => setState({...state,text:text}))
            .then(() => setLoading(false));
    };

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

    const LandingWProps = () => {
        return <Landing  loading={loading} setColor={setColor} text={state.text} fetchData={dataGetter} />;
    };

    const WrappedProjectReadme = withHelmet({
        title: "README - Andrew Moss",
        meta: { name: "m0ss site readme", content: "Andrew Moss Readme" },
    })(withFade(1000, 1000)(ProjectReadme));
    const WrappedDashboard = withHelmet({
        title: "Dashboard - Andrew Moss",
        meta: { name: "Dashboard", content: "Andrew Moss articles" },
    })(Dashboard);
    const WrappedOffCircleWeb = withHelmet({
        title: "offcircle - Andrew Moss",
        meta: { name: "offcircle README", content: "Andrew Moss offcircle" },
    })(OffCircleWeb);
    const WrappedReactCirclesDemo = withHelmet({
        title: "Andrew Moss - React Circles",
        meta: {
            name: "React Circles Demo",
            content: "Andrew Moss React Circles",
        },
    })(ReactCirclesDemo);
    const WrappedLanding = withHelmet({
        title: "Andrew Moss",
        meta: {
            name: "Andrew Moss",
            content: "Andrew Moss Personal Website",
        },
    })(LandingWProps);
    const WrappedSignin = withHelmet({
        title: "Signin - Andrew Moss",
        meta: {
            name: "Signin page",
            content: "Signin",
        },
    })(Signin);
    const WrappedMedia = withHelmet({
        title: "Media - Andre Moss",
        meta: {
            name: "Media Share Location",
            content: "Andrew Moss Media",
        },
    })(MediaContainer);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <WrappedLanding />
                    </Route>
                    <Route path="/content">
                        <WrappedDashboard />
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
                            <WrappedOffCircleWeb />
                        </div>
                    </Route>
                    <Route path="/color">
                        <ColorPage setColor={setColor} />
                    </Route>
                    <Route path="/README">
                        <WrappedProjectReadme />
                    </Route>
                    <Route path="/signin">
                        <WrappedSignin />
                    </Route>
                    <Route path="/media">
                        <WrappedMedia />
                    </Route>
                    <Route
                        path="/article/:id"
                        render={({ match }: IMatchProps) => {
                            return <ArticleContainer id={match.params.id} />;
                        }}
                    />
                    <Route>
                        <WrappedReactCirclesDemo />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
