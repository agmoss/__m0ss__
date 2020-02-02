import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export enum Severity {
    error = "error",
    warning = "warning",
    info = "info",
    success = "success",
}

export const severity = Object.values(Severity);

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface ISnacksProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    severity: Severity;
}

export const Snacks = ({ open, setOpen, message, severity }: ISnacksProps) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => {
                setOpen(false);
            }}
        >
            <Alert
                onClose={() => {
                    setOpen(false);
                }}
                severity={severity}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
