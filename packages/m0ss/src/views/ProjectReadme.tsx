import React, { useState, useEffect } from "react";

import { Article } from "./article";

export const README = () => {
    const [md, setMd] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/agmoss/m0ss/master/README.md")
            .then((response) => response.text())
            .then((text) => setMd(text));
    }, []);

    return <Article content={md} />;
};
