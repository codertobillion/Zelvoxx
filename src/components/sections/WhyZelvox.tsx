"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Trophy, Target } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Unmatched Speed",
    desc: "We deploy growth systems in weeks, not months. Speed to market is everything."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Data-Driven",
    desc: "Every decision is backed by hard data and analytics, eliminating guesswork."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Battle-Tested",
    desc: "We've spent millions on ads and funnels to know exactly what works today."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Results First",
    desc: "We don't care about awards. We only care about your bottom-line revenue."
  }
];

export default function WhyZelvox() {
  return (
    <section className="bg-[#101018] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none z-0 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Why Us</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black text-white"
          >
            The Zelvox <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Advantage.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-premium premium-border soft-glow p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-b from-white/[0.04] to-transparent group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold font-heading text-white mb-3 tracking-wide">{reason.title}</h3>
              <p className="relative z-10 text-white/60 font-body leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
