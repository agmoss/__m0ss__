import OffCircle from "offcircle";
import React, { useEffect, useRef } from "react";

const OffCircleWeb = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const c: HTMLCanvasElement = canvasRef.current;
        const ctx = c.getContext("2d");
        if (ctx) {
            OffCircle(ctx, 500);
        }
    });
    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
};

export default OffCircleWeb;
