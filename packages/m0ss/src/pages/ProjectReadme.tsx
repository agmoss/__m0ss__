import { Grid, Theme, createStyles, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { withMarkdownView } from "../components/withMarkdownView";
import { Footer } from "../views/footer";
import Header from "../views/header";

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

const ProjectReadme = () => {
    const ProjectReadmeView = withMarkdownView(
        "https://raw.githubusercontent.com/agmoss/m0ss/master/README.md"
    );

    const classes = useStyles();

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [history.location]);

    return (
        <div className={classes.root}>
            <Header />
            <ProjectReadmeView />
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"
            ></Grid>
            <Footer />
        </div>
    );
};

export default ProjectReadme;
