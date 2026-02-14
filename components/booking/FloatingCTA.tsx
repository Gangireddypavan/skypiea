"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            // Show button after scrolling 400px for better conversion
            setIsVisible(latest > 400);
        });

        return () => unsubscribe();
    }, [scrollY]);

    const handleClick = () => {
        const bookingSection = document.getElementById("booking");
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : 100,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 right-8 z-[90]"
        >
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-5 rounded-full font-bold text-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                         hover:bg-secondary hover:text-white transition-all duration-300
                         flex items-center gap-4 group border border-white/20"
            >
                <span className="tracking-widest uppercase text-sm">Book Your Flight</span>
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    ✈️
                </motion.span>

                {/* Subtle outer glow on hover */}
                <div className="absolute inset-0 rounded-full blur-xl bg-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
        </motion.div>
    );
}
