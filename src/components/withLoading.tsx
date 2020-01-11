import React from "react";
import { Grid } from "@material-ui/core";
import ReactLoading from "react-loading";

interface IWithLoadingProps {
    loading: boolean;
}

export const withLoading = <P extends object>(
    Component: React.ComponentType<P>
): React.FC<P & IWithLoadingProps> => ({
    loading,
    ...props
}: IWithLoadingProps) =>
    loading ? (
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
        <Component {...(props as P)} />
    );
