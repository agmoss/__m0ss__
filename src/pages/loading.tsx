import React from "react";

import {
    createStyles,
    makeStyles,
    Container,
    Grid,
    LinearProgress,
    CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
        },
        prog: {
            width: "100%",
        },
    })
);

export const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <>
                <Container>
                    <Grid
                        className={classes.root}
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item className={classes.prog}>
                            <LinearProgress color="secondary" />
                        </Grid>
                    </Grid>
                </Container>
            </>
        </div>
    );
};
