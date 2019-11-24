import React from "react";

// MaterialUI
import {
    Container,
    createStyles,
    CssBaseline,
    IconButton,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";

import { GitHub, LinkedIn } from "@material-ui/icons";

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
        },
    }),
);

export const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Gin />
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
                    <IconButton>
                        <GitHub />
                    </IconButton>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </Toolbar>
            </Container>
        </React.Fragment>
    );
};
