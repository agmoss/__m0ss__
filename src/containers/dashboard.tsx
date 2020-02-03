import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DashboardPresentation from "../pages/dashboard";
import { withFade } from "../components/withFade";

const Dashboard = () => {
    const history = useHistory();

    const exitTimeout = 1000;
    const [enterTimeout, setEnterTimeout] = useState(1000);

    useEffect(() => {
        if (history.action !== "POP") {
            setEnterTimeout(0);
        }
    }, [history.action]);

    return React.createElement(
        withFade(enterTimeout, exitTimeout)(DashboardPresentation)
    );
};

export default Dashboard;
