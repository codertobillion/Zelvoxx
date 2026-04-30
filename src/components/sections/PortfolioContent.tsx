"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface PortfolioContentProps {
  data: any[];
}

export default function PortfolioContent({ data }: PortfolioContentProps) {
  return (
    <section className="py-32 md:py-44 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

          {/* LEFT */}
          <div className="sticky top-32 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Work
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Results that <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                speak for themselves.
              </span>
            </h2>

            <p className="text-white/60 max-w-sm">
              Conversion-focused systems, measured by revenue and growth.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {data?.map((project, idx) => {
              const imageUrl = urlForImage(project.image);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-[#0f0f14] border border-white/10 hover:border-primary/40 transition-all duration-300"
                >

                  {/* IMAGE */}
                  {imageUrl ? (
                    <div className="relative h-[240px]">
                      <Image
                        src={imageUrl.url()}
                        alt={project.clientName || "Project"}
                        fill
                        sizes="100vw"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-[240px] bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                  )}

                  {/* CONTENT */}
                  <div className="p-6 space-y-4">

                    {/* TAG */}
                    <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/70">
                      {project.niche || "Case Study"}
                    </span>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-white">
                      {project.clientName || project.title}
                    </h3>

                    {/* RESULT */}
                    <div className="flex items-center gap-2 text-white/90">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>{project.result}</span>
                    </div>

                    {/* CTA (ALWAYS VISIBLE NOW) */}
                    {project.slug && (
                      <Link
                        href={`/case-study/${project.slug}`}
                        className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-primary hover:underline"
                      >
                        View Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}

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