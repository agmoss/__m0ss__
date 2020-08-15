import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Link,
    createStyles,
    makeStyles,
    Theme,
    Slide,
    Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import { IconButton } from "three-ui";
import { IArticleTarget } from "blog-types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "relative",
            backgroundColor: theme.palette.primary.main,
        },
        title: {
            flex: 1,
        },
    })
);

interface IArticleCard {
    article: IArticleTarget;
}

const ArticleCard = ({ article }: IArticleCard) => {
    const history = useHistory();

    return (
        <>
            <Divider />
            <ListItem>
                <ListItemText
                    primary={article.article.title}
                    secondary={article.article.description}
                />

                {article.article.markdown.content ? (
                    <Button
                        onClick={() =>
                            history.push(`article/${article.article.id}`)
                        }
                    >
                        About
                    </Button>
                ) : null}
                {article.article.internalLink ? (
                    <Button
                        onClick={() =>
                            history.push(`/${article.article.internalLink}`)
                        }
                    >
                        Live
                    </Button>
                ) : null}
                {article.article.externalLink ? (
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={article.article.externalLink}
                        style={{ textDecoration: "none" }}
                        color="inherit"
                    >
                        <Button> External</Button>
                    </Link>
                ) : null}
            </ListItem>
            <Divider />
        </>
    );
};

interface IDashboard {
    articles: IArticleTarget[];
}

const Dashboard = ({ articles }: IDashboard) => {
    const classes = useStyles();
    const history = useHistory();

    const [checked, setChecked] = React.useState(true);

    const exitTimeout = 300;
    const [enterTimeout, setEnterTimeout] = useState(400);

    const handleChange = () => {
        setChecked((prev) => !prev);
        setTimeout(() => {
            history.push("/");
        }, exitTimeout);
    };

    useEffect(() => {
        if (history.action === "POP") {
            setEnterTimeout(0);
        }
    }, [history.action]);

    return (
        <>
            <CssBaseline />
            <div>
                <Slide
                    direction="up"
                    in={checked}
                    timeout={{ enter: enterTimeout, exit: exitTimeout }}
                >
                    <div>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <Typography
                                    variant="h4"
                                    className={classes.title}
                                >
                                    Content
                                </Typography>
                                <IconButton
                                    edge="start"
                                    color="secondary"
                                    onClick={() => {
                                        handleChange();
                                    }}
                                    aria-label="close"
                                >
                                    <Close />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List>
                            {articles.map((a) => {
                                return (
                                    <ArticleCard
                                        key={a.article.id}
                                        article={a}
                                    />
                                );
                            })}
                        </List>
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default Dashboard;
