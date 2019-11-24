import React from "react";

// MaterialUI
import { createStyles, makeStyles } from "@material-ui/core";

// Components
import withTheme from "../components/withTheme";

// Views
import { Footer } from "../views/footer";
import { Header } from "../views/header";
import { Hero } from "../views/hero";

const Landing = () => {

    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            },
        }),
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Hero />
            <Footer />
        </div>

    );
};

export default withTheme(Landing);
