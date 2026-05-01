"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, TrendingUp, FileText } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

interface CaseStudiesContentClientProps {
  caseStudiesData: any[];
}

export default function CaseStudiesContentClient({ caseStudiesData }: CaseStudiesContentClientProps) {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      {/* Global Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      {/* Page Content */}
      <div className="pt-24">
        {/* Page Header */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
          />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Case Studies</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6">
                Deep-dive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient">
                  success stories.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                See exactly how we transform businesses with conversion-focused digital systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((study: any, idx: number) => {
                const imageUrl = urlForImage(study.image);
                
                return (
                  <motion.div
                    key={study._id || idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden bg-[#0f0f14] border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image */}
                    {imageUrl ? (
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={imageUrl.url()}
                          alt={study.clientName || study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] to-transparent" />
                      </div>
                    ) : (
                      <div className="h-[200px] bg-gradient-to-br from-primary/20 to-accent/20" />
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/70 mb-4 inline-block">
                        {study.industry || study.niche || "Case Study"}
                      </span>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        {study.clientName || study.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-primary mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">{study.result}</span>
                      </div>
                      
                      <p className="text-white/60 text-sm line-clamp-3 mb-6">
                        {study.problem}
                      </p>

                      {/* CTA */}
                      {study.slug && (
                        <Link
                          href={`/case-study/${study.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                        >
                          Read Full Case Study
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {caseStudiesData.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60">No case studies found. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
