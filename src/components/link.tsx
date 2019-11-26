import { Link, Theme, withStyles } from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.primary.dark,
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none",
        },
        "&:hover":{
            color: theme.palette.secondary.main,
        },
        outline: "none",
    },
}))(Link);
