"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Zap, TrendingUp, Target, Users, MessageCircle, Calendar, Sparkles } from "lucide-react";
import CTASection from "@/src/components/ui/CTASection";

interface ProcessStep {
  title: string;
  description: string;
}

interface WhyZelvoxxData {
  heroTitle?: string;
  heroSubtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  problemText?: string;
  differenceTitle?: string;
  differencePoints?: string[];
  processSteps?: ProcessStep[];
  resultsText?: string;
  founderText?: string;
  audienceText?: string;
  finalCtaTitle?: string;
  finalCtaSubtitle?: string;
  whatsappNumber?: string;
  whatsappCtaText?: string;
}

interface Props {
  data: WhyZelvoxxData | null;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// Default content for fallback
const defaultData: WhyZelvoxxData = {
  heroTitle: "We Don't Run Ads. We Build Growth Systems.",
  heroSubtitle: "Most agencies sell you campaigns. We engineer ecosystems that compound revenue month after month. If you're looking for quick fixes, we're not for you.",
  ctaText: "Book a Strategy Call",
  ctaLink: "https://calendly.com/Zelvoxx",
  problemText: "Most businesses are stuck in a cycle of dependency. They hire agencies that run ads, get some results, then the campaigns fatigue and performance drops. They switch agencies. Repeat. This is the 'campaign trap'—short-term tactics without long-term infrastructure.",
  differenceTitle: "What Makes Zelvoxx Different",
  differencePoints: [
    "System-first thinking: We architect complete growth ecosystems, not isolated campaigns",
    "Revenue obsession: We optimize for profit, not vanity metrics like impressions or clicks",
    "Full-funnel ownership: From acquisition to retention, we own the entire customer journey",
    "Scalable infrastructure: Every system we build is designed to handle 10x growth",
    "Strategic partnership: We act as an extension of your team, not an external vendor",
  ],
  processSteps: [
    { title: "Audit & Strategy", description: "Deep-dive analysis of your current systems, market position, and growth bottlenecks. We identify the highest-leverage opportunities." },
    { title: "Build & Optimize", description: "We construct your custom growth infrastructure—funnels, automation, creative systems—then ruthlessly optimize based on real data." },
    { title: "Scale & Dominate", description: "With validated systems in place, we scale aggressively while maintaining efficiency. You own a competitive moat." },
  ],
  resultsText: "We don't celebrate vanity metrics. No 'impressions,' 'reach,' or 'engagement rates.' We measure one thing: revenue generated per dollar spent. Our clients typically see 3-5x ROAS within 90 days, with systems that continue compounding returns long after launch.",
  founderText: "We work with founders who think strategically, not tactically. Leaders who understand that sustainable growth requires building assets, not renting attention. If you're ready to invest in systems that scale, we're your partner.",
  audienceText: "We partner with established businesses doing $500K+ annual revenue who are ready to scale systematically. If you're pre-revenue or looking for 'cheap marketing,' we're not the right fit. But if you're serious about building a growth engine, let's talk.",
  finalCtaTitle: "Ready to Build Your Growth System?",
  finalCtaSubtitle: "Book a free strategy call. We'll audit your current approach and show you exactly where the leverage is.",
  whatsappNumber: "+1234567890",
  whatsappCtaText: "Chat on WhatsApp",
};

export default function WhyZelvoxxContent({ data }: Props) {
  const content = { ...defaultData, ...data };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-30" />

        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-white/70">Premium Digital Growth Partner</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {content.heroTitle}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {content.heroSubtitle}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={content.ctaLink || "#"}
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              {content.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                The Problem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The Campaign Trap
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                {content.problemText}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid gap-4">
              {[
                { icon: Search, text: "Agencies run isolated tactics" },
                { icon: Zap, text: "Campaigns fatigue, results drop" },
                { icon: TrendingUp, text: "No scalable infrastructure built" },
                { icon: Target, text: "Chasing vanity metrics over revenue" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-white/80 font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                {content.differenceTitle}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.differencePoints?.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our 3-Step Process
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.processSteps?.map((step, idx) => {
                const icons = [Search, Zap, TrendingUp];
                const Icon = icons[idx] || Sparkles;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="relative group"
                  >
                    {/* Connector line */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    )}

                    <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm text-primary font-semibold mb-2">Step {idx + 1}</div>
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Revenue. Not Vanity Metrics.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {content.resultsText}
              </p>
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <span className="line-through">Impressions</span>
                <span className="line-through">Reach</span>
                <span className="line-through">Engagement</span>
                <span className="text-primary font-semibold">Revenue</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              {[
                { value: "3-5x", label: "ROAS within 90 days" },
                { value: "10x", label: "Scalable infrastructure" },
                { value: "Compounding", label: "Long-term returns" },
                { value: "System", label: "Not just campaigns" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.span variants={fadeInUp} className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Philosophy
            </motion.span>

            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Founder Mindset
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-white/60 leading-relaxed">
              {content.founderText}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Ideal Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Who It's For
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {content.audienceText}
              </p>

              <div className="space-y-3">
                {[
                  "$500K+ annual revenue",
                  "Ready to scale systematically",
                  "Strategic, long-term thinking",
                  "Values infrastructure over tactics",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-30" />
              <div className="relative p-8 bg-white/5 rounded-3xl border border-white/10">
                <Users className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Not a Good Fit If:</h3>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    You're pre-revenue or just starting out
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    You want "cheap marketing"
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    You need results in 30 days or less
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    You're looking for one-off campaigns
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {content.finalCtaTitle}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              {content.finalCtaSubtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={content.ctaLink || "#"}
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`https://wa.me/${content.whatsappNumber?.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                {content.whatsappCtaText}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Standard CTA Section */}
      <CTASection
        title="Want results like these?"
        subtitle="Let's discuss how we can build a custom digital growth system for your business."
        primaryCtaText="Book a Free Strategy Call"
        secondaryCtaText="View All Services"
        secondaryCtaLink="/pricing"
      />
    </>
  );
}
