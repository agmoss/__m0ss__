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

export const README = () => {
    const classes = useStyles();

    const [md, setMd] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/agmoss/m0ss/master/README.md")
            .then(response => response.text())
            .then(text => setMd(text));
    }, []);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container
                        spacing={5}
                        justify="center"
                        direction="column"
                        className={classes.mainGrid}
                    >
                        <Grid item xs={12}>
                            {MarkdownComponent(md)}
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </>
    );
};
