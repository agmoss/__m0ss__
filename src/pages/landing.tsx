import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import Header from "../views/header";
import { Footer } from "../views/footer";
import { Hero } from "../views/hero";
import { MainContent } from "../views/mainContent";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowX: "hidden",
        },
    })
);

interface ILanding {
    img: any;
    md: any;
}

export const Landing = ({ img, md }: ILanding) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <React.Fragment>
            <Header/>
                <Hero img={img} />
                <MainContent md={md} />
                <Footer />
            </React.Fragment>
        </div>
    );
};
