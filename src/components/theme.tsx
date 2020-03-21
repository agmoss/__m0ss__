import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const rawTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: "#7072ff",
            main: "#2151ff",
            dark: "#2151ff",
        },
        secondary: {
            light: "#ff3087",
            main: "#fc036b",
            dark: "#fc036b",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        // fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
    },
    typography: {
        ...rawTheme.typography,
        h1: {
            ...rawTheme.typography.h1,
            fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        },
        h2: {
            ...rawTheme.typography.h2,
            fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        },
        h3: {
            ...rawTheme.typography.h3,
            fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        },
        h4: {
            ...rawTheme.typography.h4,
            fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        },
        h5: {
            ...rawTheme.typography.h5,
            fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        },
        h6: {
            ...rawTheme.typography.h6,
            fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
        },
        subtitle2: {
            ...rawTheme.typography.subtitle2,
        },
        body1: {
            ...rawTheme.typography.body1,
            fontSize: 18,
        },
        body2: {
            ...rawTheme.typography.body2,
        },
    },
};

export default responsiveFontSizes(theme);
