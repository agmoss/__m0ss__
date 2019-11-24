import React from "react";

import {
    Box,
    Container,
    createStyles,
    CssBaseline,
    Divider,
    Grid,
    Link,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";

import MarkdownComponent from "../components/markdown";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        markdown: {
            ...theme.typography.body2,
            padding: theme.spacing(5, 0, 5),
        },
        sidebarSection: {
            padding: theme.spacing(5, 0, 5),
        },
        // tslint:disable-next-line: object-literal-sort-keys
        sidebarAboutBox: {
            padding: theme.spacing(2),
            // tslint:disable-next-line: object-literal-sort-keys
            backgroundColor: theme.palette.grey[900],
        },
        mainGrid: {
            marginTop: theme.spacing(3),
        },
    }),
);

const projects = ["Iced IoT", "Rentwiser", "The Calgary Project"];

export function MainContent() {
    const classes = useStyles();

    const [md, setMd] = React.useState();

    React.useEffect(() => {
        fetch(
            "https://ggantstorage.blob.core.windows.net/markdown/samplepost.md",
        )
            .then((response) => {
                return response.text();
            })
            .then((text) => setMd(text));
    }, []);

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
                                m0ss
                            </Typography>
                            <Divider />
                            <MarkdownComponent className={classes.markdown}>
                                {md}
                            </MarkdownComponent>
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
                            <Box className={classes.sidebarSection}>
                            <Typography
                                variant="h6"
                                gutterBottom={true}
                            >
                                Projects
                            </Typography>
                            {projects.map((project) => (
                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    key={project}
                                >
                                    {project}
                                </Link>
                            ))}

                            </Box>

                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}
