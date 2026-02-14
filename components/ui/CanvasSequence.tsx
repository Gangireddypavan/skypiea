"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { drawImageCover } from "@/lib/utils";

interface CanvasSequenceProps {
    images: HTMLImageElement[];
    scrollProgress: MotionValue<number>;
    className?: string;
}

export default function CanvasSequence({
    images,
    scrollProgress,
    className = "",
}: CanvasSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to window size
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        // Subscribe to scroll progress changes
        const unsubscribe = scrollProgress.on("change", (latest) => {
            const frameIndex = Math.min(
                Math.floor(latest * images.length),
                images.length - 1
            );

            const img = images[frameIndex];
            if (img && img.complete) {
                drawImageCover(ctx, img, canvas.width, canvas.height);
            }
        });

        // Initial render
        if (images[0] && images[0].complete) {
            drawImageCover(ctx, images[0], canvas.width, canvas.height);
        }

        return () => {
            unsubscribe();
            window.removeEventListener("resize", updateCanvasSize);
        };
    }, [images, scrollProgress]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute top-0 left-0 w-full h-full ${className}`}
        />
    );
}
