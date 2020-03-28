import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

import Header from "../views/header";
import { withMarkdownView } from "../components/withMarkdownView";
import { Footer } from "../views/footer";

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
            },
        },
    })
);

interface IProjectReadMe {
    checked: boolean;
    toggleTheme: Function;
}

const ProjectReadme = ({ checked, toggleTheme }: IProjectReadMe) => {
    const ProjectReadmeView = withMarkdownView(
        "https://raw.githubusercontent.com/agmoss/m0ss/master/README.md"
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header checked={checked} toggleTheme={toggleTheme} />
            <ProjectReadmeView />
            <Footer />
        </div>
    );
};

export default ProjectReadme;
