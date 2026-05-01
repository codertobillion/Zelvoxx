"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import PortfolioContent from "@/src/components/sections/PortfolioContent";

interface PortfolioContentClientProps {
  caseStudiesData: any[];
}

export default function PortfolioContentClient({ caseStudiesData }: PortfolioContentClientProps) {
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
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Our Portfolio</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6">
                Results that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient">
                  speak for themselves.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                Conversion-focused systems, measured by pipeline and revenue outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioContent data={caseStudiesData} />
      </div>
    </main>
  );
}
