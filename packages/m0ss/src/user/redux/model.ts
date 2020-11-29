import { ActionType, action } from "typesafe-actions";
import Cookies from "universal-cookie";

type RD<T> = "Init" | "Pend" | "Fail" | T;

interface IModel {
    token: RD<string>;
}

const initialState: IModel = {
    token: "Init",
};

export interface IUserLogin {
    password: string;
    identifier: string;
}

export const actions = {
    userLogin: (c: IUserLogin) => action("USER_LOGIN", c),
    receiveUserLogin: (token: string) => action("RECEIVE_USER_LOGIN", token),
    userLoginError: (e: string) => action("USER_LOGIN_ERROR", e),
};

export type UserActionType = ActionType<typeof actions>;

const cookies = new Cookies();

export const reducer = (
    state: IModel = initialState,
    action: UserActionType
): IModel => {
    switch (action.type) {
        case "USER_LOGIN": {
            return {
                ...state,
                token: "Init",
            };
        }
        case "RECEIVE_USER_LOGIN":
            cookies.set("ahhhh", action.payload, {
                path: "/",
                sameSite: "strict",
            });
            return {
                ...state,
                token: action.payload,
            };
        case "USER_LOGIN_ERROR":
            return {
                ...state,
                token: "Fail",
            };

        default:
            return state;
    }
};
