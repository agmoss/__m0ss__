import React from "react";

// MaterialUI
import {
    Container,
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
import { useHistory } from "react-router-dom";
import { Gin } from "../components/gin";
import { logoTheme } from "../components/theme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            marginBottom: theme.spacing(2),
        },
        toolbarTitle: {
            color: theme.palette.secondary.light,
            flex: 1,
        },
    })
);

export const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Link
                        noWrap={true}
                        onClick={() => history.push("/circles")}
                    >
                        <Gin />
                    </Link>
                    <MuiThemeProvider theme={logoTheme}>
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
