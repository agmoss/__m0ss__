import React, { useState } from "react";
import useSWR from "swr";
import Cookies from "universal-cookie";
import axios from "axios";
import FileDownload from "js-file-download";

import { client } from "../gqlClient";
import { queryMedia } from "../gqlQuery";
import { IMedia } from "../models";

import { Loading, Error } from "../pages/placeholders";
import MediaPage from "../pages/media";

const MediaContainer = () => {
    const cookies = new Cookies();
    const [media, setMedia] = useState<IMedia | null>(null);
    const [loading, setLoading] = useState(false);

    const downloader = async (url: string) => {
        setLoading(true);
        const response = await axios.get(url);
        const fileName = url.split("/").pop();
        if (fileName) {
            FileDownload(response.data, fileName);
        }
        setLoading(false);
    };

    function fetcher(query: string) {
        client.setHeader("Authorization", `Bearer ${cookies.get("ahhhh")}`);
        return client.request<IMedia>(query);
    }

    const { data, error } = useSWR([queryMedia], fetcher);

    if (error) {
        return <Error />;
    }
    if (!data) {
        return <Loading />;
    }
    if (media === null) {
        try {
            setMedia(data);
        } catch (e) {
            return <Error />;
        }
        return <Loading />;
    }

    return (
        <MediaPage loading={loading} media={media} downloader={downloader} />
    );
};

export default MediaContainer;
