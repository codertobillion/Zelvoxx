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
    <section
      id="portfolio"
      className="py-28 md:py-40 bg-background relative overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.28], scale: [1, 1.08] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -top-32 left-1/3 w-[460px] h-[460px] bg-primary/15 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* LEFT */}
          <div className="sticky top-32 space-y-8 lg:pr-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Work
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight">
              Results that <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                speak for themselves.
              </span>
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
              Conversion-focused systems, measured by pipeline and revenue outcomes.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayData.map((project, idx) => {
              const imageUrl = urlForImage(project.image);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-[#111116] cursor-pointer border border-white/10 hover:border-primary/40 transition-all duration-500"
                >
                  {/* IMAGE */}
                  {imageUrl ? (
                    <Image
                      src={imageUrl.url()}
                      alt={project.clientName || "Portfolio Project"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        project.colorGradient || project.color
                      } opacity-20`}
                    />
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <span className="px-3 py-1 text-xs bg-white/10 rounded text-white">
                      {project.niche}
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.client}
                      </h3>

                      <p className="text-sm text-white/70 mb-4">
                        {project.result}
                      </p>

                      <button className="text-sm flex items-center gap-2 text-primary">
                        View Case Study <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
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