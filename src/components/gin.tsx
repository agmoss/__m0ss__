import { createStyles, makeStyles, Theme } from "@material-ui/core";

import { Apps } from "@material-ui/icons";
import React from "react";
import IconButton from "./iconButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    })
);

export const Gin = () => {
    const classes = useStyles();

    return (
        <>
            <IconButton className={classes.button} aria-label="-">
                <Apps />
            </IconButton>
        </>
    );
};
