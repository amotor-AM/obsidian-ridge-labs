import React, { useEffect, useRef } from 'react';

/** Small, cached noise tiles: the compositor handles the full-viewport texture. */
export default function CanvasGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !ctx) return;
    const tile = document.createElement('canvas');
    tile.width = tile.height = 160;
    const tileContext = tile.getContext('2d');
    if (!tileContext) return;
    const pixels = tileContext.createImageData(160, 160);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const value = Math.random() * 255;
      pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = value;
      pixels.data[i + 3] = 255;
    }
    tileContext.putImageData(pixels, 0, 0);
    const draw = () => {
      canvas.width = Math.ceil(innerWidth / 2);
      canvas.height = Math.ceil(innerHeight / 2);
      const pattern = ctx.createPattern(tile, 'repeat');
      if (pattern) { ctx.fillStyle = pattern; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    };
    draw();
    window.addEventListener('resize', draw, { passive: true });
    return () => window.removeEventListener('resize', draw);
  }, []);
  return <canvas ref={canvasRef} className="vx-grain" aria-hidden="true" />;
}
