import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

import { RootState } from "../../redux/reducer";

const cookies = new Cookies();

export const useThemeSelection = () => {
    const cookieTheme = cookies.get("theme");
    const cookieColor = cookies.get("color");

    let stateTheme = useSelector((state: RootState) => state.theme);

    if ((cookieTheme && cookieTheme === "dark") || cookieTheme === "light") {
        stateTheme = { ...stateTheme, theme: cookieTheme };
    }

    if (cookieColor) {
        stateTheme = { ...stateTheme, color: cookieColor };
    }

    return stateTheme;
};
