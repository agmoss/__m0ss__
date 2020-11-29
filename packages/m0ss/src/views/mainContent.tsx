import {
    Container,
    CssBaseline,
    Divider,
    Grid,
    Paper,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { compose } from "redux";
import { ColorPicker, IconButton, Snacks, severity } from "three-ui";

import MarkdownComponent from "../components/markdown";
import { actions as themeActions } from "../theme/redux/model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
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
        landingTypography: {
            "@global": {
                h2: {
                    ...theme.typography.h4,
                },
                h3: {
                    ...theme.typography.h5,
                    fontWeight: theme.typography.fontWeightBold,
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1),
                },
                h4: {
                    ...theme.typography.body1,
                    paddingBottom: theme.spacing(1.5),
                },
            },
        },
        divider: {
            backgroundColor: theme.palette.primary.main,
            marginBottom: theme.spacing(3),
        },
    })
);

interface IMainContent {
    md: string;
}

export const MainContent = ({ md }: IMainContent) => {
    const classes = useStyles();
    const [openSnack, setOpenSnack] = useState(false);

    const dispatch = useDispatch();

    const setColor = compose(dispatch, themeActions.setColor);

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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.sidebarAboutBox}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="h5" gutterBottom>
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
                </Paper>
            </Grid>
            <Grid item style={{ width: "100%" }} xs={12}>
                <ColorPicker setColor={setColor} />
            </Grid>
        </Grid>
    );
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
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Grid item xs={12} md={4}>
                        <AboutPaper />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        className={classes.landingTypography}
                    >
                        <Typography variant="h5" gutterBottom>
                            Rant
                        </Typography>
                        <Divider className={classes.divider} />
                        {MarkdownComponent(md)}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
