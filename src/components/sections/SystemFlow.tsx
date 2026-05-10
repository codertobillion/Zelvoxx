"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, Filter, Target, DollarSign } from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: Sparkles, title: "Brand", desc: "Identity & Positioning" },
  { icon: Layout, title: "Website", desc: "High-Converting Design" },
  { icon: Filter, title: "Funnel", desc: "Lead Capture System" },
  { icon: Target, title: "Ads", desc: "Paid Acquisition" },
  { icon: DollarSign, title: "Sales", desc: "Revenue Optimization" },
];

export default function SystemFlow() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section id="system" className="py-32 md:py-44 relative overflow-hidden border-y border-white/5">
      
      {/* Background Glow with animated pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-background to-background pointer-events-none" />
      
      {/* Subtle animated gradient orbs */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.3fr] gap-20 lg:gap-32 items-center">
          
          {/* LEFT */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Our System
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.05]"
            >
              A proven system that turns brands into <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                revenue machines.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT FLOW */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full overflow-visible"
          >
            {/* Desktop Horizontal Flow */}
            <div className="hidden md:flex min-w-[600px] justify-between items-center relative">

              {/* Connecting Line Container */}
              <div className="absolute top-1/2 left-[12%] right-[12%] h-10 -translate-y-1/2 z-0">
                {/* Base line - subtle dashed */}
                <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
                  <path
                    d="M 0,20 L 100%,20"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                  />
                  
                  {/* Animated glowing flow line */}
                  <motion.path
                    d="M 0,20 L 100%,20"
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Pulsing animated dots moving left to right */}
                  <motion.circle
                    cx="0"
                    cy="20"
                    r="5"
                    fill="#7B61FF"
                    animate={{ cx: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      filter: "drop-shadow(0 0 12px rgba(123,97,255,1)) drop-shadow(0 0 24px rgba(123,97,255,0.6))",
                    }}
                  />
                  <motion.circle
                    cx="0"
                    cy="20"
                    r="4"
                    fill="#A88BFF"
                    animate={{ cx: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.3 }}
                    style={{ 
                      filter: "drop-shadow(0 0 8px rgba(168,139,255,1))",
                      opacity: 0.8,
                    }}
                  />
                  <motion.circle
                    cx="0"
                    cy="20"
                    r="3"
                    fill="#2D9CDB"
                    animate={{ cx: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2.6 }}
                    style={{ 
                      filter: "drop-shadow(0 0 8px rgba(45,156,219,1))",
                      opacity: 0.7,
                    }}
                  />
                  
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#A88BFF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#2D9CDB" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* NODES */}
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isHovered = hoveredNode === idx;
                
                return (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center relative z-10 mx-2 md:mx-4"
                    onMouseEnter={() => setHoveredNode(idx)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Pulse ring animation - positioned relative to node */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.8], 
                        opacity: isHovered ? [0.6, 0] : [0.4, 0],
                      }}
                      transition={{ 
                        duration: isHovered ? 0.8 : 2, 
                        repeat: Infinity,
                        delay: idx * 0.2,
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/30 pointer-events-none"
                    />
                    
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute -inset-2 rounded-full border-2 border-primary/50"
                      style={{ 
                        boxShadow: "0 0 30px rgba(123,97,255,0.4), inset 0 0 20px rgba(123,97,255,0.1)",
                      }}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.5 }}
                      whileHover={{ scale: 1.08 }}
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-[#14141c] to-[#0a0a0f] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 hover:border-primary/60 cursor-pointer transition-all duration-500 group"
                    >
                      {/* Inner gradient shimmer */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all duration-500" />
                      
                      {/* Icon */}
                      <div className="relative z-10 text-white/70 group-hover:text-primary transition-colors duration-300">
                        <Icon className={`w-6 h-6 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
                      </div>
                      
                      {/* Node connection dot */}
                      <div className="absolute bottom-1 w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(123,97,255,0.8)] transition-all duration-300" />
                    </motion.div>

                    {/* Title with hover highlight */}
                    <motion.p 
                      animate={{ 
                        y: isHovered ? -2 : 0,
                        color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.6)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm font-bold tracking-wide"
                    >
                      {step.title}
                    </motion.p>
                    
                    {/* Description on hover */}
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-primary/80 mt-1 font-medium"
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                );
              })}

            </div>

            {/* Mobile Vertical Flow */}
            <div className="flex md:hidden flex-col gap-6 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#14141c] to-[#0a0a0f] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/10 shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{step.title}</p>
                      <p className="text-white/50 text-xs">{step.desc}</p>
                    </div>
                    <div className="text-lg font-black text-white/10">{String(idx + 1).padStart(2, '0')}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom tagline with enhanced styling */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-12 text-sm text-white/50 hidden md:block tracking-wide"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                Everything connected. Everything optimized. Everything built for growth.
                <span className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </span>
            </motion.p>
          </motion.div>

         </div>
       </div>
     </section>
   );
 }