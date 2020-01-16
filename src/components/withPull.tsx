import React, { ComponentType } from "react";
import { clamp } from "lodash-es";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    cursorInteract: {
        cursor: "pointer",
        // cursor: "-webkit-grab",
        "&:hover": {
            cursor: "-webkit-grabbing",
        },
        "&:active": {
            overflow: "hidden",
            zIndex: 10000,
        },
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
    },
}));

export const withPull = <P extends object>(
    WrappedComponent: ComponentType<P>
): React.FC<P> => ({ ...props }) => {
    const classes = useStyles();

    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
    const bind = useGesture(({ down, delta, velocity }) => {
        velocity = clamp(velocity, 1, 8);
        set({
            xy: down ? delta : [0, 0],
            config: { mass: velocity, tension: 500 * velocity, friction: 50 },
        });
    });

    const translate = (x: number, y: number) =>
        `translate3d(${x}px, ${y}px, 0)`;

    return (
        <animated.div
            className={classes.cursorInteract}
            {...bind()}
            style={{ transform: xy.interpolate(translate as any) }}
        >
            <WrappedComponent {...(props as P)} />
        </animated.div>
    );
};
