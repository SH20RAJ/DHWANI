"use client";

import { motion } from "framer-motion";
import { TrendingUp, Minus, TrendingDown, Play, Star } from "lucide-react";
import Image from "next/image";

const bands = [
    { rank: 1, name: "The Riot", genre: "Alternative Rock", points: 2840, trend: "up", change: 2, image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop" },
    { rank: 2, name: "Iron Raga", genre: "Carnatic Metal", points: 2750, trend: "down", change: 1, image: "https://images.unsplash.com/photo-1511735111819-9a3f77ebd961?q=80&w=2574&auto=format&fit=crop" },
    { rank: 3, name: "Velvet Chords", genre: "Jazz / Neo-Soul", points: 2400, trend: "same", change: 0, image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2670&auto=format&fit=crop" },
    { rank: 4, name: "Echo Chamber", genre: "Shoegaze", points: 2100, trend: "up", change: 5, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2669&auto=format&fit=crop" },
    { rank: 5, name: "District 9", genre: "Hip-Hop Collective", points: 1950, trend: "up", change: 1, image: "https://images.unsplash.com/photo-1605722243979-fe0be8190c09?q=80&w=2670&auto=format&fit=crop" }
];

export function BandsLeaderboardView() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">

            {/* Header */}
            <header className="pt-32 pb-16 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic text-transparent bg-clip-text bg-gradient-to-t from-neutral-600 to-white">
                    Top Charts
                </h1>
                <p className="font-mono text-green-500 uppercase tracking-widest text-xs">
                    Live Rankings • Week 52
                </p>
            </header>

            {/* List */}
            <section className="max-w-4xl mx-auto px-4 pb-32">
                <div className="bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 text-xs font-mono uppercase text-neutral-500 font-bold">
                        <div className="col-span-1 text-center">#</div>
                        <div className="col-span-1"></div>
                        <div className="col-span-6">Artist</div>
                        <div className="col-span-2 text-right">Points</div>
                        <div className="col-span-2 text-center">Trend</div>
                    </div>

                    {/* Rows */}
                    <div>
                        {bands.map((band, i) => (
                            <motion.div
                                key={band.rank}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-12 gap-4 items-center p-6 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer"
                            >
                                <div className="col-span-1 text-center font-black text-2xl font-serif italic text-neutral-600 group-hover:text-white transition-colors">
                                    {band.rank}
                                </div>

                                <div className="col-span-1 relative w-10 h-10 rounded-full overflow-hidden bg-neutral-800">
                                    <Image src={band.image} alt={band.name} fill className="object-cover" />
                                </div>

                                <div className="col-span-6 pl-2">
                                    <h3 className="font-bold text-xl leading-none mb-1 group-hover:text-green-400 transition-colors">{band.name}</h3>
                                    <div className="text-xs text-neutral-500 font-mono uppercase">{band.genre}</div>
                                </div>

                                <div className="col-span-2 text-right font-mono font-bold text-neutral-300">
                                    {band.points.toLocaleString()}
                                </div>

                                <div className="col-span-2 flex items-center justify-center gap-1">
                                    {band.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                                    {band.trend === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                                    {band.trend === "same" && <Minus className="w-4 h-4 text-neutral-500" />}

                                    {band.trend !== "same" && (
                                        <span className={`text-[10px] font-bold ${band.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                                            {band.change}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-neutral-500 text-xs font-mono max-w-lg mx-auto leading-relaxed">
                        Rankings based on gig attendance, streaming numbers, and Battle of Bands performance scores. Updates every Monday at 00:00 EST.
                    </p>
                </div>
            </section>

        </main>
    );
}
