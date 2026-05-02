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
              const imageUrl = urlForImage(project.thumbnail || project.image);
              const displayName = project.clientName || project.title || "Project";
              const hasContent = project.niche || project.result || project.excerpt;

              return (
                <Link
                  key={idx}
                  href={project.slug ? `/case-study/${project.slug}` : "#"}
                  className="group block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="relative rounded-2xl overflow-hidden bg-[#0f0f14] border border-white/10 hover:border-primary/40 transition-all duration-300 h-full"
                  >

                    {/* IMAGE */}
                    {imageUrl ? (
                      <div className="relative h-[240px]">
                        <Image
                          src={imageUrl.url()}
                          alt={displayName}
                          fill
                          sizes="100vw"
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="h-[240px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-4xl font-black text-white/20">{displayName.charAt(0)}</span>
                      </div>
                    )}

                    {/* CONTENT */}
                    <div className="p-6 space-y-4">

                      {/* TAG */}
                      {project.niche && (
                        <span className="inline-block text-xs px-3 py-1 bg-white/10 rounded-full text-white/70">
                          {project.niche}
                        </span>
                      )}

                      {/* TITLE */}
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {displayName}
                      </h3>

                      {/* EXCERPT */}
                      {project.excerpt && (
                        <p className="text-white/60 text-sm line-clamp-2">{project.excerpt}</p>
                      )}

                      {/* RESULT */}
                      {project.result && (
                        <div className="flex items-center gap-2 text-white/90">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-sm">{project.result}</span>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-primary">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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