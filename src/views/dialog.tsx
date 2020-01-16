import React from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
    Button,
    Dialog,
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "relative",
            backgroundColor: theme.palette.secondary.light,
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    })
);

const Transition = React.forwardRef<unknown, TransitionProps>(
    function transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    }
);

interface IDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainDialog = ({ open, setOpen }: IDialogProps) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen={true}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <Close />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Content
                        </Typography>
                        <Button
                            autoFocus={true}
                            color="inherit"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem
                        button={true}
                        onClick={() => history.push("/circles")}
                    >
                        <ListItemText
                            primary="Circles"
                            secondary="SVG Canvas Art"
                        />
                    </ListItem>
                    <Divider />
                </List>
            </Dialog>
        </div>
    );
};
