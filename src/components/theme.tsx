import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

export default responsiveFontSizes(theme);
