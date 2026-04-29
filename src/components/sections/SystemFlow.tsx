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
    <section id="system" className="py-28 md:py-40 relative overflow-hidden">
      
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
          <div className="relative w-full overflow-x-auto pb-8">
            <div className="min-w-[600px] flex justify-between items-center relative">

              {/* LINE */}
              <div className="absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 z-0 px-10">
                <div className="w-full h-[2px] bg-white/10" />
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