"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

import { caseStudies } from "@/src/constants/data";
import { CaseStudyType } from "@/src/types";

export default function CaseStudies({ data }: { data?: CaseStudyType[] }) {
  const displayData = data?.length ? data : caseStudies;

  return (
    <section id="case-studies" className="py-28 md:py-40 bg-background relative border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none z-0 -skew-y-12" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="sticky top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Case Studies</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Real strategies. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Real results.
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Case Studies */}
          <div className="space-y-8">
            {displayData.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="glass-premium rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="border-b border-white/10 pb-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div>
                    <p className="text-white/80 font-heading text-lg">
                      How we helped <strong className="text-white font-black">{study.client}</strong> scale.
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-bold transition-colors group/btn">
                    View Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 text-primary transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {/* Problem */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-red-400">Problem</h4>
                    <p className="text-white/60 font-body leading-relaxed text-sm">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-accent">Solution</h4>
                    <p className="text-white/60 font-body leading-relaxed text-sm">{study.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-green-400">Result</h4>
                    <p className="text-white font-medium font-body leading-relaxed text-sm">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
