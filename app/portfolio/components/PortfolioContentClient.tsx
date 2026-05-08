"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, TrendingUp, Target, Zap } from "lucide-react";
import PortfolioContent from "@/src/components/sections/PortfolioContent";
import DynamicBackground from "@/src/components/ui/DynamicBackground";

interface PortfolioContentClientProps {
  caseStudiesData: any[];
}

const stats = [
  { icon: TrendingUp, value: "$47M+", label: "Revenue Generated" },
  { icon: Target, value: "200%", label: "Avg. ROI Increase" },
  { icon: Zap, value: "50+", label: "Projects Delivered" },
];

export default function PortfolioContentClient({ caseStudiesData }: PortfolioContentClientProps) {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30 relative">
      {/* Dynamic Background */}
      <DynamicBackground variant="purple" intensity="high" />

      {/* Page Content */}
      <div className="relative z-10 pt-24">
        {/* Page Header */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-primary/20 rounded-full"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Our Portfolio</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6"
              >
                Results that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient">
                  speak for themselves.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
              >
                Conversion-focused systems, measured by pipeline and revenue outcomes.
              </motion.p>

              {/* Stats row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-8"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05, borderColor: "rgba(123, 97, 255, 0.3)" }}
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-white/50">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioContent data={caseStudiesData} />
      </div>
    </main>
  );
}
