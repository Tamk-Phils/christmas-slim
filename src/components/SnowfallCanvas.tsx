import React, { useEffect, useRef } from 'react';
import { useGlow } from '../context/GlowContext';

export const SnowfallCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isSnowing } = useGlow();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const flakeCount = Math.floor(window.innerWidth / 16);
    const flakes = Array.from({ length: flakeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      density: Math.random() * 1.5 + 0.5,
      wind: Math.random() * 0.8 - 0.4,
      opacity: Math.random() * 0.7 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isSnowing) {
        flakes.forEach(f => {
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2, true);
          ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
          ctx.fill();

          f.y += Math.cos(f.density) + 1 + f.radius / 2;
          f.x += Math.sin(f.density) + f.wind;

          if (f.y > height) {
            f.y = -5;
            f.x = Math.random() * width;
          }
          if (f.x > width) f.x = 0;
          if (f.x < 0) f.x = width;
        });
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isSnowing]);

  return (
    <canvas
      ref={canvasRef}
      id="snowfall-canvas"
      className={!isSnowing ? 'is-paused' : ''}
      aria-hidden="true"
    />
  );
};
