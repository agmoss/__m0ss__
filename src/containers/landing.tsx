import React, { useState, useEffect } from "react";

// Components
import withTheme from "../components/withTheme";
import { withLoading } from "../components/withLoading";

import LandingPresentation from "../pages/landing";

const LandingContainer = () => {
    const [md, setMd] = useState<string>("");
    const [img, setImg] = useState<Blob>(new Blob());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        enum FileType {
            Image,
            Markdown,
        }

        const getFile = async (url: string, fileType: FileType) => {
            const response = await fetch(url);
            switch (fileType) {
                case FileType.Image:
                    if (response.ok) {
                        const data = await response.blob();
                        const blob = new Blob([data], { type: "image/jpeg" });
                        return blob;
                    } else {
                        throw new Error("error");
                    }
                case FileType.Markdown:
                    if (response.ok) {
                        const data = await response.blob();
                        const blob = new Blob([data], { type: "text/plain" });
                        return blob;
                    } else {
                        throw new Error("error");
                    }
            }
        };

        const setText = async () => {
            try {
                const f = await getFile(
                    "https://ggantstorage.blob.core.windows.net/markdown/landing.md",
                    FileType.Markdown
                );
                const text = await new Response(f).text();
                setMd(text);
            } catch {
                setMd("Error");
            }
        };

        const setFile = async () => {
            try {
                const i = await getFile(
                    "https://ggantstorage.blob.core.windows.net/images/DSC_7024.JPG",
                    FileType.Image
                );
                setImg(i);
            } catch {
                setImg(
                    await getFile(
                        "https://source.unsplash.com/random/600x600",
                        FileType.Image
                    )
                );
            }
        };

        Promise.all([setText(), setFile()]).then(() => {
            setLoading(false);
        });
    }, []);

    const LandingWithLoading = withLoading(LandingPresentation);
    return React.createElement(LandingWithLoading, { loading, img, md });
};

export default withTheme(LandingContainer);
