import { IProfile } from "blog-types";
import { ActionType, action } from "typesafe-actions";

type RD<T> = "Init" | "Pend" | "Fail" | T;

interface IModel {
    profile: RD<IProfile>;
}

const initialState: IModel = {
    profile: "Init",
};

export const actions = {
    fetchProfile: () => action("FETCH_PROFILE"),
    receiveProfile: (v: IProfile) => action("RECEIVE_PROFILE", v),
    fetchProfileError: (e: string) => action("FETCH_PROFILE_ERROR", { e }),
};

export type ProfileActionType = ActionType<typeof actions>;

export const reducer = (
    state: IModel = initialState,
    action: ProfileActionType
): IModel => {
    switch (action.type) {
        case "FETCH_PROFILE":
            return {
                ...state,
                profile: "Pend",
            };
        case "RECEIVE_PROFILE":
            return {
                ...state,
                profile: action.payload,
            };
        case "FETCH_PROFILE_ERROR": {
            return {
                ...state,
                profile: "Fail",
            };
        }
        default:
            return state;
    }
};
