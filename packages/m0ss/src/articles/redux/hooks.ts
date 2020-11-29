import { useSelector } from "react-redux";

import { RootState } from "../../redux/reducer";

export const useArticles = () => {
    return useSelector((state: RootState) => state.art.articles);
};

export const useArticle = () => {
    return useSelector((state: RootState) => state.art.art);
};
