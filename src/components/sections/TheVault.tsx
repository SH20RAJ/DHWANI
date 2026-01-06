"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Disc, Mic2, Music, Radio, Trophy, Star } from "lucide-react";
import Image from "next/image";
import { Milestone } from "@/lib/types";

// Map icon names back to components if passed as strings, or expect objects
// For simplicity, we'll assume the parent passes the component or we map it here if it's serializable.
// Since we are creating the data in page.tsx (Server Component), we can pass Lucide components directly? 
// No, Server to Client props must be serializable. Lucide icons are functions, so they are not serializable.
// We should pass icon names and map them here.

const iconMap: Record<string, any> = {
    Mic2, Star, Trophy, Radio, Music
};

interface TheVaultProps {
    milestones: {
        year: string;
        title: string;
        description: string;
        iconName: string; // Changed from icon object to string name for serialization
        image: string;
    }[];
}

export function TheVault({ milestones }: TheVaultProps) {
    return (
        <section className="bg-neutral-950 py-32 relative overflow-hidden" id="legacy">
            {/* Background Noise/Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Recording History since 1998</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600">Vault</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Cable (Vertical Line) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-neutral-700 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-24">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const IconComponent = iconMap[item.iconName] || Music;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Spacer for the other side */}
                                    <div className="flex-1 hidden md:block"></div>

                                    {/* Center Node (The Plug) */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 md:translate-x-[-50%] z-20">
                                        <div className="w-16 h-16 rounded-full bg-neutral-900 border-4 border-neutral-800 flex items-center justify-center shadow-2xl relative group">
                                            <IconComponent className="w-6 h-6 text-neutral-500 group-hover:text-indigo-400 transition-colors" />
                                            {/* Glowing ring */}
                                            <div className="absolute inset-0 rounded-full border border-white/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Content Card (Tape Box) */}
                                    <div className="flex-1 w-full pl-24 md:pl-0">
                                        <div className={`
                                relative p-8 bg-neutral-900/80 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden group hover:border-white/30 transition-all duration-500
                                ${isEven ? 'md:text-right' : 'md:text-left'}
                             `}>
                                            {/* Tape Decorative Element */}
                                            <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50 ${isEven ? 'right-0 origin-right' : 'left-0 origin-left'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                                            <div className="relative z-10">
                                                <span className="text-6xl font-black text-white/5 absolute -top-4 -right-4 select-none z-0">
                                                    {item.year}
                                                </span>

                                                <div className="text-indigo-400 font-mono text-sm font-bold mb-2 relative z-10">{item.year}</div>
                                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase leading-none relative z-10">
                                                    {item.title}
                                                </h3>
                                                <p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-6 relative z-10">
                                                    {item.description}
                                                </p>

                                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/5">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                                    />
                                                    {/* Scanline overlay */}
                                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
