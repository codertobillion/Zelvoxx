"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

import { caseStudies } from "@/src/constants/data";
import { CaseStudyType } from "@/src/types";

export default function CaseStudies({ data }: { data?: CaseStudyType[] }) {
  const displayData = data?.length ? data : caseStudies;

  return (
    <section id="case-studies" className="py-20 sm:py-32 bg-[#101018] relative border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none z-0 -skew-y-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="lg:sticky lg:top-32 space-y-6 text-center lg:text-left">
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
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Real strategies. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Real results.
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Case Studies */}
          <div className="space-y-6 sm:space-y-8">
            {displayData.map((study, idx) => {
              // Use slug if available, otherwise fallback to _id
              const studySlug = study.slug || study._id;
              const href = studySlug ? `/case-study/${studySlug}` : "#";

              return (
                <Link
                  key={idx}
                  href={href}
                  className="block"
                >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-premium premium-border soft-glow rounded-xl sm:rounded-2xl p-5 sm:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 bg-gradient-to-b from-white/[0.04] to-transparent touch-manipulation"
                >
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="border-b border-white/10 pb-4 sm:pb-6 mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
                    <div>
                      <p className="text-white/80 font-heading text-lg">
                        How we helped <strong className="text-white font-black">{study.clientName || study.client || "Client"}</strong> scale.
                      </p>
                      {study.industry && (
                        <span className="text-xs text-white/40 mt-1 block">{study.industry}</span>
                      )}
                    </div>
                    <span className="flex items-center gap-2 text-white/50 group-hover:text-primary text-sm font-bold transition-colors shrink-0">
                      View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative z-10">
                    {/* Problem */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-red-400">Problem</h4>
                      <p className="text-white/60 font-body leading-relaxed text-xs sm:text-sm line-clamp-3">
                        {study.problem || "Identified growth bottlenecks and conversion challenges."}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-accent">Solution</h4>
                      <p className="text-white/60 font-body leading-relaxed text-xs sm:text-sm line-clamp-3">
                        {study.solution || "Implemented strategic systems and optimization."}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-green-400">Result</h4>
                      <p className="text-white font-medium font-body leading-relaxed text-xs sm:text-sm line-clamp-3">
                        {study.result || "Significant growth and improved performance metrics."}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
