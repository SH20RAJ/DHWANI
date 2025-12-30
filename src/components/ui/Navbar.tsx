'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Music', path: '/music' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }, // Changed to dedicated page consistency
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
            >
                <div
                    className={cn(
                        "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border border-white/5",
                        scrolled
                            ? "bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] w-full max-w-5xl"
                            : "bg-transparent w-full max-w-7xl backdrop-blur-none border-transparent"
                    )}
                >
                    {/* Logo Area */}
                    <Link href="/" className="group flex items-center gap-3 z-50">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            {/* Animated Music Logo */}
                            <div className="flex gap-0.5 items-end h-4 w-4">
                                <span className="w-0.5 bg-white h-full animate-[music-bar_1s_ease-in-out_infinite]" />
                                <span className="w-0.5 bg-white h-2/3 animate-[music-bar_1.2s_ease-in-out_infinite_0.1s]" />
                                <span className="w-0.5 bg-white h-1/3 animate-[music-bar_0.8s_ease-in-out_infinite_0.2s]" />
                                <span className="w-0.5 bg-white h-3/4 animate-[music-bar_1.1s_ease-in-out_infinite_0.3s]" />
                            </div>
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="font-bold tracking-wider text-sm">DHWANI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={cn(
                                        "relative px-4 py-1.5 text-sm font-medium transition-colors hover:text-white rounded-full group overflow-hidden",
                                        isActive ? "text-white bg-white/10" : "text-white/60"
                                    )}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {/* Hover Glow Effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-[60] bg-black/90 flex flex-col justify-center items-center"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-4 text-white/60 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "text-3xl font-light tracking-tight hover:text-white transition-colors",
                                            pathname === item.path ? "text-white" : "text-white/40"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Decorative background element for mobile */}
                        <div className="absolute bottom-20 opacity-20 pointer-events-none">
                            <div className="flex gap-2 items-end h-16">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-2 bg-white rounded-full animate-[music-bar_1.5s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Inline styles for custom animations */}
            <style jsx global>{`
                @keyframes music-bar {
                    0%, 100% { height: 20%; opacity: 0.5; }
                    50% { height: 100%; opacity: 1; }
                }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </>
    );
}
