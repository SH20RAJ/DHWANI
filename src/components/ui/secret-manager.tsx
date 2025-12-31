"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy } from "lucide-react";

export function SecretManager() {
    const [keys, setKeys] = useState<string[]>([]);
    const [unlocked, setUnlocked] = useState(false);

    // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    const KONAMI_CODE = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setKeys((prev) => {
                const newKeys = [...prev, e.key];
                if (newKeys.length > KONAMI_CODE.length) {
                    newKeys.shift();
                }
                return newKeys;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (keys.join("") === KONAMI_CODE.join("")) {
            setUnlocked(true);
            setKeys([]); // Reset
            // Play a sound if we had one
            const audio = new Audio("https://cdn.pixabay.com/audio/2022/03/24/audio_33276df746.mp3"); // Success sound placeholder
            audio.volume = 0.5;
            audio.play().catch(() => { });
        }
    }, [keys]);

    return (
        <AnimatePresence>
            {unlocked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center overflow-hidden"
                >
                    {/* Glitch Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover mix-blend-screen" />

                    <div className="relative z-10 text-center space-y-8 p-8 border border-green-500/30 bg-black/80 backdrop-blur-md rounded-3xl shadow-[0_0_100px_rgba(34,197,94,0.3)]">
                        <motion.div
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="bg-green-500 text-black w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <Trophy className="w-12 h-12" />
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 tracking-tighter uppercase glitch-text">
                            System Hacked
                        </h2>
                        <p className="text-green-400 font-mono text-xl tracking-widest uppercase">
                            Cheat Code Activated: Developer Mode
                        </p>

                        <div className="flex gap-4 justify-center pt-8">
                            <button
                                onClick={() => setUnlocked(false)}
                                className="px-8 py-3 bg-green-600 hover:bg-green-500 text-black font-bold uppercase tracking-widest rounded-full transition-all hover:scale-105"
                            >
                                Return to Reality
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => setUnlocked(false)}
                        className="absolute top-8 right-8 text-green-500 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <style jsx>{`
                        .glitch-text {
                            text-shadow: 2px 2px 0px #ff00ff, -2px -2px 0px #00ffff;
                            animation: glitch 1s infinite;
                        }
                        @keyframes glitch {
                            0% { transform: translate(0); }
                            20% { transform: translate(-2px, 2px); }
                            40% { transform: translate(-2px, -2px); }
                            60% { transform: translate(2px, 2px); }
                            80% { transform: translate(2px, -2px); }
                            100% { transform: translate(0); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
