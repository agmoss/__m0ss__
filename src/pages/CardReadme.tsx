import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import Header from "../views/header";
import { withMarkdownView } from "../components/withMarkdownView";

import { Footer } from "../views/footer";

import "./card.css";

const Readme = () => {
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

    const CardReadme = withMarkdownView(
        "https://raw.githubusercontent.com/agmoss/card/master/README.md"
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <CardReadme />
            <Footer />
        </div>
    );
};

export default Readme;
