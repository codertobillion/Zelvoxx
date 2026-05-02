"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { CALENDLY_URL } from "@/src/constants/data";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  variant?: "default" | "minimal" | "large";
}

export default function CTASection({
  title = "Ready to transform your digital presence?",
  subtitle = "Let's build a system that generates predictable revenue for your business.",
  primaryCtaText = "Book a Free Strategy Call",
  primaryCtaLink = CALENDLY_URL,
  secondaryCtaText = "View Our Work",
  secondaryCtaLink = "/portfolio",
  variant = "default",
}: CTASectionProps) {
  const isLarge = variant === "large";
  const isMinimal = variant === "minimal";

  return (
    <section className={`relative overflow-hidden ${isLarge ? "py-32" : "py-20"} ${isMinimal ? "border-t border-white/5" : ""}`}>
      {/* Background Effects */}
      {!isMinimal && (
        <>
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"
          />
        </>
      )}

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`font-heading font-black text-white mb-6 ${isLarge ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-4xl lg:text-5xl"}`}>
            {title}
          </h2>
          <p className={`text-white/60 mb-10 max-w-2xl mx-auto ${isLarge ? "text-lg md:text-xl" : ""}`}>
            {subtitle}
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isMinimal ? "" : "flex-wrap"}`}>
            {/* Primary CTA */}
            <Link
              href={primaryCtaLink}
              target={primaryCtaLink.startsWith("http") ? "_blank" : undefined}
              rel={primaryCtaLink.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(123,97,255,0.3)]"
            >
              <Calendar className="w-5 h-5" />
              {primaryCtaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            {!isMinimal && (
              <Link
                href={secondaryCtaLink}
                className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 border border-white/10"
              >
                {secondaryCtaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Trust indicators */}
          {!isMinimal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-6 text-white/40 text-sm"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Free consultation
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>No commitment required</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Response within 24h</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
