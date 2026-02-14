"use client";

import { motion } from "framer-motion";
import { fleetData, Aircraft } from "@/lib/fleetData";
import AircraftCard from "./AircraftCard";
import AircraftDetailModal from "./AircraftDetailModal";
import { useState } from "react";

export default function FleetGallery() {
    const [selectedAircraft, setSelectedAircraft] = useState<Aircraft | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (aircraft: Aircraft) => {
        setSelectedAircraft(aircraft);
        setIsModalOpen(true);
    };

    return (
        <section id="fleet" className="relative min-h-screen bg-background py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-6">
                        Our Fleet
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
                        Choose from our curated selection of the world's most advanced
                        and luxurious private aircraft
                    </p>
                </motion.div>

                {/* Aircraft Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {fleetData.map((aircraft, index) => (
                        <AircraftCard
                            key={aircraft.id}
                            aircraft={aircraft}
                            index={index}
                            onSelect={() => openModal(aircraft)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <p className="text-lg md:text-xl text-secondary mb-6">
                        Can't find what you're looking for?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass px-8 py-4 rounded-full text-lg font-semibold
                                 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Request Custom Aircraft
                    </motion.button>
                </motion.div>
            </div>

            {/* Detail Modal */}
            <AircraftDetailModal
                aircraft={selectedAircraft}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
