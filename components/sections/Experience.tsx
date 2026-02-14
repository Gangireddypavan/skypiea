"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

    const items = [
        {
            title: "Bespoke Interiors",
            description: "Hand-crafted comfort designed for ultimate productivity and relaxation.",
            image: "https://images.unsplash.com/photo-1540962351504-03099e0a75c3?auto=format&fit=crop&q=80&w=1200",
            className: "col-span-12 md:col-span-7 h-[400px] md:h-[600px]",
            parallax: y1
        },
        {
            title: "Gourmet Dining",
            description: "World-class menus tailored to your exact preferences.",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            className: "col-span-12 md:col-span-5 h-[300px] md:h-[450px] md:mt-24",
            parallax: y2
        },
        {
            title: "Global Reach",
            description: "Direct access to over 5,000 airports worldwide.",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
            className: "col-span-12 md:col-span-5 h-[300px] md:h-[450px] md:-mt-24",
            parallax: y1
        },
        {
            title: "Unrivaled Service",
            description: "A dedicated concierge team available 24/7 for every mission.",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
            className: "col-span-12 md:col-span-7 h-[350px] md:h-[500px]",
            parallax: y2
        }
    ];

    return (
        <section ref={containerRef} className="relative py-32 px-8 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-glow-premium">
                        THE EXPERIENCE
                    </h2>
                    <p className="text-secondary text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-widest uppercase">
                        Beyond Aviation. Pure Luxury.
                    </p>
                </motion.div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-12 gap-6 md:gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            style={{ y: item.parallax }}
                            className={`relative rounded-3xl overflow-hidden group ${item.className}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="text-2xl md:text-4xl font-bold mb-2"
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-secondary text-sm md:text-lg max-w-sm font-light"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.02] text-[20rem] font-black whitespace-nowrap">
                SKYPIEA LIFESTYLE
            </div>
        </section>
    );
}
