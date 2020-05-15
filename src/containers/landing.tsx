import React from "react";

import useSWR from "swr";
import { Landing as LandingPage } from "../pages/landing";
import { Loading, Error } from "../pages/placeholders";
import { IProfile, ITargetProfile } from "../models";
import { getEndpoint, client } from "../gqlClient";
import { queryProfile } from "../gqlQuery";
import { getImgs, getText } from "../getData";

interface ILanding {
    profile: ITargetProfile | null;
    setProfile: React.Dispatch<React.SetStateAction<ITargetProfile | null>>;
    setColor: (color: string) => void;
}

const LandingContainer = ({ setColor, profile, setProfile }: ILanding) => {
    function fetcher(query: string) {
        return client.request<IProfile>(query);
    }

    const { data, error } = useSWR<IProfile>(queryProfile, fetcher);

    const dataFormatter = async (p: IProfile) => {
        const profilePhoto = await getImgs([
            `${getEndpoint()}${p.profile.profilePhoto.url}`,
            "https://source.unsplash.com/random/600x600",
        ]);

        const rant = await getText(`${getEndpoint()}${p.profile.rant.url}`);

        const prof = {
            ...p.profile,
            profilePhoto: {
                url: p.profile.profilePhoto.url,
                blobs: profilePhoto,
            },
            rant: {
                url: p.profile.rant.url,
                content: rant,
            },
        };
        setProfile({ profile: prof });
    };

    if (error) {
        return <Error />;
    }
    if (!data) {
        return <Loading />;
    }
    if (profile === null) {
        try {
            dataFormatter(data);
        } catch (e) {
            return <Error />;
        }
        return <Loading />;
    }
    return <LandingPage profile={profile} setColor={setColor} />;
};

export default LandingContainer;
