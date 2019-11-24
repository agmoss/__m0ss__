import React, { Component, ComponentClass, ComponentType } from "react";

// MaterialUI
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";

// Components
import theme from "./theme";

export default function withTheme<P extends object>(
    WrappedComponent: ComponentType<P>,
): ComponentClass<P> {
    return class extends Component<P> {
        public render() {
            return (
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <WrappedComponent {...this.props} />
                </MuiThemeProvider>
            );
        }
    };
}
