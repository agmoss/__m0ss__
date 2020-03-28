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
    img: Blob[];
    md: string;
    checked: boolean;
    toggleTheme: Function;
}

export const Landing = ({ img, md, checked, toggleTheme }: ILanding) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header checked={checked} toggleTheme={toggleTheme} />
            <Hero img={img} />
            <MainContent md={md} />
            <Footer />
        </div>
    );
};
