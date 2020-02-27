import React, { ComponentType } from "react";

import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core";

import CustomTheme from "./theme";

import { PaletteType } from "../App";

export const withTheme = (paletteType: PaletteType) => <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => (
    <ThemeProvider theme={CustomTheme}>
        <ThemeProvider
            theme={(theme: Theme) =>
                createMuiTheme({
                    ...theme,
                    palette: {
                        type: paletteType,
                    },
                })
            }
        >
            <WrappedComponent {...(props as T)} />
        </ThemeProvider>
    </ThemeProvider>
);
