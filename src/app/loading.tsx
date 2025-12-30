export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white z-[100] relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black opacity-80" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Visualizer Animation */}
        <div className="flex items-end gap-1.5 h-16">
          <div className="w-2 bg-white/80 rounded-full animate-music-bar-1" />
          <div className="w-2 bg-white/80 rounded-full animate-music-bar-2" />
          <div className="w-2 bg-white/80 rounded-full animate-music-bar-3" />
          <div className="w-2 bg-white/80 rounded-full animate-music-bar-4" />
          <div className="w-2 bg-white/80 rounded-full animate-music-bar-2" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold tracking-widest text-white/90 uppercase">
            Soundchecking
          </h2>
          <p className="text-xs font-mono text-white/40 animate-pulse">
            Setting the stage...
          </p>
        </div>
      </div>

      {/* CSS styles for the keyframes to avoid hydration mismatch/client-side requirement */}
      <style>{`
                @keyframes music-bar-1 {
                    0%, 100% { height: 20%; opacity: 0.3; }
                    50% { height: 80%; opacity: 1; }
                }
                @keyframes music-bar-2 {
                    0%, 100% { height: 30%; opacity: 0.3; }
                    50% { height: 60%; opacity: 1; }
                }
                @keyframes music-bar-3 {
                    0%, 100% { height: 40%; opacity: 0.3; }
                    50% { height: 100%; opacity: 1; }
                }
                @keyframes music-bar-4 {
                    0%, 100% { height: 25%; opacity: 0.3; }
                    50% { height: 75%; opacity: 1; }
                }

                .animate-music-bar-1 { animation: music-bar-1 0.8s ease-in-out infinite; }
                .animate-music-bar-2 { animation: music-bar-2 0.9s ease-in-out infinite 0.1s; }
                .animate-music-bar-3 { animation: music-bar-3 1.1s ease-in-out infinite 0.2s; }
                .animate-music-bar-4 { animation: music-bar-4 0.7s ease-in-out infinite 0.3s; }
            `}</style>
    </div>
  );
}
