"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

interface StringTextProps {
  text: string;
  className?: string;
}

const StringLetter = ({ letter }: { letter: string }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 0.8,
        ease: "easeOut",
      },
    }).then(() => setIsPlaying(false));
  };

  return (
    <motion.span
      className="inline-block cursor-default hover:text-blue-500 transition-colors duration-200"
      animate={controls}
      onMouseOver={rubberBand}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export const StringText = ({ text, className = "" }: StringTextProps) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split("").map((letter, i) => (
        <StringLetter key={i} letter={letter} />
      ))}
    </span>
  );
};
