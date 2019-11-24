import React from "react";

import {
    Container,
    createStyles,
    CssBaseline,
    Grid,
    makeStyles,
    Theme,
} from "@material-ui/core";

import MarkdownComponent from "../components/markdown";

import post from "./post.md";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        markdown: {
            ...theme.typography.body2,
            padding: theme.spacing(5, 0, 10),
        },
    }),
);

export function MainContent() {
    const classes = useStyles();

    const [md, setMd] = React.useState();

    React.useEffect(() => {
        fetch(post)
            .then((response) => {
                return response.text();
            })
            .then((text) => setMd(text));
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container={true}
                        justify="center"
                    >
                        <Grid item={true} xs={12} md={12}>
                            <MarkdownComponent className={classes.markdown}>
                                {md}
                            </MarkdownComponent>
                            {/* <Divider /> */}
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}
