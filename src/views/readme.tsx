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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    })
);

export function README() {
    const classes = useStyles();

    const [md, setMd] = React.useState("");

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/agmoss/m0ss/master/README.md")
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
                            <MarkdownComponent>{md}</MarkdownComponent>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}
