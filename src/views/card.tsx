import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

interface IProps {
    primary: Blob;
    secondary: Blob;
}

export const Card = ({ primary, secondary }: IProps) => {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <div onClick={() => set(state => !state)}>
            <a.div
                className="c back"
                style={{
                    opacity: opacity.interpolate(o => {
                        const on = o as number;
                        return 1 - on;
                    }),
                    transform,
                    backgroundImage: `url(${URL.createObjectURL(primary)})`,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    willChange: "transform, opacity",
                    cursor: "pointer",
                    backgroundSize: "cover",
                }}
            />
            <a.div
                className="c front"
                style={{
                    opacity,
                    transform: transform.interpolate(
                        t => `${t} rotateX(180deg)`
                    ),
                    backgroundImage: `url(${URL.createObjectURL(secondary)})`,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    willChange: "transform, opacity",
                    cursor: "pointer",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
};
