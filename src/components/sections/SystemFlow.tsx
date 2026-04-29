"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, Filter, Target, DollarSign } from "lucide-react";

const steps = [
  { icon: <Sparkles className="w-5 h-5" />, title: "Brand" },
  { icon: <Layout className="w-5 h-5" />, title: "Website" },
  { icon: <Filter className="w-5 h-5" />, title: "Funnel" },
  { icon: <Target className="w-5 h-5" />, title: "Ads" },
  { icon: <DollarSign className="w-5 h-5" />, title: "Sales" },
];

export default function SystemFlow() {
  return (
    <section id="system" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Intro */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our System</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              A proven system that turns brands into <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                revenue machines.
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Flow */}
          <div className="relative w-full overflow-x-auto pb-8 scrollbar-hide">
            <div className="min-w-[600px] flex justify-between items-center relative">
              
              {/* Animated SVG Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 px-8">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
                  <path 
                    d="M 0,0 L 1000,0" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    d="M 0,0 L 1000,0" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="3"
                    style={{ filter: "drop-shadow(0px 0px 8px rgba(123,97,255,0.8))" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7B61FF" />
                      <stop offset="100%" stopColor="#2D9CDB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              
              <motion.div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(123,97,255,0.9)] z-20"
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [0, 560, 0], opacity: [0, 1, 0] }}
                viewport={{ once: false }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Nodes */}
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center group relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.15) }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-premium flex flex-col items-center justify-center relative bg-[#0B0B0B] group-hover:border-primary/80 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_30px_rgba(123,97,255,0.4)] group-hover:-translate-y-2 group-hover:scale-105 cursor-pointer"
                  >
                    <div className="text-white group-hover:text-primary transition-colors duration-300 scale-125 group-hover:scale-150">
                      {step.icon}
                    </div>
                    
                    {/* Glowing Node Pulse */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      className="absolute inset-0 rounded-full bg-primary/30 blur-xl -z-10" 
                    />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (idx * 0.15) }}
                    className="text-xs md:text-sm font-bold font-heading text-white tracking-wide mt-4 absolute -bottom-8 whitespace-nowrap"
                  >
                    {step.title}
                  </motion.h3>
                </div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="text-center mt-16 text-sm text-white/50 w-full hidden md:block"
            >
              Everything connected. Everything optimized. Everything built for growth.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
