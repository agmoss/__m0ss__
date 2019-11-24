import React from "react";

import {
    Container,
    CssBaseline,
    Link,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: "auto",
        padding: theme.spacing(2),
    },
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        m0ss
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                    >
                        Drink this
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                    >
                        {"Copyright © "}
                        <Link color="inherit" href="https://m0ss.dev">
                            Andrew Moss
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Container>
            </footer>
        </React.Fragment>
    );
};
