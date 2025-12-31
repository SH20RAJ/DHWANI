"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, Ticket, Mic2, Users, Music } from "lucide-react";
import { Event } from "@/lib/events-data";

export function EventDetailView({ event }: { event: Event }) {
    if (!event) return null;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 p-8 z-50">
                <Link href="/events" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Tour
                </Link>
            </nav>

            {/* Hero Banner */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-7xl w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-xs font-mono uppercase tracking-widest">{event.type}</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none max-w-4xl">
                            {event.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/80 font-mono text-sm uppercase tracking-widest mt-4">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {event.time}</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left: Details */}
                <div className="lg:col-span-8 space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 border-l-4 border-purple-500 pl-4">About the Event</h2>
                        <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light">
                            {event.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-neutral-900/50 p-8 border border-white/10 rounded-xl">
                            <h3 className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest mb-4">
                                <Mic2 className="w-5 h-5 text-purple-500" /> Lineup
                            </h3>
                            <ul className="space-y-3 font-mono text-sm text-neutral-400">
                                <li className="text-white">The Riot (Headliner)</li>
                                <li>Iron Raga</li>
                                <li>Velvet Chords</li>
                                <li>Dhwani Jam Band</li>
                            </ul>
                        </div>
                        <div className="bg-neutral-900/50 p-8 border border-white/10 rounded-xl">
                            <h3 className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest mb-4">
                                <Ticket className="w-5 h-5 text-purple-500" /> Entry info
                            </h3>
                            <ul className="space-y-3 font-mono text-sm text-neutral-400">
                                <li>Free for BIT Students (with ID)</li>
                                <li>Guest Pass: ₹200 (At Gate)</li>
                                <li>Doors Open: 30 mins prior</li>
                                <li>No Re-entry allowed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right: Ticket Widget */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-32">
                        <div className="bg-white text-black rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-zinc-100 rounded-full -mr-16 -mt-16 opacity-50"></div>

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
                                    <Music className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">Admit One</div>
                                    <h3 className="text-3xl font-black uppercase leading-none">{event.title}</h3>
                                </div>
                                <div className="w-full border-t-2 border-dashed border-black/10 my-2"></div>
                                <div className="grid grid-cols-2 gap-4 w-full text-left">
                                    <div>
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Date</div>
                                        <div className="font-bold">{event.date}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Gate</div>
                                        <div className="font-bold">A4</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Seat</div>
                                        <div className="font-bold">GA-452</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Price</div>
                                        <div className="font-bold">FREE</div>
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors mt-4">
                                    {event.status === "SOLD OUT" ? "Sold Out" : "Get Pass"}
                                </button>
                            </div>

                            {/* Ticket Notch visual */}
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></div>
                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
}
