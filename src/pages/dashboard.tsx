import React from "react";
import { useHistory } from "react-router-dom";
import {
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    CssBaseline,
    Link,
    createStyles,
    makeStyles,
    Theme,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { withTheme } from "../components/withTheme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "relative",
            backgroundColor: theme.palette.secondary.light,
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    })
);

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Content
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {
                            history.goBack();
                        }}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem
                    button={true}
                    onClick={() => history.push("/circles")}
                >
                    <ListItemText
                        primary="Circles"
                        secondary="SVG Canvas Art"
                    />
                </ListItem>
                <Divider />
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://icediot.com/"}
                    style={{ textDecoration: "none" }}
                    color="inherit"
                >
                    <ListItem button={true}>
                        <ListItemText
                            primary="Iced IoT"
                            secondary="IoT Platform"
                        />
                    </ListItem>
                </Link>
                <Divider />
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://rentwiser.azurewebsites.net"}
                    style={{ textDecoration: "none" }}
                    color="inherit"
                >
                    <ListItem button={true}>
                        <ListItemText
                            primary="RentWiser"
                            secondary="Analysis service for rental data"
                        />
                    </ListItem>
                </Link>
                <Divider />
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://calgaryproject.net/"}
                    style={{ textDecoration: "none" }}
                    color="inherit"
                >
                    <ListItem button={true}>
                        <ListItemText
                            primary="The Calgary Project"
                            secondary="Original rental data anaylsis platform"
                        />
                    </ListItem>
                </Link>
                <Divider />
            </List>
        </React.Fragment>
    );
};

export default withTheme(Dashboard);
