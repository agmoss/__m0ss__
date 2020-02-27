import React, { useEffect } from "react";

import { withLoading } from "../components/withLoading";
import { withFade } from "../components/withFade";
import { Landing as LandingPage } from "../pages/landing";
import { Loading as LoadingPage } from "../pages/loading";

interface ILanding {
    text: string;
    imgs: any;
    fetchData: any;
    loading: boolean;
}

const LandingContainer = ({
    text,
    imgs,
    fetchData,
    loading,
}: ILanding) => {
    useEffect(() => {
        if (text.length < 10 || imgs.length < 1) {
            fetchData();
        }
    });

    const LoadingLandingPage = withLoading(LoadingPage)(
        withFade(1000, 1000)(LandingPage)
    );

    return React.createElement(LoadingLandingPage, {
        img: imgs,
        md: text,
        loading,
    });
};

export default LandingContainer;
