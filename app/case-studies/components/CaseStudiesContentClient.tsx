"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, TrendingUp, FileText, BarChart3, Award } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import DynamicBackground from "@/src/components/ui/DynamicBackground";

interface CaseStudiesContentClientProps {
  caseStudiesData: any[];
}

export default function CaseStudiesContentClient({ caseStudiesData }: CaseStudiesContentClientProps) {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30 relative">
      {/* Dynamic Background */}
      <DynamicBackground variant="blue" intensity="high" />

      {/* Page Content */}
      <div className="relative z-10 pt-24">
        {/* Page Header */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Floating data points animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                style={{
                  left: `${5 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <BarChart3 className="w-3 h-3 text-primary/60" />
                <span className="text-xs text-white/40">+{200 + i * 50}%</span>
              </motion.div>
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Case Studies</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6"
              >
                Deep-dive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient">
                  success stories.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
              >
                See exactly how we transform businesses with conversion-focused digital systems.
              </motion.p>

              {/* Stats highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 mt-10"
              >
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm">4 Industry Awards</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm">340% Avg. ROI</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-sm">$47M+ Generated</span>
                </div>
              </motion.div>
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
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative rounded-2xl overflow-hidden bg-[#0f0f14]/80 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                    
                    {/* Image */}
                    {imageUrl ? (
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={imageUrl.url()}
                          alt={study.clientName || study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] to-transparent" />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    ) : (
                      <div className="h-[200px] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
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
