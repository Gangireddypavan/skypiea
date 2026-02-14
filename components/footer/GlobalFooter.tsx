"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const cities = [
    "Dubai", "New York", "London", "Tokyo", "Paris", "Singapore",
    "Hong Kong", "Los Angeles", "Miami", "Geneva", "Monaco", "Sydney"
];

export default function GlobalFooter() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentCityIndex, setCurrentCityIndex] = useState(0);

    // Rotate cities every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCityIndex((prev) => (prev + 1) % cities.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/globe-loop.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-8">
                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="glass p-12 md:p-16 rounded-3xl max-w-4xl w-full text-center mb-16"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-8 text-glow">
                        Global Reach
                    </h2>
                    <p className="text-2xl md:text-3xl text-secondary mb-12">
                        Personal Touch
                    </p>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">5,000+</div>
                            <div className="text-lg text-secondary">
                                Flights Successfully Arranged
                            </div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">150+</div>
                            <div className="text-lg text-secondary">Countries Worldwide</div>
                        </div>
                    </div>

                    {/* City Ticker */}
                    <div className="mb-12">
                        <p className="text-sm text-secondary mb-4 uppercase tracking-widest">
                            Currently Serving
                        </p>
                        <motion.div
                            key={currentCityIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-light"
                        >
                            {cities[currentCityIndex]}
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-background px-12 py-5 rounded-full text-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/20"
                    >
                        Book the Flight
                    </motion.button>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-secondary"
                >
                    <p className="text-sm mb-2">© 2026 Skypiea Jets. All rights reserved.</p>
                    <p className="text-xs">
                        Luxury Private Aviation | 24/7 Concierge Service
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
