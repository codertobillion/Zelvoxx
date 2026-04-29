"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/src/constants/data";
import Image from "next/image";
import { ProjectType } from "@/src/types";
import { urlForImage } from "@/sanity/lib/image";

export default function Portfolio({ data }: { data?: ProjectType[] }) {
  const displayData = data?.length ? data : projects;

  return (
    <section id="portfolio" className="bg-background relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="sticky top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Work</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Results that <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">speak for themselves.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a href="#portfolio" className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 rounded-lg transition-all text-sm font-medium mt-4">
                View All Projects <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayData.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}

              >
                {project.image ? (
                  <Image 
                    src={urlForImage(project.image)?.url() || ""} 
                    alt={project.clientName || "Portfolio Project"} 
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-overlay"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.colorGradient || project.color} opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700`} />
                )}
                
                {/* Premium image overlay dimming */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                      {project.niche}
                    </span>
                  </div>
                  
                  <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-heading font-black text-white mb-1 drop-shadow-md">{project.client}</h3>
                    
                    {/* Detailed metrics reveal on hover */}
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-100 mt-2 flex flex-col gap-3">
                      <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                        {project.result} through a tailored conversion-focused growth system.
                      </p>
                      <button className="self-start px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/30 rounded-lg text-xs font-bold text-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(123,97,255,0.2)]">
                        View Case Study <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-[2px] w-6 bg-accent transition-all duration-500 group-hover:w-10 shadow-[0_0_10px_rgba(45,156,219,0.5)]" />
                      <p className="text-accent font-bold font-body text-sm tracking-wide drop-shadow-md transition-all duration-400 group-hover:translate-x-1">
                        {project.result}
                      </p>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                        Results
                      </span>
                    </div>
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
