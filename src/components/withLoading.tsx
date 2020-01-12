import React from "react";
import {
    Grid,
    makeStyles,
    Theme,
    createStyles,
    Container,
    LinearProgress,
} from "@material-ui/core";

interface IWithLoadingProps {
    loading: boolean;
}

export const withLoading = <P extends object>(
    Component: React.ComponentType<P>
): React.FC<P & IWithLoadingProps> => ({
    loading,
    ...props
}: IWithLoadingProps) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            },
            prog: {
                width: "100%",
            },
        })
    );

    const classes = useStyles();

    return loading ? (
        <Container>
            <Grid
                className={classes.root}
                container={true}
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item={true} spacing={0} className={classes.prog}>
                    <LinearProgress color="secondary" />
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Component {...(props as P)} />
    );
};
