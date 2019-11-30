import React from "react";

import {
    Box,
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
            backgroundColor: theme.palette.grey[800],
            backgroundImage:
                "url(https://ggantstorage.blob.core.windows.net/images/DSC_7024.JPG)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: theme.palette.common.white,
            height: "100%",
            marginBottom: theme.spacing(4),
            minHeight: "30vmin",
            position: "relative",  
        },
        mainContent: {
            backgroundColor: theme.palette.grey[900],
            height: "100%",
            marginBottom: "auto",
            overflow: "auto",
            padding: theme.spacing(6),
            position: "relative",
        },
    })
);

export const Hero = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container={true} spacing={5}>
                    <Grid item={true} xs={12} sm={4} md={4}>
                        <Paper className={classes.main}>
                            <Box>
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
                    <Grid item={true} xs={12} sm={8} md={8}>
                        <Paper className={classes.mainContent}>
                            <Typography variant="h3" gutterBottom={true}>
                                m0ss.dev
                            </Typography>
                            <Typography
                                variant="h5"
                                paragraph={true}
                                gutterBottom={true}
                            >
                                Hi, I'm a full stack developer with a focus on
                                web applications, infrastructure, data
                                visualization, and creative programming.
                            </Typography>
                            <Typography
                                variant="h5"
                                paragraph={true}
                                gutterBottom={true}
                            >
                                I am currently hard at work on the next big
                                thing. You'll be hearing about it soon...
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
