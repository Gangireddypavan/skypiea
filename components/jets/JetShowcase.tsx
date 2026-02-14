"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import CanvasSequence from "@/components/ui/CanvasSequence";

interface Spec {
    label: string;
    value: string;
    scrollStart: number;
    scrollEnd: number;
}

export default function JetShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { images, isLoading } = useImagePreloader("/sequence-2/", 120);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const frameProgress = useTransform(scrollYProgress, [0, 1], [0, 0.99]);

    // Technical specifications with their reveal timings
    const specs: Spec[] = [
        {
            label: "Maximum Speed",
            value: "0.925 Mach",
            scrollStart: 0.2,
            scrollEnd: 0.35,
        },
        {
            label: "Range",
            value: "7,500 nm",
            scrollStart: 0.45,
            scrollEnd: 0.6,
        },
        {
            label: "Maximum Altitude",
            value: "51,000 ft",
            scrollStart: 0.7,
            scrollEnd: 0.85,
        },
    ];

    // Create motion values for each spec individually (required by Rules of Hooks)
    const spec0Opacity = useTransform(
        scrollYProgress,
        [0.2, 0.25, 0.35, 0.45],
        [0, 1, 1, 0]
    );
    const spec0Scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

    const spec1Opacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.6, 0.7],
        [0, 1, 1, 0]
    );
    const spec1Scale = useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1]);

    const spec2Opacity = useTransform(
        scrollYProgress,
        [0.7, 0.75, 0.85, 0.95],
        [0, 1, 1, 0]
    );
    const spec2Scale = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);

    const specMotionValues = [
        { opacity: spec0Opacity, scale: spec0Scale },
        { opacity: spec1Opacity, scale: spec1Scale },
        { opacity: spec2Opacity, scale: spec2Scale },
    ];

    const bottomTextOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    // Debug: Log loading state
    if (!isLoading && images.length === 0) {
        console.error("JetShowcase: Images failed to load");
    }

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen w-full">
                {/* Canvas Background */}
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
                                <div className="text-4xl font-bold text-secondary">Loading Jet Showcase...</div>
                            </div>
                        )}
                    </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-20 left-0 right-0 z-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">
                        Gulfstream G650ER
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary">
                        The pinnacle of private aviation
                    </p>
                </motion.div>

                {/* Technical Specifications */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 px-8 max-w-6xl w-full">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                style={{
                                    opacity: specMotionValues[index].opacity,
                                    scale: specMotionValues[index].scale,
                                }}
                                className="glass p-8 md:p-12 rounded-2xl text-center"
                            >
                                <div className="text-5xl md:text-7xl font-bold mb-4 text-glow">
                                    {spec.value}
                                </div>
                                <div className="text-lg md:text-xl text-secondary uppercase tracking-wider">
                                    {spec.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Description */}
                <motion.div
                    style={{
                        opacity: bottomTextOpacity,
                    }}
                    className="absolute bottom-20 left-0 right-0 z-20 text-center px-8"
                >
                    <p className="text-2xl md:text-4xl font-light max-w-4xl mx-auto">
                        The speed of sound.
                        <br />
                        <span className="text-secondary">The comfort of silence.</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
