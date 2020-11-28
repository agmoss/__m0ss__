import { IProfile } from "blog-types";
import React, { useEffect } from "react";

import { Landing as LandingPage } from "../pages/landing";
import { Loading } from "../pages/placeholders";

interface ILanding {
    setColor: (color: string) => void;
    fetchData: () => void;
    loading: boolean;
    text: string;
}

const LandingContainer = ({ text, fetchData, loading, setColor }: ILanding) => {
    useEffect(() => {
        if (text.length < 10) {
            fetchData();
        }
    }, [text, fetchData]);

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
                content: text,
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
