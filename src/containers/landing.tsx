import React, { useEffect } from "react";

import { withLoading } from "../components/withLoading";
import { Landing as LandingPage } from "../pages/landing";
import { Loading as LoadingPage } from "../pages/loading";

interface ILanding {
    text: string;
    imgs: Blob[];
    fetchData: () => void;
    loading: boolean;
    checked: boolean;
    toggleTheme: Function;
}

const LandingContainer = ({
    text,
    imgs,
    fetchData,
    loading,
    checked,
    toggleTheme,
}: ILanding) => {
    useEffect(() => {
        if (text.length < 10 || imgs.length < 1) {
            fetchData();
        }
    });

    const LoadingLandingPage = withLoading(LoadingPage)(LandingPage);

    return React.createElement(LoadingLandingPage, {
        img: imgs,
        md: text,
        loading,
        checked,
        toggleTheme,
    });
};

export default LandingContainer;
