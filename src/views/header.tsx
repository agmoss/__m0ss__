import React from "react";

// MaterialUI
import {
    Container,
    createMuiTheme,
    createStyles,
    CssBaseline,
    Link,
    makeStyles,
    MuiThemeProvider,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";

import IconButton from "../components/iconButton";

import { GitHub, LinkedIn, Mail } from "@material-ui/icons";

// Components
import { Gin } from "../components/gin";

// tslint:disable-next-line: no-shadowed-variable
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            marginBottom: theme.spacing(2),
        },
        toolbarTitle: {
            color: theme.palette.secondary.main,
            flex: 1,
        },
    })
);

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Ubuntu Mono", "Helvetica", "Arial", sans-serif',
        fontSize: 25,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        // tslint:disable-next-line: object-literal-sort-keys
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
