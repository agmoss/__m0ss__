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
            color: theme.palette.secondary.light,
            flex: 1,
        },
        appBar: {
            backgroundColor: "#303030",
        },
        padding: {
            paddingBottom: theme.spacing(2),
        },
    })
);

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.padding}>
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
                            style={{ textDecoration: "none", outline: 0 }}
                        >
                            <Typography
                                component="h1"
                                variant="h4"
                                color="inherit"
                                noWrap
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
