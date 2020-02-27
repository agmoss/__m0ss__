import React, { useState } from "react";

import {
    Container,
    createStyles,
    CssBaseline,
    Divider,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";

import { ThumbUp } from "@material-ui/icons";
import IconButton from "../components/iconButton";
import { Snacks, severity } from "../components/Snacks";

import MarkdownComponent from "../components/markdown";
import { withPull } from "../components/withPull";

const randomWords = require("random-words");

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebarSection: {
            padding: theme.spacing(2),
        },
        sidebarAboutBox: {
            padding: theme.spacing(2),
        },
        mainGrid: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        divider: {
            marginBottom: theme.spacing(3),
        },
    })
);

interface IProps {
    md: string;
}

export const MainContent = ({ md }: IProps) => {
    const classes = useStyles();

    const [openSnack, setOpenSnack] = useState(false);
    const [message, setMessage] = useState(
        randomWords({ exactly: 5, join: " " })
    );
    const [level, setLevel] = useState(Math.floor(Math.random() * 4) + 1);

    const handleOpen = () => {
        setOpenSnack(!openSnack);
        if (openSnack === false) {
            setMessage(
                randomWords({
                    exactly: Math.floor(Math.random() * 6) + 1,
                    join: " ",
                })
            );
            setLevel(Math.floor(Math.random() * 4) + 1);
        }
    };

    const AboutPaper = () => (
        <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="h6" gutterBottom>
                                About
                            </Typography>
                            <Typography>Welcome to my account</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    handleOpen();
                                }}
                            >
                                <ThumbUp />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

    const AboutPaperPull = withPull(AboutPaper);

    return (
        <>
            <CssBaseline />
            <Snacks
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                level={severity[level]}
            />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                Opinions
                            </Typography>
                            <Divider className={classes.divider} />
                            {MarkdownComponent(md)}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <AboutPaperPull />
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </>
    );
};
