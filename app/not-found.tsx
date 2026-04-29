"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background glow isolation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        {/* Giant textured number */}
        <h1 className="text-[10rem] md:text-[18rem] font-black font-heading leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 opacity-80 select-none tracking-tighter">
          404
        </h1>
        
        {/* Overlay banner text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <p className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-widest bg-[#0B0B0B]/80 px-8 py-2 border-y border-white/10 backdrop-blur-md">
            System Void
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col items-center z-10 mt-12"
      >
        <p className="text-white/60 font-body text-lg md:text-xl max-w-md text-center mb-10 leading-relaxed">
          The requested coordinate does not exist within our infrastructure.
        </p>

        <Link
          href="/"
          className="group relative px-10 py-5 bg-white text-[#0B0B0B] font-black uppercase tracking-widest text-sm hover:text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 border border-transparent hover:border-primary"
        >
          <span className="relative z-10 transition-colors duration-300">Return to Nexus</span>
          <div className="absolute inset-0 bg-primary translate-y-[110%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </Link>
      </motion.div>
    </div>
  );
}
