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
import ProjectReadme from "./pages/ProjectReadme";
import Landing from "./containers/landing";
import Dashboard from "./containers/dashboard";
import ArticleContainer from "./containers/article";
import { ColorPage } from "./pages/color";

import { getText, getImgs } from "./getData";
import { withFade } from "./components/withFade";
import customTheme from "./components/theme";
import { client, getEndpoint } from "./gqlClient";
import { IProfile, queryProfile } from "./gqlQuery";

interface IMatchParams {
    id: string;
}
type IMatchProps = RouteComponentProps<IMatchParams>;

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(createMuiTheme(customTheme));
    const [state, setState] = useState<{
        profile: IProfile | null;
    }>({
        profile: null,
    });

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

    const dataGetter = async () => {
        const result = await client.request(queryProfile);

        const prof: IProfile = result.profile;

        const profilePhoto = await getImgs([
            `${getEndpoint()}${prof.profilePhoto.url}`,
            "https://source.unsplash.com/random/600x600",
        ]);

        const rant = await getText(`${getEndpoint()}${prof.rant.url}`);

        const profi = {
            firstName: prof.firstName,
            lastName: prof.lastName,
            profilePhoto: {
                url: prof.profilePhoto.url,
                blobs: profilePhoto,
            },
            email: prof.email,
            rant: {
                url: prof.rant.url,
                content: rant,
            },
            bio: prof.bio,
            color: prof.color,
        };

        setState({
            profile: profi,
        });

        setLoading(false);
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
                            profile={state.profile}
                            fetchData={dataGetter}
                            loading={loading}
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
