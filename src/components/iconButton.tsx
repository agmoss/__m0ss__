import { IconButton, Theme, withStyles } from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
}))(IconButton);
