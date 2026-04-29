"use client";

import { motion } from "framer-motion";

const pillars = [
  { title: "Fast Execution", text: "Launch pages, ads, and funnels in days, not quarters." },
  { title: "Clear Reporting", text: "See what drives leads and revenue in one simple view." },
  { title: "Compounding Gains", text: "Every iteration improves conversion and lowers acquisition cost." },
];

export default function BuiltForGrowth() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(123,97,255,0.14),transparent_42%),radial-gradient(circle_at_85%_70%,rgba(45,156,219,0.1),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Built for Growing Businesses</p>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight max-w-3xl">
            Premium systems that convert attention into predictable growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-premium rounded-2xl p-6 border border-white/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-white font-heading font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
