"use client";

import { motion } from "framer-motion";
import { Aircraft } from "@/lib/fleetData";
import Image from "next/image";

interface AircraftCardProps {
    aircraft: Aircraft;
    index: number;
    onSelect: () => void;
}

export default function AircraftCard({ aircraft, index, onSelect }: AircraftCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={onSelect}
            className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
            style={{ willChange: 'transform' }}
        >
            {/* Image Container */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-black/20">
                <Image
                    src={aircraft.image}
                    alt={aircraft.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                    priority={index < 3}
                    style={{ willChange: 'transform' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
                    <p className="text-sm font-semibold">{aircraft.price}</p>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 relative">
                {/* Main Info */}
                <div className="mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold mb-1 text-glow tracking-tighter">
                        {aircraft.model}
                    </h3>
                    <p className="text-secondary text-sm md:text-base font-medium tracking-widest uppercase">
                        {aircraft.tagline}
                    </p>
                </div>

                {/* Description - Shorter for simplicity */}
                <p className="text-sm md:text-base mb-6 leading-relaxed opacity-70 line-clamp-2">
                    {aircraft.description}
                </p>

                {/* Specs Box - Revealed on Hover */}
                <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                        opacity: 1,
                        height: 'auto',
                        marginTop: 24
                    }}
                    className="overflow-hidden border-t border-white/10 pt-6 hidden group-hover:block"
                >
                    <div className="grid grid-cols-2 gap-6">
                        {aircraft.specs.slice(0, 4).map((spec, idx) => (
                            <div key={idx} className="flex flex-col">
                                <span className="text-xs text-secondary uppercase tracking-widest mb-1">
                                    {spec.label}
                                </span>
                                <span className="font-bold text-sm">
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Minimalist CTA */}
                <div className="mt-8 flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-2 group/link"
                    >
                        <span className="text-sm font-bold tracking-[0.2em] uppercase transition-colors group-hover:text-secondary">
                            Discover More
                        </span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-secondary"
                        >
                            →
                        </motion.span>
                    </motion.div>

                    <div className="text-xs font-light tracking-widest opacity-40 uppercase">
                        Luxury Edition
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
