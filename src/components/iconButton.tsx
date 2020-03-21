import { IconButton, Theme, withStyles } from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    colorSecondary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.contrastText,
        },
    },
}))(IconButton);
