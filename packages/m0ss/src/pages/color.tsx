import { Grid, createStyles, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { ChromePicker, ColorResult } from "react-color";

import { Footer } from "../views/footer";
import Header from "../views/header";

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
