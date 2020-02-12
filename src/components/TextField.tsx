import { TextField, withStyles, Theme } from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    root: {
        "& label.Mui-focused": {
            color: theme.palette.secondary.light,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: theme.palette.secondary.light,
        },
    },
}))(TextField);
