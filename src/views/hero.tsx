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

import { Card } from "../components/card";
import { withPull } from "../components/withPull";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
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
            height: "100%",
            marginBottom: "auto",
            overflow: "auto",
            padding: theme.spacing(6),
        },
    })
);

interface IProps {
    img: Blob[];
}

export const Hero = ({ img }: IProps) => {
    const classes = useStyles();

    const CtaCard = () => (
        <Paper className={classes.mainContent}>
            <Typography variant="h3" gutterBottom>
                m0ss.dev
            </Typography>
            <Typography variant="h5" paragraph gutterBottom>
                {
                    "Hi, I'm a full stack developer with a focus on web applications, \
                infrastructure, data visualization, and creative programming."
                }
            </Typography>
            <Typography variant="h5" paragraph gutterBottom>
                {
                    "I am currently hard at work on the next big thing. You'll be \
                hearing about it soon..."
                }
            </Typography>
        </Paper>
    );

    const PullCtaCard = withPull(CtaCard);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box className={classes.main}>
                            <Card primary={img[0]} secondary={img[1]} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <PullCtaCard />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
