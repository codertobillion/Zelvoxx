"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";

interface PortfolioContentProps {
  data: any[];
}

export default function PortfolioContent({ data }: PortfolioContentProps) {
  // Limit to first 3 items
  const displayData = data?.slice(0, 3) || [];
  const hasMore = data?.length > 3;

  // Mobile detection for faster animations
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-20 sm:py-32 md:py-44 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Work
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Results that <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                speak for themselves.
              </span>
            </h2>

            <p className="text-white/60 max-w-sm mx-auto lg:mx-0">
              Conversion-focused systems, measured by revenue and growth.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            {displayData.map((project, idx) => {
              const imageUrl = urlForImage(project.thumbnail || project.image);
              const displayName = project.clientName || project.title || "Project";
              const hasContent = project.niche || project.result || project.excerpt;
              // Use slug if available, otherwise fallback to _id for testing
              const projectSlug = project.slug || project._id;
              const href = projectSlug ? `/case-study/${projectSlug}` : "#";

              // No delay on mobile
              const delay = isMobile ? 0 : idx * 0.1;

              return (
                <Link
                  key={idx}
                  href={href}
                  className="group block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0f0f14] border border-white/10 hover:border-primary/40 transition-all duration-300 h-full touch-manipulation"
                  >

                    {/* IMAGE */}
                    {imageUrl ? (
                      <div className="relative h-[200px] sm:h-[240px]">
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
                      <div className="h-[200px] sm:h-[240px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
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

            {/* View All Button */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="col-span-1 sm:col-span-2 flex justify-center mt-4 sm:mt-6"
              >
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="text-white font-semibold text-sm sm:text-base">View All Projects</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}