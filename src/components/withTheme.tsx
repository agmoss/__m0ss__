import React, { ComponentType } from "react";

import { MuiThemeProvider } from "@material-ui/core";

import theme from "./theme";

export const withTheme = <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <WrappedComponent {...(props as T)} />
        </MuiThemeProvider>
    );
};
