import React, { useEffect } from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { Footer } from "../views/footerPrimary";
import { Header } from "../views/header";
import { Hero } from "../views/heroPrimary";
import { MainContent } from "../views/mainContent";
import withTheme from "../components/withTheme";
import { withLoading } from "../components/withLoading";
import withFade from "../components/withFade";

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
                    <Header />
                    <Hero img={img} />
                    <MainContent md={md} />
                    <Footer />
                </React.Fragment>
            </div>
        );
    };

    const LoadingLandingPage = withLoading(withFade(LandingView));

    return React.createElement(LoadingLandingPage, {
        img: imgs,
        md: text,
        loading,
    });
};

export default withTheme(LandingContainer);
