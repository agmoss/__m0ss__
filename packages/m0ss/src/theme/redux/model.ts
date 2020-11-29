import { ActionType, action } from "typesafe-actions";

type __Theme__ = "dark" | "light";

interface IModel {
    theme: __Theme__;
    color: string;
}

const initialState: IModel = {
    theme: "dark",
    color: "#e91e63",
};

export const actions = {
    setTheme: (theme: __Theme__) => action("SET_THEME", { theme }),
    setColor: (color: string) => action("SET_COLOR", { color }),
};

type ThemeActionType = ActionType<typeof actions>;

export const reducer = (
    state: IModel = initialState,
    action: ThemeActionType
): IModel => {
    switch (action.type) {
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload.theme,
            };
        case "SET_COLOR":
            return {
                ...state,
                color: action.payload.color,
            };
        default:
            return state;
    }
};
