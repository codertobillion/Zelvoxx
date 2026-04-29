"use client";

import { motion } from "framer-motion";

const companies = [
  "Apex Financial",
  "Luminary MedSpa",
  "Velocity SaaS",
  "Strata Real Estate",
  "Evolve E-commerce",
  "Nexus Tech Solutions",
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-background border-b border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <p className="text-white/40 font-body uppercase tracking-widest text-sm font-semibold whitespace-nowrap shrink-0">
          Built for growing businesses
        </p>
        
        {/* Simple Marquee */}
        <div className="relative flex overflow-hidden w-full mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            animate={{ x: [0, -1035] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {/* Double the array for seamless looping */}
            {[...companies, ...companies, ...companies].map((company, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-heading font-bold text-white/20 uppercase tracking-wide flex-shrink-0 hover:text-white/50 transition-all duration-300 cursor-default hover:scale-105">
                {company}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
