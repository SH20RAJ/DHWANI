
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { VoiceChat } from "../ui/audio-chat";
import MusicArtwork from "../ui/music-artwork";

// Aurora Background Component
const AuroraBackground = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={`relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg overflow-hidden ${className || ''}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
                [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a855f7_15%,#9333ea_20%,#3b82f6_25%,#60a5fa_30%)]
                [background-image:var(--white-gradient),var(--aurora)]
                dark:[background-image:var(--dark-gradient),var(--aurora)]
                [background-size:300%,_200%]
                [background-position:50%_50%,_50%_50%]
                filter blur-[10px] invert dark:invert-0
                after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
                after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                after:[background-size:200%,_100%] 
                after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
                pointer-events-none
                absolute -inset-[10px] opacity-50 will-change-transform
            `}
        ></div>
      </div>
      {children}
    </div>
  );
};


export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Spotlight effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: ev.clientX - rect.left, y: ev.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);


  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center min-h-[90vh] bg-black text-slate-950 transition-bg overflow-hidden dark:bg-slate-950 dark:text-slate-100">
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 lg:opacity-100 mix-blend-soft-light"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,100,255,0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <AuroraBackground className="opacity-30">
          <div />
        </AuroraBackground>
      </div>


      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 flex flex-col items-center gap-6 px-4 text-center max-w-5xl mx-auto pt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center mb-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
            <img src="/logo.png" alt="Dhwani Logo" className="w-24 h-24 md:w-32 md:h-32 relative z-10 drop-shadow-2xl" />
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Where Sound Finds<br /> Its People
        </h1>

        <p className="font-mono text-base md:text-xl text-blue-200/80 max-w-2xl mx-auto tracking-wide">
          The Official Music Club of BIT Mesra.<br />
          <span className="text-white/40 text-sm mt-2 block">EST. 1998 • RANCHI, INDIA</span>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 hover:border-white/40 overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Join the Jam <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link href="#legacy" className="inline-flex items-center justify-center px-8 py-3 font-medium text-gray-400 transition-colors hover:text-white">
            Explore Our Legacy
          </Link>
        </motion.div>

        {/* Featured Community Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 w-full max-w-4xl"
        >
          <div className="relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

            {/* Label */}
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Live at the Studio
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
              {/* Voice Lounge */}
              <div className="flex flex-col items-center flex-1">
                <h3 className="text-zinc-400 text-xs uppercase tracking-widest mb-4 font-mono">Members Online</h3>
                <VoiceChat />
              </div>

              {/* Vertical Divider (Desktop) */}
              <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              {/* Now Playing */}
              <div className="flex flex-col items-center flex-1">
                <h3 className="text-zinc-400 text-xs uppercase tracking-widest mb-4 font-mono">Now Spinning</h3>
                <div className="transform scale-90">
                  <MusicArtwork
                    artist="Dhwani Band"
                    music="Campus Beats Vol. 1"
                    albumArt="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop"
                    isSong={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Soundwave Decoration */}
        <div className="flex gap-1 items-end h-8 mt-12 opacity-30">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-blue-500 via-purple-500 to-transparent rounded-full"
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

      </motion.div>
    </div>
  );
}
