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
        },
        h6: {
            ...rawTheme.typography.h6,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
        },
        body1: {
            ...rawTheme.typography.body1,
        },
        body2: {
            ...rawTheme.typography.body2,
        },
    },
};

// theme.typography.h5 = {
//     ...theme.typography.h5,
//     [theme.breakpoints.down("md")]: {
//         fontSize: "1rem",
//     },
//     [theme.breakpoints.down("lg")]: {
//         fontSize: "1rem",
//     },
// };

// export const logoTheme = createMuiTheme({
//     typography: {
//         fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
//         fontSize: 25,
//         fontWeightLight: 300,
//         fontWeightRegular: 400,
//         fontWeightMedium: 500,
//     },
// });

export default responsiveFontSizes(theme);
