import React from "react";
import { useDispatch } from "react-redux";
import { compose } from "redux";

import { Error, Loading } from "../../pages/placeholders";
import { Landing as LandingPage } from "../pages/landing";
import { useProfile } from "../redux/hooks";
import { actions as profileActions } from "../redux/model";

const LandingContainer = () => {
    const dispatch = useDispatch();

    const fetchProfile = compose(dispatch, profileActions.fetchProfile);

    const prof = useProfile();

    if (prof === "Init") {
        fetchProfile();
    }

    if (prof === "Fail") {
        return <Error />;
    }

    if (prof === "Init" || prof === "Pend") {
        return <Loading />;
    }

    return <LandingPage profile={prof} />;
};

export default LandingContainer;
