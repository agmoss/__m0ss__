import React, { ComponentType } from "react";

import { Fade } from "@material-ui/core";

export const withFade = <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <div>
            <Fade in={true} timeout={{ enter: 1000, exit: 1000 }}>
                <div>
                    <WrappedComponent {...(props as T)} />
                </div>
            </Fade>
        </div>
    );
};
