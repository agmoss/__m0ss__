import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Link,
    createStyles,
    makeStyles,
    Theme,
    Slide,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import IconButton from "../components/iconButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "relative",
            backgroundColor: theme.palette.primary.main,
        },
        title: {
            flex: 1,
        },
    })
);

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();

    const [checked, setChecked] = React.useState(true);

    const exitTimeout = 300;
    const [enterTimeout, setEnterTimeout] = useState(300);

    const handleChange = () => {
        setChecked((prev) => !prev);
        setTimeout(() => {
            history.push("/");
        }, exitTimeout);
    };

    useEffect(() => {
        if (history.action === "POP") {
            setEnterTimeout(0);
        }
    }, [history.action]);

    return (
        <>
            <CssBaseline />
            <div>
                <Slide
                    direction="up"
                    in={checked}
                    timeout={{ enter: enterTimeout, exit: exitTimeout }}
                >
                    <div>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <Typography
                                    variant="h4"
                                    className={classes.title}
                                >
                                    Content
                                </Typography>
                                <IconButton
                                    edge="start"
                                    color="secondary"
                                    onClick={() => {
                                        handleChange();
                                    }}
                                    aria-label="close"
                                >
                                    <Close />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem
                                button
                                onClick={() => history.push("/react-circles")}
                            >
                                <ListItemText
                                    primary="react-circles"
                                    secondary="SVG Canvas Art"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem
                                button
                                onClick={() => history.push("/offcircle")}
                            >
                                <ListItemText
                                    primary="offcircle"
                                    secondary="Recreation of Matplotlib ellipse demo"
                                />
                            </ListItem>
                            <Divider />
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.npmjs.com/package/twohundred"
                                style={{ textDecoration: "none" }}
                                color="inherit"
                            >
                                <ListItem button>
                                    <ListItemText
                                        primary="twohundred"
                                        secondary="Node.js CLI for checking the HTTP status of Urls"
                                    />
                                </ListItem>
                            </Link>
                            <Divider />
                            <ListItem
                                button
                                onClick={() => history.push("/card")}
                            >
                                <ListItemText
                                    primary="Card"
                                    secondary="Generative Art Business Card"
                                />
                            </ListItem>
                            <Divider />
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://icediot.com/"
                                style={{ textDecoration: "none" }}
                                color="inherit"
                            >
                                <ListItem button>
                                    <ListItemText
                                        primary="Iced IoT"
                                        secondary="IoT Platform"
                                    />
                                </ListItem>
                            </Link>
                            <Divider />
                        </List>
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default Dashboard;
