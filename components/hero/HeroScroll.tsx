"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import CanvasSequence from "@/components/ui/CanvasSequence";

export default function HeroScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { images, isLoading, progress } = useImagePreloader("/sequence-1/", 120);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Map scroll progress to frame index (0 to 1)
    const frameProgress = useTransform(scrollYProgress, [0, 1], [0, 0.99]);

    // Text animations based on scroll
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

    const subtitleOpacity = useTransform(
        scrollYProgress,
        [0.15, 0.25, 0.35, 0.5],
        [0, 1, 1, 0]
    );
    const subtitleScale = useTransform(
        scrollYProgress,
        [0.15, 0.35],
        [0.8, 1.1]
    );

    const missionOpacity = useTransform(
        scrollYProgress,
        [0.7, 0.85, 0.95],
        [0, 1, 1]
    );
    const missionY = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

    // Debug: Log loading state
    if (!isLoading && images.length === 0) {
        console.error("HeroScroll: Images failed to load");
    }

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            {/* Canvas Background - Always render */}
            <div className="sticky top-0 h-screen w-full">
                {images.length > 0 && !isLoading ? (
                    <CanvasSequence
                        images={images}
                        scrollProgress={frameProgress}
                        className="z-0"
                    />
                ) : (
                    <div className="absolute inset-0 bg-background z-0 flex items-center justify-center">
                        {isLoading && (
                            <div className="text-center">
                                <div className="text-6xl font-bold mb-8 text-glow">SKYPIEA JETS</div>
                                <div className="text-2xl text-secondary">Loading... {progress}%</div>
                            </div>
                        )}
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10" />

                {/* Text Overlays */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    {/* "We are movement" - Initial text */}
                    <motion.div
                        style={{ opacity: titleOpacity, y: titleY }}
                        className="absolute text-center drop-shadow-2xl"
                    >
                        <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter text-glow-premium leading-none">
                            WE ARE MOVEMENT
                        </h1>
                    </motion.div>

                    {/* "Skypiea Jets" - Second reveal */}
                    <motion.div
                        style={{ opacity: subtitleOpacity, scale: subtitleScale }}
                        className="absolute text-center flex flex-col items-center"
                    >
                        <h2 className="text-7xl md:text-[14rem] font-black tracking-tighter leading-none text-glow-premium">
                            SKYPIEA JETS
                        </h2>
                        <div className="w-24 h-1 bg-secondary mt-4 md:mt-8 mb-4 md:mb-8" />
                        <p className="text-lg md:text-3xl font-light tracking-[1em] text-secondary uppercase pl-[1em]">
                            Luxury Private Aviation
                        </p>
                    </motion.div>

                    {/* Mission Statement - Final reveal */}
                    <motion.div
                        style={{ opacity: missionOpacity, y: missionY }}
                        className="absolute text-center max-w-5xl px-8"
                    >
                        <p className="text-3xl md:text-6xl font-extralight leading-tight tracking-tight">
                            A <span className="font-bold italic">sanctuary</span> in the sky.
                            <br />
                            <span className="text-secondary/80 font-medium">
                                Where luxury meets precision.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
