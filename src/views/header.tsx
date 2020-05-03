import React, { useState } from "react";

import {
    Container,
    createStyles,
    CssBaseline,
    Link,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
    AppBar,
    SvgIcon,
} from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Apps } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import IconButton from "../components/iconButton";

import { ContactDialog } from "./contactDialog";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            marginBottom: theme.spacing(2),
        },
        toolbarTitle: {
            color: theme.palette.primary.main,
            flex: 1,
            textDecoration: "none",
            outline: 0,
        },
        appBar: {
            backgroundColor: "#303030",
        },
        root: {
            paddingBottom: theme.spacing(2),
        },
        npm: {
            "@global": {
                button: {
                    "&:hover": {
                        "& rect": {
                            fill: "white",
                        },
                        "& polygon": {
                            fill: theme.palette.primary.main,
                        },
                    },
                },
            },
        },
    })
);

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <ContactDialog open={open} setOpen={setOpen} />
            <AppBar className={classes.appBar} position="fixed" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <div
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => {
                                history.push("/");
                            }}
                            onKeyPress={() => {
                                history.push("/");
                            }}
                            className={classes.toolbarTitle}
                        >
                            <Typography
                                component="h1"
                                variant="h4"
                                color="inherit"
                                noWrap
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                m0ss
                            </Typography>
                        </div>
                        <IconButton
                            onClick={() => {
                                history.push("/content");
                            }}
                        >
                            <Apps />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                setOpen(true);
                            }}
                        >
                            <Mail />
                        </IconButton>
                        <Link
                            href="https://www.npmjs.com/~agmoss"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.npm}
                        >
                            <IconButton>
                                <SvgIcon>
                                    <svg viewBox="0 0 27.23 27.23">
                                        <rect
                                            fill="#fff"
                                            width="27.23"
                                            height="27.23"
                                            rx="2"
                                        />
                                        <polygon
                                            fill="#333333"
                                            points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
                                        />
                                    </svg>
                                </SvgIcon>
                            </IconButton>
                        </Link>
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
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </div>
    );
};

export default Header;
