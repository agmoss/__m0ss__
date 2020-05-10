import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import Header from "../views/header";
import { Footer } from "../views/footer";
import { Hero } from "../views/hero";
import { MainContent } from "../views/mainContent";
import { IProfile } from "../gqlQuery";

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

interface ILanding {
    profile: IProfile;
    setColor: (color: string) => void;
}

export const Landing = ({ profile, setColor }: ILanding) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Hero img={profile.profilePhoto.blobs} bio={profile.bio} />
            <MainContent md={profile.rant.content} setColor={setColor} />
            <Footer />
        </div>
    );
};
