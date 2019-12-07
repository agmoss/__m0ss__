import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        // tslint:disable-next-line: object-literal-sort-keys
        primary: {
            light: "#7072ff",
            main: "#2151ff",
            // tslint:disable-next-line: object-literal-sort-keys
            dark: "#2151ff",
        },
        secondary: {
            light: "#ff3087",
            main: "#fc036b",
            // tslint:disable-next-line: object-literal-sort-keys
            dark: "#fc036b",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

theme.typography.h5 = {
    ...theme.typography.h5,
    [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
    },
};

export const logoTheme = createMuiTheme({
    typography: {
        fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        fontSize: 25,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});

export default responsiveFontSizes(theme);
