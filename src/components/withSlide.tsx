import React, { ComponentType } from "react";

import { Slide } from "@material-ui/core";

export const withSlide = <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <div>
            <Slide direction="up" in={true}>
                <div>
                    <WrappedComponent {...(props as T)} />
                </div>
            </Slide>
        </div>
    );
};
