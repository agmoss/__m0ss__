import React from "react";
import Circles from "react-circles";

import { withFade } from "three-ui";

import { withHelmet } from "../components/withHelmet";
import withPage from "../components/withPage";
import Dashboard from "../containers/dashboard";
import Landing from "../containers/landing";
import MediaContainer from "../containers/media";
import OffCircleWeb from "./offcircleweb";
import ProjectReadme from "./ProjectReadme";
import Signin from "./signin";

const ReactCirclesDemo = () => {
    return (
        <div
            style={{
                height: window.innerHeight,
                width: window.innerWidth,
                maxWidth: "100%",
                maxHeight: "100%",
                overflowX: "hidden",
                overflowY: "hidden",
                backgroundColor: "black",
            }}
        >
            <Circles numCircles={60} speed="slow" />
        </div>
    );
};

export const WrappedProjectReadme = withHelmet({
    title: "README - Andrew Moss",
    meta: { name: "m0ss site readme", content: "Andrew Moss Readme" },
})(withFade(1000, 1000)(withPage(ProjectReadme)));

export const WrappedDashboard = withHelmet({
    title: "Dashboard - Andrew Moss",
    meta: { name: "Dashboard", content: "Andrew Moss articles" },
})(Dashboard);

export const WrappedOffCircleWeb = withHelmet({
    title: "offcircle - Andrew Moss",
    meta: { name: "offcircle README", content: "Andrew Moss offcircle" },
})(OffCircleWeb);

export const WrappedReactCirclesDemo = withHelmet({
    title: "Andrew Moss - React Circles",
    meta: {
        name: "React Circles Demo",
        content: "Andrew Moss React Circles",
    },
})(ReactCirclesDemo);

export const WrappedSignin = withHelmet({
    title: "Signin - Andrew Moss",
    meta: {
        name: "Signin page",
        content: "Signin",
    },
})(Signin);

export const WrappedMedia = withHelmet({
    title: "Media - Andrew Moss",
    meta: {
        name: "Media Share Location",
        content: "Andrew Moss Media",
    },
})(MediaContainer);
