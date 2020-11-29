import { createStyles, makeStyles } from "@material-ui/core";
import React, { ComponentType } from "react";

import { Footer } from "../views/footer";
import Header from "../views/header";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowX: "hidden",
        },
    })
);

// eslint-disable-next-line @typescript-eslint/ban-types
const withPage = <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <WrappedComponent {...(props as T)} />
            <Footer />
        </div>
    );
};

export default withPage;
