import { IProfile } from "blog-types";
import { all, put, takeLatest } from "redux-saga/effects";
import { createAsyncAction } from "typesafe-actions";

const fetchProfileAsync = createAsyncAction(
    "FETCH_PROFILE",
    "RECEIVE_PROFILE",
    "FETCH_PROFILE_ERROR"
)<string, IProfile, Error>();

function* fetchProfile(action: ReturnType<typeof fetchProfileAsync.request>) {
    try {
        const text: string = yield fetch(
            "https://honeyyy.s3.us-west-2.amazonaws.com/landing_d2bb8f5328.markdown"
        ).then((response) => response.text());

        const profile: IProfile = {
            profile: {
                firstName: "Andrew",
                lastName: "Moss",
                profilePhoto: {
                    urlPrimary:
                        "https://honeyyy.s3.us-west-2.amazonaws.com/DSC_7024_ac8e51a970.jpeg",
                    urlSecondary: "https://source.unsplash.com/random/600x600",
                },
                email: "",
                rant: {
                    url: "",
                    content: text,
                },
                bio:
                    "Hi, I'm a full stack developer with a focus on web applications, infrastructure, data visualization, and creative programming. I am currently hard at work on the next big thing. You'll be hearing about it soon...",
                color: "red",
            },
        };

        yield put(fetchProfileAsync.success(profile));
    } catch (e) {
        yield put(fetchProfileAsync.failure(e.message));
    }
}

function* fetchProfileWatcher() {
    yield takeLatest("FETCH_PROFILE", fetchProfile);
}

export default function* rootSaga() {
    yield all([fetchProfileWatcher()]);
}
