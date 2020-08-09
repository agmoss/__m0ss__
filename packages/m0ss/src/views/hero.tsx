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

import { Card, withPull } from "three-ui";

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
            [theme.breakpoints.down("sm")]: {
                minHeight: "40vmin",
            },
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
    bio: string;
}

export const Hero = ({ img, bio }: IProps) => {
    const classes = useStyles();

    const CtaCard = () => (
        <Paper className={classes.mainContent}>
            <Typography variant="h3" gutterBottom>
                m0ss.dev
            </Typography>
            <Typography variant="h5" paragraph gutterBottom>
                {bio}
            </Typography>
        </Paper>
    );

    const PullCtaCard = withPull(CtaCard);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Box className={classes.main}>
                            <Card primary={img[0]} secondary={img[1]} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={8}>
                        <PullCtaCard />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
