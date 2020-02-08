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
            <React.Fragment>
                <Container>
                    <Grid
                        className={classes.root}
                        container={true}
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item={true} className={classes.prog}>
                            <LinearProgress color="secondary" />
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        </div>
    );
};
