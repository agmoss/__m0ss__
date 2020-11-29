import { useSelector } from "react-redux";

import { RootState } from "../../redux/reducer";

export const useToken = () => {
    return useSelector((state: RootState) => state.user.token);
};
