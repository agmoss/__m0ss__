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

import IconButton from "../components/iconButton";
import { Snacks, severity } from "../components/Snacks";
import { ThumbUp } from "@material-ui/icons";

import MarkdownComponent from "../components/markdown";
import { withPull } from "../components/withPull";

// tslint:disable-next-line: no-var-requires
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

export const MainContent: React.FC<IProps> = ({ md }) => {
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

    const AboutPaper = () => {
        return (
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                        <Grid container={true} justify="space-between">
                            <Grid item={true}>
                                <Typography variant="h6" gutterBottom={true}>
                                    About
                                </Typography>
                                <Typography>Welcome to my account</Typography>
                            </Grid>
                            <Grid item={true}>
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
    };

    const AboutPaperPull = withPull(AboutPaper);

    return (
        <React.Fragment>
            <CssBaseline />

            <Snacks
                open={openSnack}
                setOpen={setOpenSnack}
                message={message}
                level={severity[level]}
            />
            <Container maxWidth="lg">
                <main>
                    <Grid
                        container={true}
                        spacing={5}
                        className={classes.mainGrid}
                    >
                        <Grid item={true} xs={12} md={8}>
                            <Typography variant="h6" gutterBottom={true}>
                                Opinions
                            </Typography>
                            <Divider className={classes.divider} />
                            {MarkdownComponent(md)}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <AboutPaperPull />
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
};
