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
    <section id="system" className="py-32 md:py-44 relative overflow-hidden border-y border-white/5">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.3fr] gap-20 lg:gap-32 items-center">
          
          {/* LEFT */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Our System
              </span>
            </motion.div>

            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.05]">
              A proven system that turns brands into <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                revenue machines.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT FLOW */}
          <div className="relative w-full overflow-x-auto pb-10">
            <div className="min-w-[600px] flex justify-between items-center relative">

              {/* LINE */}
              <div className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 z-0 px-10">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
                  <path
                    d="M 0,20 C 180,20 220,20 400,20 C 580,20 620,20 800,20 C 980,20 1020,20 1200,20"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                  />
                  <motion.path
                    d="M 0,20 C 180,20 220,20 400,20 C 580,20 620,20 800,20 C 980,20 1020,20 1200,20"
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.05, pathOffset: 0 }}
                    animate={{ pathLength: [0.1, 0.2, 0.1], pathOffset: [0, 1] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(123,97,255,0.9))" }}
                  />
                  <motion.circle
                    cx="0"
                    cy="20"
                    r="4"
                    fill="#7B61FF"
                    animate={{ cx: [0, 1200] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "drop-shadow(0 0 10px rgba(123,97,255,1))" }}
                  />
                  <motion.circle
                    cx="0"
                    cy="20"
                    r="3"
                    fill="#2D9CDB"
                    animate={{ cx: [0, 1200] }}
                    transition={{ duration: 4.4, repeat: Infinity, ease: "linear", delay: 0.8 }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(45,156,219,1))" }}
                  />
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7B61FF" />
                      <stop offset="50%" stopColor="#A88BFF" />
                      <stop offset="100%" stopColor="#2D9CDB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* NODES */}
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10">
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0B0B0B] flex items-center justify-center shadow-lg border border-white/10 hover:border-primary/70 transition-all"
                  >
                    <div className="text-white hover:text-primary transition">
                      {step.icon}
                    </div>
                  </motion.div>

                  <p className="mt-4 text-sm text-white/70 font-semibold">
                    {step.title}
                  </p>
                </div>
              ))}

            </div>

            <p className="text-center mt-16 text-sm text-white/50 hidden md:block">
              Everything connected. Everything optimized. Everything built for growth.
            </p>
          </div>

         </div>
       </div>
     </section>
   );
 }