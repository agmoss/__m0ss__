import React, { useEffect } from "react";

import {
    createStyles,
    makeStyles,
    Container,
    Grid,
    LinearProgress,
    CssBaseline,
} from "@material-ui/core";

import { Footer } from "../views/footer";
import { Hero } from "../views/hero";
import { MainContent } from "../views/mainContent";
import { withLoading } from "../components/withLoading";
import { withFade } from "../components/withFade";

interface ILanding {
    text: string;
    imgs: any;
    fetchData: any;
    loading: boolean;
}

const LandingContainer: React.FC<ILanding> = ({
    text,
    imgs,
    fetchData,
    loading,
}: ILanding) => {
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

    useEffect(() => {
        if (text.length < 10 || imgs.length < 1) {
            fetchData();
        }
    });

    const classes = useStyles();

    interface ILandingView {
        img: any;
        md: any;
    }

    const LandingView: React.FC<ILandingView> = ({ img, md }: ILandingView) => {
        return (
            <div className={classes.root}>
                <React.Fragment>
                    <Hero img={img} />
                    <MainContent md={md} />
                    <Footer />
                </React.Fragment>
            </div>
        );
    };

    const LoadingView: React.FC = () => {
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

    const LoadingLandingPage = withLoading(LoadingView)(
        withFade(1000, 1000)(LandingView)
    );

    return React.createElement(LoadingLandingPage, {
        img: imgs,
        md: text,
        loading,
    });
};

export default LandingContainer;
