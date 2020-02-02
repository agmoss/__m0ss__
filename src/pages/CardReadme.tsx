import React from "react";

// MaterialUI
import { createStyles, makeStyles } from "@material-ui/core";

// Components
import { withTheme } from "../components/withTheme";
import { withMarkdownView } from "../components/withMarkdownView";

// Views
import { Footer } from "../views/footer";
import Header from "../views/header";

const Readme = () => {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
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

export default withTheme(Readme);
