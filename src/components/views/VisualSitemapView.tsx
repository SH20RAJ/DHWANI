"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Circle, Home, Users, Music, Calendar, Trophy, Archive, Mail, Map } from "lucide-react";

const nodes = [
    { id: "home", label: "Home", path: "/", icon: Home, x: 50, y: 50 },
    { id: "news", label: "News", path: "/news", icon: Activity, x: 30, y: 30 },
    { id: "events", label: "Events", path: "/events", icon: Calendar, x: 70, y: 30 },
    { id: "music", label: "Music", path: "/music", icon: Music, x: 50, y: 20 },
    { id: "team", label: "Team", path: "/team", icon: Users, x: 20, y: 60 },
    { id: "archive", label: "Archive", path: "/archive", icon: Archive, x: 80, y: 60 },
    { id: "bands", label: "Charts", path: "/bands", icon: Trophy, x: 50, y: 80 },
    { id: "contact", label: "Contact", path: "/contact", icon: Mail, x: 50, y: 95 },
];

export function VisualSitemapView() {
    return (
        <main className="min-h-screen bg-[#020202] text-white flex items-center justify-center relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>

            <div className="relative w-full max-w-4xl aspect-square md:aspect-video p-10">
                {/* Connecting Lines (Decorational SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="white" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="white" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="white" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="20%" y2="60%" stroke="white" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="80%" y2="60%" stroke="white" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="white" strokeWidth="2" />
                    <line x1="50%" y1="80%" x2="50%" y2="95%" stroke="white" strokeWidth="2" />
                </svg>

                {nodes.map((node, i) => (
                    <Link key={node.id} href={node.path}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center gap-2"
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        >
                            <div className="relative w-16 h-16 bg-neutral-900 border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <node.icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                                <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-0 group-hover:opacity-20"></div>
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 group-hover:text-blue-400 bg-black/80 px-2 py-1 rounded transition-colors">
                                {node.label}
                            </span>
                        </motion.div>
                    </Link>
                ))}

                <div className="absolute top-10 left-10 text-neutral-600 font-mono text-sm">
                    <div className="flex items-center gap-2"><Map className="w-4 h-4" /> SYSTEM MAP_V1.0</div>
                </div>
            </div>

        </main>
    );
}
