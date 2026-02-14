"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const words = [
        "Skypiea", "Jets®", "is", "a", "private", "aviation", "operator",
        "with", "over", "5,000", "missions", "completed", "across",
        "150+", "countries.", "From", "international", "executives",
        "to", "global", "industries,", "our", "clients", "trust", "us",
        "to", "deliver", "on", "time,", "every", "time."
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center bg-background py-32 px-8">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Mission Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-6">Our Mission</h2>
                    <div className="w-24 h-1 bg-white mx-auto" />
                </motion.div>

                {/* Animated Text */}
                <motion.p
                    ref={textRef}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-3xl md:text-5xl font-light leading-relaxed text-center"
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className="inline-block mr-3 md:mr-4"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32"
                >
                    <div className="text-center">
                        <div className="text-6xl font-bold text-glow mb-4">5K+</div>
                        <div className="text-xl text-secondary">Flights Arranged</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-bold text-glow mb-4">150+</div>
                        <div className="text-xl text-secondary">Countries Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl font-bold text-glow mb-4">24/7</div>
                        <div className="text-xl text-secondary">Concierge Service</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
