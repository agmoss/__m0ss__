import React, { Component, ComponentClass, ComponentType } from "react";

import { Fade } from "@material-ui/core";

export default function withFade<P extends object>(
    WrappedComponent: ComponentType<P>
): ComponentClass<P> {
    return class extends Component<P> {
        public render() {
            return (
                <div>
                    <Fade in={true} timeout={1000}>
                        <div>
                            <WrappedComponent {...this.props} />
                        </div>
                    </Fade>
                </div>
            );
        }
    };
}
