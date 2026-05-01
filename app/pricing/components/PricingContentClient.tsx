"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Zap, Crown, Building2 } from "lucide-react";
import { CALENDLY_URL } from "@/src/constants/data";

interface PricingContentClientProps {
  plans: any[];
}

const planIcons: Record<string, React.ReactNode> = {
  starter: <Zap className="w-6 h-6" />,
  growth: <Crown className="w-6 h-6" />,
  enterprise: <Building2 className="w-6 h-6" />,
};

export default function PricingContentClient({ plans }: PricingContentClientProps) {
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
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full pointer-events-none"
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
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Pricing Plans</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6">
                Simple,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient">
                  transparent pricing.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                No hidden fees. No surprises. Just premium digital growth systems that deliver results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan: any, idx: number) => (
                <motion.div
                  key={plan._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary/20 to-[#0f0f14] border-2 border-primary scale-105 z-10 shadow-[0_0_60px_rgba(123,97,255,0.15)]"
                      : "bg-[#0f0f14] border border-white/10 hover:border-primary/30"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? "bg-primary/20 text-primary" : "bg-white/10 text-white"
                  }`}>
                    {planIcons[plan.slug] || <Zap className="w-6 h-6" />}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.priceNote && (
                      <span className="text-white/50 text-sm">{plan.priceNote}</span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features?.map((feature: string, featureIdx: number) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all hover:scale-105 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Custom Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <p className="text-white/60 mb-4">
                Need something custom? We build bespoke solutions for complex requirements.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:underline font-semibold"
              >
                Schedule a consultation →
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
