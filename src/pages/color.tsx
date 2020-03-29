import React from "react";
import { createStyles, makeStyles, Grid, useTheme } from "@material-ui/core";
import { ChromePicker, ColorResult } from "react-color";

import Header from "../views/header";
import { Footer } from "../views/footer";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowX: "hidden",
        },
    })
);

interface ILanding {
    setColor: Function;
}

export const ColorPage = ({ setColor }: ILanding) => {
    const classes = useStyles();

    const theme = useTheme();

    function onChange(color: ColorResult) {
        setColor(color.hex);
    }

    return (
        <div className={classes.root}>
            <Header />
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12}>
                    <ChromePicker
                        color={theme.palette.primary.main}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};
