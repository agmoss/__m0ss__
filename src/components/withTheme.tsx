import React, { Component, ComponentClass, ComponentType } from "react";

import { MuiThemeProvider } from "@material-ui/core";

import theme from "./theme";

export default function withTheme<P extends object>(
    WrappedComponent: ComponentType<P>
): ComponentClass<P> {
    return class extends Component<P> {
        public render() {
            return (
                <MuiThemeProvider theme={theme}>
                    <WrappedComponent {...this.props} />
                </MuiThemeProvider>
            );
        }
    };
}
