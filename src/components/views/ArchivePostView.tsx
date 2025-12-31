"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { ArchivePost } from "@/lib/archive-data";

export function ArchivePostView({ post }: { post: ArchivePost }) {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-orange-500/30">
            <nav className="fixed top-0 left-0 p-8 z-50">
                <Link href={`/archive/${post.year}`} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to {post.year}
                </Link>
            </nav>

            {/* Hero */}
            <div className="relative h-[60vh] w-full">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6"
                    >
                        {post.title}
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl">
                        {post.description}
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {post.images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 group"
                        >
                            <Image
                                src={img}
                                alt={`${post.title} shot ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                    {/* Add cover image again for more content if needed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 group"
                    >
                        <Image
                            src={post.coverImage}
                            alt={`${post.title} cover`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Tags Footer */}
            <div className="border-t border-white/5 py-12 text-center">
                <div className="flex justify-center gap-4">
                    {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neutral-500">
                            <Tag className="w-3 h-3" /> {tag}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    );
}
