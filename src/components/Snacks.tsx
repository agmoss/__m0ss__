import React from "react";
import { Snackbar } from "@material-ui/core";
// tslint:disable-next-line: no-submodule-imports
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export enum Severity {
    error = "error",
    warning = "warning",
    info = "info",
    success = "success",
}

export const severity = Object.values(Severity);

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface ISnacksProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    level: Severity;
}

export const Snacks = ({ open, setOpen, message, level }: ISnacksProps) => {
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
                severity={level}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
