import React from "react";

import {
    Container,
    createStyles,
    CssBaseline,
    Link,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
    Switch,
} from "@material-ui/core";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";

import { useHistory } from "react-router-dom";
import IconButton from "../components/iconButton";
import { Gin } from "../components/gin";
import { withPull } from "../components/withPull";

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

interface IHeader {
    checked: boolean;
    onChange: () => void;
}

const Header = ({ checked, onChange }: IHeader) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Link
                        onClick={() => {
                            history.push("/");
                        }}
                        className={classes.toolbarTitle}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            component="h1"
                            variant="h4"
                            color="inherit"
                            noWrap={true}
                        >
                            m0ss
                        </Typography>
                    </Link>
                    <Link
                        noWrap={true}
                        onClick={() => {
                            history.push("/content");
                        }}
                    >
                        <Gin />
                    </Link>
                    <Switch checked={checked} onChange={onChange} />
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
