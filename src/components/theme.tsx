import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        // tslint:disable-next-line: object-literal-sort-keys
        primary: {
            light: "#fff",
            main: "rgb(23, 105, 170)",
            // tslint:disable-next-line: object-literal-sort-keys
            dark: "#000",
         },
        secondary: {
           main: "#f44336",
         },
    },
});

export default responsiveFontSizes(theme);
