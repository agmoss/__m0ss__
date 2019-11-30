import { createStyles, makeStyles, Theme } from "@material-ui/core";

import IconButton from "./iconButton";

import { LocalDrink } from "@material-ui/icons";
import React from "react";

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
        <React.Fragment>
            <IconButton className={classes.button} aria-label="-">
                <LocalDrink />
            </IconButton>
        </React.Fragment>
    );
};
