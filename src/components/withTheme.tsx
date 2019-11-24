import React, { Component, ComponentClass, ComponentType } from "react";

// MaterialUI
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

// Components
import theme from "./theme";

export default function withTheme<P extends object>(
    WrappedComponent: ComponentType<P>,
): ComponentClass<P> {
    return class extends Component<P> {
        public render() {
            return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <WrappedComponent {...this.props} />
                </ThemeProvider>
            );
        }
    };
}
