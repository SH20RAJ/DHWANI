"use client";

import { useEffect, useRef } from 'react';

export const AudioVisualizer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const bars = 100;
        const barWidth = 4;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 100;
        };

        window.addEventListener('resize', resize);
        resize();

        const render = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gap = (canvas.width - (bars * barWidth)) / (bars - 1);
            const center = canvas.height / 2;

            for (let i = 0; i < bars; i++) {
                // Generate a smooth noise-like value based on time and index
                const time = Date.now() * 0.002;
                const indexOffset = i * 0.1;
                const noise = Math.sin(time + indexOffset) * Math.cos(time * 0.5 + indexOffset * 2);

                // Map noise to height (0 to 1) with some randomness
                let height = Math.abs(noise * 40) + Math.random() * 10;

                // Taper edges
                const distanceFromCenter = Math.abs(i - bars / 2);
                const taper = Math.max(0, 1 - distanceFromCenter / (bars / 2.5));
                height *= taper;

                const x = i * (barWidth + gap);

                ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + (height / 60) * 0.4})`;

                // Draw symmetric bars from center
                ctx.fillRect(x, center - height, barWidth, height * 2);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-[100px] pointer-events-none opacity-50"
        />
    );
};
