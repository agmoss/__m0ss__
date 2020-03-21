import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

import Header from "../views/header";
import { withMarkdownView } from "../components/withMarkdownView";

import { Footer } from "../views/footer";

import "./card.css";

const Readme = () => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                overflowX: "hidden",
                "@global": {
                    h1: {
                        ...theme.typography.h4,
                        paddingBottom: theme.spacing(2),
                    },
                    h2: {
                        ...theme.typography.h5,
                        paddingBottom: theme.spacing(2),
                    },
                },
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
