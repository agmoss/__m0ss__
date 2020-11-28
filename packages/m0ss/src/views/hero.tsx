import {
    Box,
    Container,
    CssBaseline,
    Grid,
    Paper,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import { Card, withPull } from "three-ui";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: theme.palette.common.white,
            height: "100%",
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
    primary: string;
    secondary: string;
    bio: string;
}

export const Hero = ({ primary, secondary, bio }: IProps) => {
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
                <Grid
                    container
                    // alignItems="stretch"
                    // direction="row"
                    spacing={5}
                >
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Box className={classes.main}>
                            <Card primary={primary} secondary={secondary} />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={8}
                        style={{ height: "100%" }}
                    >
                        <PullCtaCard />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
