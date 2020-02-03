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

    const ProjectReadme = withMarkdownView(
        "https://raw.githubusercontent.com/agmoss/m0ss/master/README.md"
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ProjectReadme />
            <Footer />
        </div>
    );
};

export default Readme;
