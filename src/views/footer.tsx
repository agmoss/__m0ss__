import React from "react";

import {
    Grid,
    Link,
    Container,
    Typography,
    makeStyles,
    createStyles,
    Theme,
    CssBaseline,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.secondary.light,
            marginTop: "auto",
            width: "100%",
        },
        container: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
        },
        list: {
            margin: 0,
            listStyle: "none",
            paddingLeft: 0,
        },
    })
);

export const Footer = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <CssBaseline />
            <Typography component="footer" className={classes.root}>
                <Container className={classes.container}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                alignContent="center"
                                spacing={6}
                            >
                                <Grid item>
                                    <Typography
                                        component="h3"
                                        variant="h3"
                                        color="inherit"
                                        noWrap
                                    >
                                        m0ss
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" gutterBottom>
                                        About
                                    </Typography>
                                    <ul className={classes.list}>
                                        <li>
                                            <Link
                                                href="https://github.com/agmoss/m0ss"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Source
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                noWrap
                                                onClick={() =>
                                                    history.push("/README")
                                                }
                                            >
                                                README
                                            </Link>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Typography>
        </>
    );
};
