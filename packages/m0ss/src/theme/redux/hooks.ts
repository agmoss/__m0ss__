import { useSelector } from "react-redux";

import { RootState } from "../../redux/reducer";

export const useThemeSelection = () => {
    return useSelector((state: RootState) => state.theme);
};
