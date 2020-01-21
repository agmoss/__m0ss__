import React, { ComponentType } from "react";

import { Slide } from "@material-ui/core";

export const withSlide = (timeout: number) => <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <div>
            <Slide
                direction="up"
                in={true}
                timeout={{ enter: timeout, exit: timeout }}
            >
                <div>
                    <WrappedComponent {...(props as T)} />
                </div>
            </Slide>
        </div>
    );
};
