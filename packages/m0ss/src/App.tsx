import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import React, { useState } from "react";
import Circles from "react-circles";
import {
    BrowserRouter,
    Route,
    RouteComponentProps,
    Switch,
} from "react-router-dom";
import { theme as customTheme } from "three-ui";

import { withHelmet } from "./components/withHelmet";
import withPage from "./components/withPage";
import ArticleContainer from "./containers/article";
import Landing from "./containers/landing";
import {
    WrappedMedia,
    WrappedProjectReadme,
    WrappedDashboard,
    WrappedOffCircleWeb,
    WrappedReactCirclesDemo,
    WrappedSignin,
} from "./pages";

interface IMatchParams {
    id: string;
}
type IMatchProps = RouteComponentProps<IMatchParams>;

const App = () => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({ text: "" });
    const [color, setColor] = useState("#e91e63");

    const [dark, setDark] = useState(true);

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                ...customTheme,
                palette: {
                    type: dark ? "dark" : "light",
                    primary: {
                        ...customTheme.palette.primary,
                        main: color,
                    },
                },
            }),
        [dark, color]
    );

    const dataGetter = () => {
        fetch(
            "https://honeyyy.s3.us-west-2.amazonaws.com/landing_d2bb8f5328.markdown"
        )
            .then((response) => response.text())
            .then((text) => setState({ ...state, text: text }))
            .then(() => setLoading(false));
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
        return (
            <Landing
                loading={loading}
                setColor={setColor}
                text={state.text}
                fetchData={dataGetter}
            />
        );
    };

    const WrappedLanding = withHelmet({
        title: "Andrew Moss",
        meta: {
            name: "Andrew Moss",
            content: "Andrew Moss Personal Website",
        },
    })(withPage(LandingWProps));

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
