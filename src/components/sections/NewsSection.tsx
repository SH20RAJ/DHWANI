"use client";

import React from 'react';
import { AuroraBackground, BentoGrid, BentoGridItem } from '../ui/aurora-bento-grid';
import { Calendar, ArrowRight, Music2, Mic2, Disc, Ticket } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
    Bell: Ticket,
    Award: Disc,
    Speaker: Music2,
    Calendar: Mic2
};

export type NewsItem = {
    title: string;
    date: string;
    excerpt: string;
    category: string;
    iconName: string;
    span: string;
    gradientFrom: string;
    gradientTo: string;
};

export const NewsSection = ({ newsItems = [] }: { newsItems?: NewsItem[] }) => {
    return (
        <div className="relative w-full py-20 bg-black text-white overflow-hidden">
            <AuroraBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div className="text-center w-full">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-mono mb-4 text-blue-300">
                            OFFICIAL UPDATES
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white">Liner Notes</span>
                        </h2>
                        <p className="text-zinc-400 max-w-xl mx-auto font-mono text-sm md:text-base leading-relaxed">
                            Backstage access to the latest gigs, achievements, and club announcements.
                        </p>
                    </div>
                </div>

                <BentoGrid className="md:grid-cols-3 auto-rows-[20rem]">
                    {newsItems.map((item, idx) => {
                        const Icon = iconMap[item.iconName] || Ticket;
                        // Determine visual style based on index/randomness for "Gig Poster" feel
                        const isfeatured = item.span?.includes('col-span-2');

                        return (
                            <BentoGridItem
                                key={idx}
                                className={`${item.span} group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/30 transition-all duration-500`}
                                gradientFrom={item.gradientFrom}
                                gradientTo={item.gradientTo}
                            >
                                {/* Background Noise/Texture */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col h-full justify-between p-2">
                                    <div className="flex justify-between items-start">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} bg-opacity-10 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Posted</span>
                                            <span className="text-xs font-bold text-white font-mono">{item.date}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="h-px w-8 bg-zinc-700"></span>
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800">
                                                {item.category}
                                            </span>
                                        </div>

                                        <h3 className={`font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300 ${isfeatured ? 'text-3xl' : 'text-xl'}`}>
                                            {item.title}
                                        </h3>

                                        <p className="text-zinc-400 text-sm line-clamp-3 mb-6 font-light leading-relaxed">
                                            {item.excerpt}
                                        </p>

                                        <div className="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-white transition-colors cursor-pointer group/link">
                                            Read Full Update
                                            <ArrowRight className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-t from-zinc-800 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            </BentoGridItem>
                        );
                    })}
                </BentoGrid>
            </div>
        </div>
    );
};
