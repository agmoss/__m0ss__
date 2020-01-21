import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import Circles from "./pages/circles";
import Readme from "./pages/readme";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";

import { getText, getImgs } from "./getData";

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({ text: "", imgs: new Array<Blob>() });

    const dataGetter = () => {
        Promise.all([
            getText(
                "https://ggantstorage.blob.core.windows.net/markdown/landing.md"
            ),
            getImgs([
                "https://ggantstorage.blob.core.windows.net/images/DSC_7024.JPG",
                "https://source.unsplash.com/random/600x600",
            ]),
        ]).then(responses => {
            ReactDOM.unstable_batchedUpdates(() => {
                setState({ text: responses[0], imgs: responses[1] });
                setLoading(false);
            });
        });
    };

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
                <Route path="/content" component={Dashboard} />
            </Switch>
            <Switch>
                <Route path="/circles" component={Circles} />
            </Switch>
            <Switch>
                <Route path="/README" component={Readme} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
