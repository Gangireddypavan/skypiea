"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Aircraft } from "@/lib/fleetData";
import Image from "next/image";
import { useEffect } from "react";

interface AircraftDetailModalProps {
    aircraft: Aircraft | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function AircraftDetailModal({ aircraft, isOpen, onClose }: AircraftDetailModalProps) {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!aircraft) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-7xl h-full max-h-[90vh] bg-background border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            title="Close"
                            className="absolute top-6 right-6 z-50 p-3 bg-black/40 hover:bg-white/10 rounded-full backdrop-blur-md transition-colors border border-white/10"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Side: Visual Sequence */}
                        <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={aircraft.image}
                                    alt={aircraft.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                {aircraft.interiorImage && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={aircraft.interiorImage}
                                            alt={`${aircraft.name} Interior`}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

                            {/* Floating Description Card (Mobile) */}
                            <div className="absolute inset-x-8 bottom-8 md:hidden">
                                <div className="glass p-6 rounded-2xl">
                                    <h2 className="text-3xl font-bold mb-2 tracking-tighter">{aircraft.model}</h2>
                                    <p className="text-secondary text-xs uppercase tracking-widest">{aircraft.tagline}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Details */}
                        <div className="w-full md:w-1/2 h-full overflow-y-auto custom-scrollbar bg-card/30">
                            <div className="p-8 md:p-16">
                                {/* Header */}
                                <div className="hidden md:block mb-12">
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-accent-gold text-sm font-bold tracking-[0.4em] uppercase mb-4"
                                    >
                                        Aircraft Details
                                    </motion.p>
                                    <motion.h2
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-glow-premium"
                                    >
                                        {aircraft.model}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-secondary text-xl font-light tracking-wide uppercase max-w-md"
                                    >
                                        {aircraft.tagline}
                                    </motion.p>
                                </div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-16"
                                >
                                    <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-secondary/60">Overview</h4>
                                    <p className="text-lg text-secondary leading-relaxed font-light">
                                        {aircraft.description}
                                    </p>
                                </motion.div>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-16">
                                    {aircraft.specs.map((spec, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + idx * 0.1 }}
                                        >
                                            <p className="text-[0.6rem] md:text-xs text-secondary uppercase tracking-[0.3em] font-medium mb-2 opacity-50">
                                                {spec.label}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">{spec.icon}</span>
                                                <span className="text-xl md:text-2xl font-bold tracking-tight">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Detailed Features */}
                                {aircraft.detailedFeatures && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                        className="mb-16 pt-12 border-t border-white/5"
                                    >
                                        <h4 className="text-xs font-bold tracking-widest uppercase mb-8 text-secondary/60">Key Amenities</h4>
                                        <ul className="space-y-6">
                                            {aircraft.detailedFeatures.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4">
                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-gold shadow-glow-gold flex-shrink-0" />
                                                    <span className="text-base text-secondary/90 font-light">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}

                                {/* CTA Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="p-8 bg-white/5 rounded-3xl border border-white/5"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div>
                                            <p className="text-xs text-secondary uppercase tracking-widest mb-1 opacity-50">Estimated Value</p>
                                            <p className="text-3xl font-bold">{aircraft.price}</p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                onClose();
                                                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="w-full md:w-auto px-10 py-5 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:bg-accent-gold hover:text-white transition-all shadow-2xl hover:shadow-accent-gold/20"
                                        >
                                            Book This Flight
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
