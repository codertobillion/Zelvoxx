"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import { projects } from "@/src/constants/data";
import Image from "next/image";
import { ProjectType } from "@/src/types";
import { urlForImage } from "@/sanity/lib/image";

export default function Portfolio({ data }: { data?: ProjectType[] }) {
  const displayData = data?.length ? data : projects;

  return (
    <section
      id="portfolio"
      className="py-32 md:py-44 bg-background relative overflow-hidden border-t border-white/5"
    >
      {/* Enhanced background glow with animation */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.28], scale: [1, 1.08] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -top-32 left-1/3 w-[460px] h-[460px] bg-primary/15 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* LEFT - Enhanced sticky header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32 space-y-8 lg:pr-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Work
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight">
              Results that <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                speak for themselves.
              </span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed max-w-sm">
              Conversion-focused systems, measured by pipeline and revenue outcomes.
            </p>
          </motion.div>

          {/* GRID - Proof System Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayData.map((project, idx) => {
              const imageUrl = urlForImage(project.image);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Card border with gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-2xl bg-[#0f0f14]" />
                  
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 via-accent/30 to-primary/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-300" />

                  {/* IMAGE with zoom effect */}
                  {imageUrl ? (
                    <div className="absolute inset-[1px] rounded-2xl overflow-hidden">
                      <Image
                        src={imageUrl.url()}
                        alt={project.clientName || "Portfolio Project"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-[1px] rounded-2xl overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          project.colorGradient || project.color
                        } opacity-30`}
                      />
                    </div>
                  )}

                  {/* Dark gradient overlay - intensifies on hover */}
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/80 transition-all duration-500" />
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover content overlay */}
                  <div className="absolute inset-0 p-7 flex flex-col justify-end z-10">
                    {/* Top tag */}
                    <motion.span 
                      initial={{ opacity: 0.8, y: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-6 left-6 px-3 py-1.5 text-xs font-semibold bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300"
                    >
                      {project.niche}
                    </motion.span>

                    {/* Content that transforms on hover */}
                    <div className="relative">
                      {/* Project name - always visible */}
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                        {project.client}
                      </h3>

                      {/* Result - highlighted with icon */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-lg font-semibold text-white/90">
                          {project.result}
                        </p>
                      </div>

                      {/* CTA - reveals on hover */}
                      <motion.button 
                        className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300"
                      >
                        <span className="relative">
                          View Case Study
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Subtle shimmer effect on hover */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}