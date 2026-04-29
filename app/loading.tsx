"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 min-h-screen bg-[#0B0B0B] z-[9999] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="relative w-20 h-20">
          {/* Inner pulsating glow */}
          <motion.div 
            className="absolute inset-4 bg-primary/20 rounded-full blur-md"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Outer primary spinner */}
          <motion.div
            className="absolute inset-0 border-t-2 border-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner accent spinner */}
          <motion.div
            className="absolute inset-2 border-r-2 border-b-2 border-transparent border-r-accent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: [0.4, 1, 0.4] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="text-white tracking-[0.4em] font-heading font-bold text-xs uppercase relative"
        >
          Loading System Object
        </motion.div>
      </motion.div>
    </div>
  );
}
