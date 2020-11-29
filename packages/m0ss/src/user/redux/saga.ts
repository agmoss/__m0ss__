import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { createAsyncAction } from "typesafe-actions";

import { IUserLogin } from "./model";

const getEndpoint = () => {
    let ENDPOINT = "";
    if (process.env.NODE_ENV === "development") {
        ENDPOINT = "http://localhost:1337/auth/local";
    } else if (process.env.NODE_ENV === "production") {
        ENDPOINT = "https://honeyy.azurewebsites.net/auth/local";
    }
    return ENDPOINT;
};

const userLoginAsync = createAsyncAction(
    "USER_LOGIN",
    "RECEIVE_USER_LOGIN",
    "USER_LOGIN_ERROR"
)<IUserLogin, string, Error>();

function* userLogin(action: ReturnType<typeof userLoginAsync.request>) {
    try {
        const response = yield axios.post(getEndpoint(), {
            identifier: action.payload.identifier,
            password: action.payload.password,
        });
        yield put(userLoginAsync.success(response.data.jwt));
    } catch (e) {
        yield put(userLoginAsync.failure(e.message));
    }
}

function* userLoginWatcher() {
    yield takeLatest("USER_LOGIN", userLogin);
}

export default function* rootSaga() {
    yield all([userLoginWatcher()]);
}
