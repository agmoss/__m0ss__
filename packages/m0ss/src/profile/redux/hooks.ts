import { useSelector } from "react-redux";

import { RootState } from "../../redux/reducer";

export const useProfile = () => {
    return useSelector((state: RootState) => state.profile.profile);
};
