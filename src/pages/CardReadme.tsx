import React from "react";

// MaterialUI
import { createStyles, makeStyles } from "@material-ui/core";

// Components
import { withMarkdownView } from "../components/withMarkdownView";

// Views
import { Footer } from "../views/footer";

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
            <CardReadme />
            <Footer />
        </div>
    );
};

export default Readme;
