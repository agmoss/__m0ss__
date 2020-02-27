import React, { useRef, useEffect } from "react";

interface IProps {
    width: number;
    height: number;
}

/**
 * React Typescript Rotating Canvas Circles.
 *
 * @param {width} [optionalArg] - Height of the canvas div
 * @param {height} [optionalArg] - Width of the canvas div
 * @return {canvas} Styled HTML5 canvas div
 */
const Circles = ({ width, height }: IProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let cx: number;
    let cy: number;
    let radius: number;
    let angleSpeed: number;
    const totalCircles = 8;

    const setDimensions = () => {
        if (!canvasRef.current) {
            return;
        }

        const c: HTMLCanvasElement = canvasRef.current;
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        cx = c.width / 2;
        cy = c.height / 2;
        radius = 0;
        angleSpeed = 0;
    };

    /**
     * RGB Color fade algorithm
     */
    const rgbAlgo = () => {
        if (!canvasRef.current) {
            return;
        }

        const c: HTMLCanvasElement = canvasRef.current;
        const ctx = c.getContext("2d");

        let r = 255;
        let g = 0;
        let b = 0;

        if (ctx) {
            setInterval(() => {
                if (r > 0 && b === 0) {
                    r--;
                    g++;
                }
                if (g > 0 && r === 0) {
                    g--;
                    b++;
                }
                if (b > 0 && g === 0) {
                    r++;
                    b--;
                }

                const color = `rgb(${r},${g},${b})`;

                // Change the canvas circle color
                ctx.strokeStyle = color;
            }, 50);
        }
    };

    const draw = () => {
        if (!canvasRef.current) {
            return;
        }

        const canvas: HTMLCanvasElement = canvasRef.current;

        const ctx = canvas.getContext("2d");

        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < totalCircles; i++) {
                const angle = (i * angleSpeed * Math.PI) / totalCircles;
                const x = cx + Math.cos(angle) * radius;
                const y = cy + Math.sin(angle) * radius;

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke();
            }

            const minSide = Math.min(window.innerHeight, window.innerWidth);

            // Control the circle growth
            while (radius < minSide / 4) {
                radius = minSide / 4;
                angleSpeed += 10;
            }

            angleSpeed += 0.0005;
        }
    };

    useEffect(() => {
        rgbAlgo();
        setDimensions();
        setInterval(draw, 15);
    });

    window.addEventListener("load", rgbAlgo);
    window.addEventListener("load", setDimensions);
    window.addEventListener("resize", setDimensions);

    // style
    const css = `.canvasCircles {
        background-color:black;
        overflow:hidden;
    }`;

    const element = document.querySelector("body");
    if (element) {
        element.classList.add("canvasCircles");
    }

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.getElementsByTagName("body")[0].appendChild(style);

    // Remove the style
    useEffect(
        () => () => {
            if (element) {
                element.classList.remove("canvasCircles");
            }
        },
        [element]
    );

    return <canvas ref={canvasRef} height={height} width={width} />;
};

Circles.defaultProps = {
    height: window.innerHeight,
    width: window.innerWidth,
};

export default Circles;
