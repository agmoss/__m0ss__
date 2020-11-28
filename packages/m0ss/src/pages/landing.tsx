import { IProfile } from "blog-types";
import React from "react";

import { Hero } from "../views/hero";
import { MainContent } from "../views/mainContent";

interface ILanding {
    profile: IProfile;
    setColor: (color: string) => void;
}

export const Landing = ({ profile, setColor }: ILanding) => {
    return (
        <div>
            <Hero
                primary={profile.profile.profilePhoto.urlPrimary}
                secondary={profile.profile.profilePhoto.urlSecondary}
                bio={profile.profile.bio}
            />
            <MainContent
                md={profile.profile.rant.content}
                setColor={setColor}
            />
        </div>
    );
};
