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
    Box,
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
            minHeight: '30vmin',
            height:"100%"
        },
        mainContent: {
            position: "relative",
            padding: theme.spacing(6),
            marginBottom: "auto",
            overflow: "auto",
            height: "100%",
            backgroundColor: theme.palette.grey[900],
        },
        hei:{
            height: "100%",
        },
    }),
);

export const Hero = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid
                    container={true}
                    spacing={5}
                >
                    <Grid item={true} xs={12} md={4}>
                        <Paper className={classes.main}>
                            <Box >
                                {
                                    <img
                                        style={{ display: "none" }}
                                        src="https://ggantstorage.blob.core.windows.net/images/DSC_7024.JPG"
                                        alt="background"
                                    />
                                }
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Paper className={classes.mainContent}>
                            <Typography
                                component="h1"
                                variant="h3"
                                gutterBottom={true}
                            >
                                m0ss.dev
                                </Typography>
                            <Typography
                                variant="h5"
                                paragraph={true}
                                gutterBottom={true}
                            >
                                Hi, I'm a full stack developer with a focus on web applications, infrastructure, data visualization, and creative programming.
                                </Typography>
                            <Typography
                                variant="h5"
                                paragraph={true}
                                gutterBottom={true}
                            >
                                I am currently hard at work on the next big thing. You'll be hearing about it soon...
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment >
    );
};