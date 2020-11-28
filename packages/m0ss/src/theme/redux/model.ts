import { ActionType, action } from "typesafe-actions";

type __Theme__ = "dark" | "light";

interface IModel {
    theme: __Theme__;
}

const initialState: IModel = {
    theme: "dark",
};

export const actions = {
    setTheme: (theme: __Theme__) => action("SET_THEME", { theme }),
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
        default:
            return state;
    }
};
