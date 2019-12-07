import React from "react";

// MaterialUI
import { createStyles, makeStyles } from "@material-ui/core";

// Components
import withTheme from "../components/withTheme";

// Views
import { Footer } from "../views/footerPrimary";
import { Header } from "../views/header";
import { README } from "../views/readme";

const Readme = () => {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            },
        })
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <README />
            <Footer />
        </div>
    );
};

export default withTheme(Readme);
