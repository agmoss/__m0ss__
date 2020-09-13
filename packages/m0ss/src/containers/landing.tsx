import React, { useEffect, useState } from "react";
import { IProfile } from "blog-types";

import { Landing as LandingPage } from "../pages/landing";
import { Loading } from "../pages/placeholders";

interface ILanding {
    setColor: (color: string) => void;
}

const LandingContainer = ({ setColor }: ILanding) => {
    const [md, setMd] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            "https://honeyyy.s3.us-west-2.amazonaws.com/landing_d2bb8f5328.markdown"
        )
            .then((response) => response.text())
            .then((text) => setMd(text))
            .then(() => setLoading(false));
    }, []);

    const profile: IProfile = {
        profile: {
            firstName: "Andrew",
            lastName: "Moss",
            profilePhoto: {
                urlPrimary:
                    "https://honeyyy.s3.us-west-2.amazonaws.com/DSC_7024_ac8e51a970.jpeg",
                urlSecondary: "https://source.unsplash.com/random/600x600",
            },
            email: "",
            rant: {
                url: "",
                content: md,
            },
            bio:
                "Hi, I'm a full stack developer with a focus on web applications, infrastructure, data visualization, and creative programming. I am currently hard at work on the next big thing. You'll be hearing about it soon...",
            color: "red",
        },
    };

    if (loading) {
        return <Loading />;
    }

    return <LandingPage profile={profile} setColor={setColor} />;
};

export default LandingContainer;
