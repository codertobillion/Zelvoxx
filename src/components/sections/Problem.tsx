"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { useState, useEffect } from "react";

const painPoints = [
  "Websites that look good but don't convert.",
  "Ads that burn money with no real results.",
  "No clear funnel or customer journey.",
  "No strategy. Just random actions.",
];

export default function Problem() {
  // Mobile detection for faster animations (instant on mobile)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="problem" className="relative overflow-hidden border-t border-white/5 bg-[#0d0d12]">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute -top-24 left-0 w-[45vw] h-[45vw] bg-primary/10 blur-[140px]" /><div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-accent/10 blur-[140px]" /></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="sticky top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">The Problem</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.6 }}
              className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Most businesses don't have a growth problem. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                They have a system problem.
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0 : idx * 0.1 }}
                className="glass-premium premium-border soft-glow p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group bg-gradient-to-b from-white/[0.04] to-transparent touch-manipulation"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <XCircle className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-lg text-white/80 font-medium font-body leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
