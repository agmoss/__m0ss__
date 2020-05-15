import React from "react";

import {
    createStyles,
    makeStyles,
    Container,
    Grid,
    CssBaseline,
    Theme,
    Typography,
    LinearProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
        },
        err: {
            ...theme.typography.h1,
            color: theme.palette.primary.main,
        },
        prog: {
            width: "100%",
            color: theme.palette.primary.main,
        },
    })
);

export const Error = () => {
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
                        <Grid item className={classes.err}>
                            <Typography>:(</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </>
        </div>
    );
};

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
                            <LinearProgress />
                        </Grid>
                    </Grid>
                </Container>
            </>
        </div>
    );
};
