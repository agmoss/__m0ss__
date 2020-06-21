import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme, Grid } from "@material-ui/core";
import ReactJson from "react-json-view";

import Header from "../views/header";
import { withMarkdownView } from "../components/withMarkdownView";
import { Footer } from "../views/footer";
import packageJson from "../../package.json";
import { useHistory } from "react-router-dom";

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
            >
                <Grid item xs={12}>
                    <ReactJson src={packageJson} theme="monokai" />
                </Grid>
            </Grid>

            <Footer />
        </div>
    );
};

export default ProjectReadme;
