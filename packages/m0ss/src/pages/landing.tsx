import { createStyles, makeStyles } from "@material-ui/core";
import { IProfile } from "blog-types";
import React from "react";

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
    profile: IProfile;
    setColor: (color: string) => void;
}

export const Landing = ({ profile, setColor }: ILanding) => {
    const classes = useStyles();

    return (
        <div>
            {/* <Header /> */}
            <Hero
                primary={profile.profile.profilePhoto.urlPrimary}
                secondary={profile.profile.profilePhoto.urlSecondary}
                bio={profile.profile.bio}
            />
            <MainContent
                md={profile.profile.rant.content}
                setColor={setColor}
            />
            {/* <Footer /> */}
        </div>
    );
};
