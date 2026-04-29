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
    <section id="system" className="py-36 md:py-52 relative overflow-hidden border-y border-primary/30">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(123,97,255,0.14),transparent_58%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.3fr] gap-20 lg:gap-32 items-center">
          
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
          <div className="relative w-full overflow-x-auto pb-14 scrollbar-hide">
            <div className="min-w-[860px] flex justify-between items-center relative px-6">
              
              {/* Animated SVG Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 z-0 px-10">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
                  <path 
                    d="M 0,0 L 1000,0" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2.5" 
                    strokeDasharray="5 5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    d="M 0,0 L 1000,0" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="4"
                    style={{ filter: "drop-shadow(0px 0px 12px rgba(123,97,255,0.95))" }}
                  />
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#7B61FF"
                    style={{ filter: "drop-shadow(0px 0px 16px rgba(123,97,255,1))" }}
                    animate={{ cx: ["0", "1000"] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "linear", repeatDelay: 0.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7B61FF" />
                      <stop offset="100%" stopColor="#2D9CDB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Nodes */}
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center group relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.15) }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full glass-premium flex flex-col items-center justify-center relative bg-[#0B0B0B] border border-white/15 group-hover:border-primary transition-all duration-500 shadow-[0_0_28px_rgba(0,0,0,0.85)] group-hover:shadow-[0_0_48px_rgba(123,97,255,0.7)] group-hover:-translate-y-3 group-hover:scale-110 cursor-pointer"
                  >
                    <div className="text-white group-hover:text-primary transition-all duration-300 scale-[1.35] group-hover:scale-[1.65]">
                      {step.icon}
                    </div>
                    
                    {/* Glowing Node Pulse */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      className="absolute inset-0 rounded-full bg-primary/40 blur-xl -z-10" 
                    />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (idx * 0.15) }}
                    className="text-sm md:text-base font-bold font-heading text-white/90 tracking-wide mt-5 absolute -bottom-10 whitespace-nowrap transition-all duration-300 group-hover:text-primary group-hover:scale-105"
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
