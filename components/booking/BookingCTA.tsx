"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    departure: string;
    destination: string;
    date: string;
    passengers: string;
    message: string;
}

export default function BookingCTA() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        departure: "",
        destination: "",
        date: "",
        passengers: "1",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.departure.trim()) newErrors.departure = "Departure is required";
        if (!formData.destination.trim()) newErrors.destination = "Destination is required";
        if (!formData.date) newErrors.date = "Date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Form submission successful
            setIsSubmitted(true);

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    departure: "",
                    destination: "",
                    date: "",
                    passengers: "1",
                    message: "",
                });
            }, 3000);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="booking" className="relative min-h-screen bg-background py-32 px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-6">
                        Book Your Flight
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
                        Experience luxury aviation. Our team will respond within 2 hours.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-3xl"
                >
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-1"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-1"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="+1 (555) 123-4567"
                                />
                                {errors.phone && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm mt-1"
                                    >
                                        {errors.phone}
                                    </motion.p>
                                )}
                            </div>

                            {/* Departure & Destination */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Departure *
                                    </label>
                                    <input
                                        type="text"
                                        name="departure"
                                        value={formData.departure}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="New York (JFK)"
                                    />
                                    {errors.departure && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-1"
                                        >
                                            {errors.departure}
                                        </motion.p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Destination *
                                    </label>
                                    <input
                                        type="text"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="London (LHR)"
                                    />
                                    {errors.destination && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-1"
                                        >
                                            {errors.destination}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Date & Passengers */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Departure Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="form-input"
                                        aria-label="Departure Date"
                                    />
                                    {errors.date && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-1"
                                        >
                                            {errors.date}
                                        </motion.p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Passengers
                                    </label>
                                    <select
                                        name="passengers"
                                        value={formData.passengers}
                                        onChange={handleChange}
                                        className="form-input"
                                        aria-label="Number of Passengers"
                                    >
                                        {[...Array(19)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Additional Requirements
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="form-input resize-none"
                                    placeholder="Special requests, catering preferences, etc."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 px-8 bg-white text-black font-bold text-lg rounded-xl
                                         hover:bg-secondary transition-colors duration-300"
                            >
                                Request Quote
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16"
                        >
                            <div className="text-7xl mb-6">✈️</div>
                            <h3 className="text-4xl font-bold mb-4 text-glow">
                                Request Received!
                            </h3>
                            <p className="text-xl text-secondary">
                                Our team will contact you within 2 hours.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
