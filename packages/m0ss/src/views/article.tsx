import React from "react";
import {
    Container,
    createStyles,
    Grid,
    makeStyles,
    Theme,
} from "@material-ui/core";
import { IArticleTarget } from "blog-types";

import MarkdownComponent from "../components/markdown";
import Header from "./header";
import { Footer } from "./footer";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowX: "hidden",
        },
        mainGrid: {
            "@global": {
                h1: {
                    ...theme.typography.h2,
                    paddingBottom: theme.spacing(2),
                },
                h2: {
                    ...theme.typography.h3,
                    paddingBottom: theme.spacing(2),
                },
                h3: {
                    ...theme.typography.h4,
                    paddingBottom: theme.spacing(2),
                },
                h4: {
                    ...theme.typography.h5,
                    paddingBottom: theme.spacing(2),
                },
                img: {
                    maxWidth: "100%",
                    height: "auto",
                },
            },
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    })
);

interface IArticleView {
    article: IArticleTarget;
}

export const Article = ({ article }: IArticleView) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Helmet>
                <title>{article.article.title}</title>
                <meta
                    name="description"
                    content={article.article.description}
                />
            </Helmet>
            <Header />
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container
                        spacing={0}
                        justify="center"
                        direction="column"
                        className={classes.mainGrid}
                    >
                        <Grid item xs={12}>
                            {MarkdownComponent(
                                article.article.markdown.content
                                    ? article.article.markdown.content
                                    : "No Content for this article :("
                            )}
                        </Grid>
                    </Grid>
                </main>
            </Container>
            <Footer />
        </div>
    );
};
