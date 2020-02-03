import React, { useState, useEffect } from "react";

import {
    Container,
    createStyles,
    CssBaseline,
    Grid,
    makeStyles,
    Theme,
} from "@material-ui/core";

import MarkdownComponent from "../components/markdown";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    })
);

export const withMarkdownView = (url: string): React.FC => () => {
    const classes = useStyles();

    const [md, setMd] = useState("");

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.text();
            })
            .then(text => setMd(text));
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container={true}
                        spacing={5}
                        justify="center"
                        direction="column"
                        className={classes.mainGrid}
                    >
                        <Grid item={true} xs={12}>
                            {MarkdownComponent(md)}
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
};
