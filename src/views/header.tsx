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
} from "@material-ui/core";

import IconButton from "../components/iconButton";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";
import { Gin } from "../components/gin";
import { withPull } from "../components/withPull";
import { MainDialog } from "./dialog";

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

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <MainDialog open={open} setOpen={setOpen} />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Link noWrap={true} onClick={handleClickOpen}>
                        <Gin />
                    </Link>
                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        align="center"
                        noWrap={true}
                        className={classes.toolbarTitle}
                    >
                        m0ss
                    </Typography>
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

export default withPull(Header);
