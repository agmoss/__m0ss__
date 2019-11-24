import React from "react";

import {
    Container,
    createStyles,
    CssBaseline,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(https://source.unsplash.com/user/erondu)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.grey[800],
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            position: "relative",
        },
        overlay: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
        },
        mainContent: {
            position: "relative",
            padding: theme.spacing(3),
            marginBottom: "auto",
            minHeight: "30vmin",
            overflow: "auto",
        },
    }),
);

export const Hero = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Paper className={classes.main}>
                    {
                        <img
                            style={{ display: "none" }}
                            src="https://source.unsplash.com/user/erondu"
                            alt="background"
                        />
                    }
                    <div className={classes.overlay} />
                    <Grid container={true}>
                        <Grid item={true} md={6}>
                            <div className={classes.mainContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom={true}
                                >
                                    Something...
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph={true}
                                >
                                    Description
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
};
