import React from "react";

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

import MarkdownComponent from "../components/markdown";

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

    return (
        <React.Fragment>
            <CssBaseline />
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
                            <MarkdownComponent>{md}</MarkdownComponent>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Paper
                                elevation={0}
                                className={classes.sidebarAboutBox}
                            >
                                <Typography variant="h6" gutterBottom={true}>
                                    About
                                </Typography>
                                <Typography>
                                    At some point this will be a blog where you
                                    get to hear all of my ridiculousness
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
};
