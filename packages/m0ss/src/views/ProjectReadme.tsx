import { IArticleTarget } from "blog-types";
import React, { useEffect, useState } from "react";

import { Article } from "./article";

export const README = () => {
    const [md, setMd] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/agmoss/m0ss/master/README.md")
            .then((response) => response.text())
            .then((text) => setMd(text));
    }, []);

    const a: IArticleTarget = {
        article: {
            id: "1",
            title: "Andrew Moss README",
            description: "Project Readme",
            internalLink: null,
            markdown: { content: md },
            externalLink: null,
        },
    };

    return <Article article={a} />;
};
