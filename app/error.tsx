"use client"; // Next.js forces error bounds to be client components

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // We would link this to Sentry or Datadog in production
    console.error("Zelvoxx Fatal Error Boundary Caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center p-6 text-center z-50 relative overflow-hidden">
      
      {/* Red ambient warning glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass p-10 md:p-16 rounded-[2rem] border border-red-500/20 max-w-2xl relative z-10 shadow-2xl shadow-red-900/20"
      >
        <div className="w-20 h-20 bg-[#0B0B0B] border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <span className="text-red-500 font-bold text-4xl font-heading">!</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 uppercase tracking-wider text-red-50">System Disruption</h2>
        
        <p className="text-white/60 mb-10 font-body text-lg leading-relaxed max-w-lg mx-auto">
          We experienced an anomaly communicating with the primary databases. The connection has been temporarily severed.
        </p>
        
        <button
          onClick={() => reset()}
          className="bg-white text-[#0B0B0B] hover:bg-white/90 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Reboot Sequence
        </button>
      </motion.div>
    </div>
  );
}
