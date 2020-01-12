import React, { useState, useEffect } from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { Footer } from "../views/footerPrimary";
import { Header } from "../views/header";
import { Hero } from "../views/heroPrimary";
import { MainContent } from "../views/mainContent";
import { withLoading } from "../components/withLoading";
import withFade from "../components/withFade";
import withTheme from "../components/withTheme";

const Landing = () => {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            },
        })
    );

    const [md, setMd] = useState<string>("");
    const [img] = useState<Blob[]>(new Array<Blob>());
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

                const s = await getFile(
                    "https://source.unsplash.com/random/600x600",
                    FileType.Image
                );

                img.push(i, s);
            } catch {
                img.push(
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
    }, [img]);

    const classes = useStyles();

    const LandingPage: React.FC = () => {
        return (
            <div className={classes.root}>
                <React.Fragment>
                    <Header />
                    <Hero img={img} />
                    <MainContent md={md} />
                    <Footer />
                </React.Fragment>
            </div>
        );
    };

    const LoadingLandingPage = withLoading(withFade(LandingPage));

    return <LoadingLandingPage loading={loading} />;
};

export default withTheme(Landing);
