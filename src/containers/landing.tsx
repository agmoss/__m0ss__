import React, { useEffect } from "react";

import { Landing as LandingPage } from "../pages/landing";
import { Loading as LoadingPage } from "../pages/loading";
import { IProfile } from "../gqlQuery";

interface ILanding {
    profile: IProfile | null;
    fetchData: () => void;
    loading: boolean;
    setColor: (color: string) => void;
}

const LandingContainer = ({
    fetchData,
    loading,
    setColor,
    profile,
}: ILanding) => {
    useEffect(() => {
        if (profile === null) {
            fetchData();
        }
    });

    if (profile === null) {
        return <LoadingPage />;
    }

    return <LandingPage profile={profile} setColor={setColor} />;
};

export default LandingContainer;
