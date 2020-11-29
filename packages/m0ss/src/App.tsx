import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import React from "react";
import {
    BrowserRouter,
    Route,
    RouteComponentProps,
    Switch,
} from "react-router-dom";
import { theme as customTheme } from "three-ui";

import { withHelmet } from "./components/withHelmet";
import withPage from "./components/withPage";
import ArticleContainer from "./articles/containers/article";
import {
    WrappedDashboard,
    WrappedMedia,
    WrappedOffCircleWeb,
    WrappedProjectReadme,
    WrappedReactCirclesDemo,
    WrappedSignin,
} from "./pages";
import Landing from "./profile/containers/landing";
import { useThemeSelection } from "./theme/redux/hooks";

interface IMatchParams {
    id: string;
}
type IMatchProps = RouteComponentProps<IMatchParams>;

const App = () => {
    const __theme__ = useThemeSelection();

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                ...customTheme,
                palette: {
                    type: __theme__.theme === "dark" ? "dark" : "light",
                    primary: {
                        ...customTheme.palette.primary,
                        main: __theme__.color,
                    },
                },
            }),
        [__theme__.theme, __theme__.color]
    );

    const LandingWProps = () => {
        return <Landing />;
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
                        <WrappedReactCirclesDemo />
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
