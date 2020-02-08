import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { Footer } from "../views/footer";
import { Hero } from "../views/hero";
import { MainContent } from "../views/mainContent";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
        },
    })
);

interface ILanding {
    img: any;
    md: any;
}

export const Landing: React.FC<ILanding> = ({ img, md }: ILanding) => {
    const classes = useStyles();
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
