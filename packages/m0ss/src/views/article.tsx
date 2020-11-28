import {
    Container,
    Grid,
    Theme,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import { IArticleTarget } from "blog-types";
import React from "react";
import { Helmet } from "react-helmet";

import MarkdownComponent from "../components/markdown";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        <div>
            <Helmet>
                <title>{article.article.title}</title>
                <meta
                    name="description"
                    content={article.article.description}
                />
            </Helmet>
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
        </div>
    );
};
