import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { ITargetProfile } from "blog-types";

import Header from "../views/header";
import { Footer } from "../views/footer";
import { Hero } from "../views/hero";
import { MainContent } from "../views/mainContent";


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
    profile: ITargetProfile;
    setColor: (color: string) => void;
}

export const Landing = ({ profile, setColor }: ILanding) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Hero
                img={profile.profile.profilePhoto.blobs}
                bio={profile.profile.bio}
            />
            <MainContent
                md={profile.profile.rant.content}
                setColor={setColor}
            />
            <Footer />
        </div>
    );
};
