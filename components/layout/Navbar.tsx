"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Fleet", href: "#fleet" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#booking" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                ? "py-4 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg"
                : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <motion.span
                        className="text-2xl md:text-3xl font-black tracking-tighter text-glow-premium"
                        whileHover={{ scale: 1.05 }}
                    >
                        SKYPIEA <span className="text-secondary font-light">JETS</span>
                    </motion.span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-widest uppercase hover:text-secondary transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <button
                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl active:scale-95"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/10 overflow-hidden"
                    >
                        <div className="p-8 flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl font-medium tracking-widest uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full py-4 bg-white text-black font-bold tracking-widest uppercase rounded-xl"
                            >
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
