"use client";

import { motion } from "framer-motion";
import { Music, Mic2, Lightbulb, Headphones, Users, Heart } from "lucide-react";
import { StudioModule } from "@/lib/types";

// Map for serializable icon names
const iconMap: Record<string, any> = {
    Music, Mic2, Lightbulb, Headphones, Users, Heart
};

interface TheStudioProps {
    modules: {
        iconName: string; // Changed from icon object
        label: string;
        desc: string;
        knobColor: string;
        patch: string;
        grid: string;
    }[];
}

// Synth Knob Component (Visual Only)
const Knob = ({ color }: { color: string }) => (
    <div className="relative w-12 h-12 rounded-full bg-neutral-800 border-2 border-neutral-700 shadow-xl flex items-center justify-center">
        <div className={`w-1.5 h-4 absolute top-1 rounded-full ${color}`}></div>
    </div>
);

// Screw Component
const Screw = () => (
    <div className="w-3 h-3 rounded-full bg-zinc-600 flex items-center justify-center opacity-50">
        <div className="w-full h-0.5 bg-zinc-800 rotate-45"></div>
        <div className="w-full h-0.5 bg-zinc-800 -rotate-45 absolute"></div>
    </div>
);

export function TheStudio({ modules }: TheStudioProps) {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">

            {/* Rack Rails Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Studio Rack</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto font-mono text-sm uppercase tracking-widest">
                        Modular components for your musical journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((mod, i) => {
                        const IconComponent = iconMap[mod.iconName] || Music;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-2xl flex flex-col justify-between overflow-hidden ${mod.grid}`}
                            >
                                {/* Brushed Metal Texture Overlay */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none mix-blend-overlay"></div>

                                {/* Screws */}
                                <div className="absolute top-3 left-3"><Screw /></div>
                                <div className="absolute top-3 right-3"><Screw /></div>
                                <div className="absolute bottom-3 left-3"><Screw /></div>
                                <div className="absolute bottom-3 right-3"><Screw /></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={`p-3 rounded-lg bg-black/50 border border-zinc-800 ${mod.knobColor.replace('bg-', 'text-')}`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <Knob color={mod.knobColor} />
                                    </div>

                                    <h3 className="text-xl font-bold text-zinc-100 mb-2 font-mono uppercase tracking-wide">{mod.label}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                        {mod.desc}
                                    </p>
                                </div>

                                {/* Patch Point */}
                                <div className="relative z-10 pt-4 border-t border-zinc-800 flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase">CV: {mod.patch}</span>
                                    <div className="w-8 h-8 rounded-full border-4 border-zinc-700 bg-black shadow-inner"></div>
                                </div>

                                {/* Active Light */}
                                <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${mod.knobColor} shadow-[0_0_10px_currentColor] animate-pulse`}></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
