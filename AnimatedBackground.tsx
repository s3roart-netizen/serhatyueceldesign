
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0, t = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const COLORS = [
      [142, 124, 255], [93, 209, 255], [89, 255, 161], [255, 230, 107], [255, 138, 91], [255, 91, 209]
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.008;
      let n = 6, r = Math.min(w, h) * 0.4;
      
      for (let i = 0; i < n; i++) {
        let ang = t * 1.2 + i * 2.1;
        let x = w / 2 + Math.sin(ang + Math.cos(t + i)) * r * 0.7 + Math.sin(t * 0.7 + i) * r * 0.5;
        let y = h / 2 + Math.cos(ang + Math.sin(t + i * 0.6)) * r * 0.7 + Math.cos(t * 0.8 + i) * r * 0.5;
        
        let grad = ctx.createRadialGradient(x, y, 0.01 * r, x, y, r * lerp(0.72, 1.28, Math.abs(Math.sin(t + i))));
        let base = COLORS[i % COLORS.length];
        
        grad.addColorStop(0, `rgba(${base[0]}, ${base[1]}, ${base[2]}, 0.92)`);
        grad.addColorStop(0.7, `rgba(${base[0]}, ${base[1]}, ${base[2]}, 0.13)`);
        grad.addColorStop(1, `rgba(${base[0]}, ${base[1]}, ${base[2]}, 0)`);
        
        ctx.beginPath();
        ctx.arc(x, y, r * lerp(0.68, 1.08, Math.abs(Math.sin(t + i * 0.7))), 0, 2 * Math.PI);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full filter blur-[40px] opacity-40 brightness-125 saturate-150" />;
};

export default AnimatedBackground;
