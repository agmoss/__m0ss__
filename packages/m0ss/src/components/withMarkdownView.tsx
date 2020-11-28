import {
    Container,
    CssBaseline,
    Grid,
    Theme,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import MarkdownComponent from "./markdown";

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
            .then((response) => response.text())
            .then((text) => setMd(text));
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
