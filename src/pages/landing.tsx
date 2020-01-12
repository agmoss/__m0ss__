import React, { useState, useEffect } from "react";

import { createStyles, makeStyles, Grid } from "@material-ui/core";

import withTheme from "../components/withTheme";

import { Footer } from "../views/footerPrimary";
import { Header } from "../views/header";
import { Hero } from "../views/heroPrimary";
import { MainContent } from "../views/mainContent";

import ReactLoading from "react-loading";

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

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {loading ? (
                <Grid
                    container={true}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Grid item={true}>
                        <ReactLoading type={"bars"} color={"white"} />
                    </Grid>
                </Grid>
            ) : (
                <React.Fragment>
                    <Header />
                    <Hero img={img} />
                    <MainContent md={md} />
                    <Footer />
                </React.Fragment>
            )}
        </div>
    );
};

export default withTheme(Landing);
