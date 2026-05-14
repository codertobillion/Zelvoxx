"use client";

import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineGrow: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

const headerStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const contentReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.14 },
  },
};

type LegalPageLayoutProps = {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  effectiveDate,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <motion.div
          className="absolute -top-32 -right-16 w-[min(100vw,28rem)] h-[min(100vw,28rem)] max-w-[480px] max-h-[480px] rounded-full bg-primary/30 blur-[100px] sm:blur-[128px]"
          animate={{
            x: [0, 24, 0],
            y: [0, 16, 0],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] -left-24 w-[min(100vw,22rem)] h-[min(100vw,22rem)] rounded-full bg-accent/25 blur-[90px] sm:blur-[110px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 28, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 right-[15%] w-72 h-72 rounded-full bg-violet-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.38, 0.2],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        <motion.header
          variants={headerStagger}
          initial="hidden"
          animate="visible"
          className="mb-12 sm:mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.22em] text-primary mb-3">
              Legal
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-heading font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          <motion.div
            variants={lineGrow}
            className="h-[2px] w-28 sm:w-36 rounded-full bg-gradient-to-r from-primary via-violet-400/80 to-transparent origin-left mb-5"
          />
          <motion.p
            variants={fadeInUp}
            className="text-white/50 font-body text-sm sm:text-base"
          >
            Effective Date: {effectiveDate}
          </motion.p>
        </motion.header>

        <motion.div
          variants={contentReveal}
          initial="hidden"
          animate="visible"
          className="space-y-8 sm:space-y-12 [&>section]:scroll-mt-24 [&>section]:transition-transform [&>section]:duration-300 [&>section]:hover:-translate-y-0.5"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
