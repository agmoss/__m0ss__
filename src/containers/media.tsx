import React, { useState } from "react";
import useSWR from "swr";
import Cookies from "universal-cookie";

import { client } from "../gqlClient";
import { queryMedia } from "../gqlQuery";
import { IMedia } from "../models";

import { Loading, Error } from "../pages/placeholders";
import MediaPage from "../pages/media";

const MediaContainer = () => {
    const cookies = new Cookies();
    const [media, setMedia] = useState<IMedia | null>(null);

    function fetcher(query: string) {
        client.setHeader("Authorization", `Bearer ${cookies.get("ahhhh")}`);
        return client.request<IMedia>(query);
    }

    const { data, error } = useSWR([queryMedia], fetcher);

    if (error) {
        console.log(error);
        return <Error />;
    }
    if (!data) {
        return <Loading />;
    }
    if (media === null) {
        try {
            setMedia(data);
        } catch (e) {
            console.log(error);
            return <Error />;
        }
        return <Loading />;
    }

    return <MediaPage media={media} />;
};

export default MediaContainer;
