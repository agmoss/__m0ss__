import { TextField, withStyles, Theme } from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    root: {
        "& label.Mui-focused": {
            color: theme.palette.primary.main,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: theme.palette.primary.main,
        },
    },
}))(TextField);
