import * as React from 'react';

interface IReactCirclesProps {
  numCircles: number;
  speed: 'slow' | 'fast';
}

/**
 * React Typescript Rotating Canvas Circles
 *
 */
const Circles: React.FC<IReactCirclesProps> = ({
  numCircles,
  speed,
}: IReactCirclesProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let cx: number;
  let cy: number;
  let radius: number;
  let angleSpeed: number;
  const totalCircles = numCircles;

  /**
   * Responsive dimensions based on parent element
   *
   * Operates on the HTMLCanvasElement api
   */
  const setDimensions = () => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const parent = canvas.parentElement;

    if (!parent) {
      return;
    }

    const styles = getComputedStyle(parent);
    const w = parseInt(styles.getPropertyValue('width'), 10);
    const h = parseInt(styles.getPropertyValue('height'), 10);

    const maxW = window.innerWidth;
    const maxH = window.innerHeight;

    canvas.width = Math.min(w, maxW);
    canvas.height = Math.min(h, maxH);

    cx = canvas.width / 2;
    cy = canvas.height / 2;

    radius = 0;
    angleSpeed = 0;
  };

  /**
   * RGB Color fade algorithm
   *
   * Operates on the CanvasRenderingContext2D strokeStyle api
   */
  const rgbAlgorithm = () => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');

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

  /**
   * Circle Rendering function
   *
   * Operates on the CanvasRenderingContext2D api
   */
  const draw = () => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');

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

      const minSide = Math.min(canvas.height, canvas.width);

      // Control the circle growth
      while (radius < minSide / 4) {
        radius = minSide / 4;
        angleSpeed += 10;
      }
      angleSpeed += speed === 'fast' ? 0.005 : 0.0005;
    }
  };

  React.useEffect(() => {
    rgbAlgorithm();
    setDimensions();
    setInterval(draw, 15);
  });

  window.addEventListener('load', rgbAlgorithm);
  window.addEventListener('load', setDimensions);
  window.addEventListener('resize', setDimensions);

  return <canvas id="react-circles" ref={canvasRef} />;
};

export default Circles;
