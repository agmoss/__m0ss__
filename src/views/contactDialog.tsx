import React, { useState } from "react";

import {
    Button,
    Dialog,
    DialogActions as MuiDialogActions,
    DialogContent as MuiDialogContent,
    DialogTitle as MuiDialogTitle,
    IconButton,
    Typography,
    FormControl,
    InputAdornment,
    createStyles,
    Theme,
    withStyles,
    makeStyles,
} from "@material-ui/core";

import { Person, Email, Close as CloseIcon } from "@material-ui/icons";

import emailjs from "emailjs-com";
import TextField from "../components/TextField";
import { Snacks, Severity } from "../components/Snacks";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        margin: {
            margin: theme.spacing(2),
        },
    })
);

export interface IDialogTitleProps {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = (props: IDialogTitleProps) => {
    const classes = useStyles();
    const { children, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

interface IDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactDialog = ({ open, setOpen }: IDialogProps) => {
    const classes = useStyles();
    const [openSnack, setOpenSnack] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [fromName, setFromName] = useState("");
    const [snackMessage, setSnackMessage] = useState("");
    const [level, setLevel] = useState(Severity.success);

    const handleClose = () => {
        setOpen(false);
    };

    const handleMessageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMessage(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromName(event.target.value);
    };

    const sendFeedback = () => {
        const templateParams = {
            message,
            // eslint-disable-next-line @typescript-eslint/camelcase
            reply_to: email,
            // eslint-disable-next-line @typescript-eslint/camelcase
            from_name: fromName,
        };

        emailjs
            .send(
                "gmail",
                "template_AVef3ba9_m0ss",
                templateParams,
                "user_EhcGuuTTlPVyvTXyrF9L4"
            )
            .then(response => {
                if (response.status === 200) {
                    setSnackMessage("Message Sent!");
                    setLevel(Severity.success);
                    setOpenSnack(!openSnack);
                    setEmail("");
                    setFromName("");
                    setMessage("");
                } else {
                    setSnackMessage("Error: Message not sent!");
                    setLevel(Severity.error);
                    setOpenSnack(!openSnack);
                }
            });
    };

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="contact-m0ss"
                open={open}
                fullWidth
                maxWidth="md"
            >
                <Snacks
                    open={openSnack}
                    setOpen={setOpenSnack}
                    message={snackMessage}
                    level={level}
                />
                <DialogTitle id="contact-m0ss" onClose={handleClose}>
                    Contact Andrew Moss
                </DialogTitle>
                <DialogContent dividers>
                    <FormControl fullWidth>
                        <TextField
                            className={classes.margin}
                            multiline={false}
                            onChange={handleNameChange}
                            defaultValue={fromName}
                            label="Your Name"
                            autoFocus
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.margin}
                            multiline={false}
                            onChange={handleEmailChange}
                            defaultValue={email}
                            type="email"
                            label="Your Email"
                            autoFocus={false}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.margin}
                            label="Your Message"
                            rows="20"
                            multiline
                            defaultValue={message}
                            onChange={handleMessageChange}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={sendFeedback}>Send Message</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
