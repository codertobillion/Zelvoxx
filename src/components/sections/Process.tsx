"use client";

import { motion } from "framer-motion";

const processes = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We analyze metrics, pinpointing exactly where your business bleeds revenue."
  },
  {
    num: "02",
    title: "System Strategy",
    desc: "We architect a bespoke blueprint for your growth system, detailing UX and funnels."
  },
  {
    num: "03",
    title: "Build & Integration",
    desc: "Our engineers construct your platform with precision, integrating tracking & tools."
  },
  {
    num: "04",
    title: "Launch & Dominate",
    desc: "Your new growth engine goes live. We monitor data to aggressively optimize."
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-[#0c0d14] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(123,97,255,0.04),transparent_30%,transparent_70%,rgba(45,156,219,0.04))]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">The Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
          >
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Execute.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/5 z-0" />
          
          {processes.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col group"
            >
              <div className="mb-6">
                <div className="text-6xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-primary group-hover:to-accent transition-all duration-700">
                  {step.num}
                </div>
              </div>

              <div className="pr-4 border-l-2 border-white/10 pl-6 group-hover:border-primary transition-colors duration-500 h-full">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
