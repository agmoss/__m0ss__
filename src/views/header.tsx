import React from "react";

// MaterialUI
import {
    Container,
    createStyles,
    CssBaseline,
    Link,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core";

import IconButton from "../components/iconButton";

import { GitHub, LinkedIn, Mail } from "@material-ui/icons";

// Components
import { Gin } from "../components/gin";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            marginBottom: theme.spacing(2),
        },
        toolbarTitle: {
            flex: 1,
            color: theme.palette.secondary.main,
        },
    })
);

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        fontSize: 25,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});

export const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Gin />
                    <MuiThemeProvider theme={theme}>
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap={true}
                            className={classes.toolbarTitle}
                        >
                            m0ss
                        </Typography>
                    </MuiThemeProvider>
                    <Link
                        href="https://github.com/agmoss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton>
                            <GitHub />
                        </IconButton>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/agmoss/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </Link>
                    <Link
                        href="mailto:business@m0ss.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton>
                            <Mail />
                        </IconButton>
                    </Link>
                </Toolbar>
            </Container>
        </React.Fragment>
    );
};
