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
            backgroundImage: "url(https://ggantstorage.blob.core.windows.net/images/DSC_7024.JPG)",
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
            padding: theme.spacing(6),
            marginBottom: "auto",
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
                            src="https://ggantstorage.blob.core.windows.net/images/DSC_7024.JPG"
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
                                    m0ss.dev
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph={true}
                                    gutterBottom={true}
                                >
                                    Hi, I'm a full stack developer with a focus on web applications, infrastructure, data visualization, and creative programming.
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph={true}
                                    gutterBottom={true}
                                >
                                    I am currently hard at work on the next big thing. You'll be hearing about it soon...
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
};
