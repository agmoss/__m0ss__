import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

import { withMarkdownView } from "../components/withMarkdownView";

import Header from "../views/header";
import { Footer } from "../views/footer";

const Readme = () => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                "@global": {
                    h1: {
                        ...theme.typography.h4,
                        paddingBottom: theme.spacing(2),
                    },
                },
            },
        })
    );

    const ProjectReadme = withMarkdownView(
        "https://raw.githubusercontent.com/agmoss/m0ss/master/README.md"
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <ProjectReadme />
            <Footer />
        </div>
    );
};

export default Readme;
