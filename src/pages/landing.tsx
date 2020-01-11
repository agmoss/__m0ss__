import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { Footer } from "../views/footerPrimary";
import { Header } from "../views/header";
import { Hero } from "../views/heroPrimary";
import { MainContent } from "../views/mainContent";

interface ILandingProps {
    img: any;
    md: any;
}

const Landing = ({ img, md }: ILandingProps) => {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            },
        })
    );

    const classes = useStyles();
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

export default Landing;
