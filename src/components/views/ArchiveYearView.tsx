"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Film, FolderOpen } from "lucide-react";
import { ArchivePost } from "@/lib/archive-data";

export function ArchiveYearView({ year, posts }: { year: string; posts: ArchivePost[] }) {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-orange-500/30 font-sans">
            <nav className="fixed top-0 left-0 p-8 z-50">
                <Link href="/archive" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Vault
                </Link>
            </nav>

            <div className="pt-32 pb-12 px-4 md:px-8 max-w-[1600px] mx-auto">
                <div className="mb-20">
                    <div className="flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">
                        <FolderOpen className="w-4 h-4" /> Collection
                    </div>
                    <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none text-white/10 select-none">
                        {year}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <Link href={`/archive/${year}/${post.slug}`} key={post.id} className="group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-4"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-900 border border-white/5 group-hover:border-orange-500/50 transition-colors">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                    {/* Film strip deco */}
                                    <div className="absolute top-0 bottom-0 left-2 w-4 flex flex-col gap-2 py-2">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="w-full h-3 bg-black/50 rounded-sm"></div>
                                        ))}
                                    </div>
                                    <div className="absolute top-0 bottom-0 right-2 w-4 flex flex-col gap-2 py-2">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="w-full h-3 bg-black/50 rounded-sm"></div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold leading-tight group-hover:text-orange-500 transition-colors">{post.title}</h2>
                                    <div className="flex gap-2 mt-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 border border-white/10 px-2 py-0.5 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
