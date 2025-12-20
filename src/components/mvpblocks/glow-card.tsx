'use client';

import Image from 'next/image';

interface GlowingCardProps {
  name?: string;
  role?: string;
  image?: string;
}

export default function GlowingCard({
  name = "Shaswat Raj",
  role = "President",
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
}: GlowingCardProps) {
  return (
    <>
      <div className="card">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 text-sm tracking-widest uppercase">{role}</p>
        <div className="glow" />
      </div>

      <style jsx>{`
        @property --a {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes a {
          to {
            --a: 1turn;
          }
        }

        .card {
          position: relative;
          overflow: hidden;
          width: 300px;
          height: 350px; /* Fixed height for consistency */
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          
          color: #ededed;
          text-align: center;
          z-index: 10;
        }

        .glow {
          content: '';
          position: absolute;
          z-index: -1;
          inset: -2px; /* Thinner border */
          border-radius: 1.6rem; /* Match card radius + inset */
          padding: 2px; /* Border width */
          background: conic-gradient(
              from var(--a),
              #3b82f6, /* Blue 500 */
              #8b5cf6, /* Purple 500 */
              #06b6d4, /* Cyan 500 */
              #3b82f6
            );
          mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: a 4s linear infinite;
        }
        
        /* Optional: Add a subtle background glow behind the card */
         .card::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
            z-index: -2;
            pointer-events: none;
        }
      `}</style>
    </>
  );
}
