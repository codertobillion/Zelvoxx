"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Mail, Phone, Sparkles, Zap, Clock } from "lucide-react";
import { CALENDLY_URL } from "@/src/constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const benefits = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Zap, text: "Free strategy consultation" },
  { icon: Sparkles, text: "No commitment required" },
];

export default function HomeContact() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[130px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(123, 97, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">Ready to Start?</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                Together
              </span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Ready to transform your digital presence? We're here to help you create something extraordinary.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form Card */}
            <motion.div
              variants={scaleIn}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500" />
              <div className="relative h-full p-8 lg:p-10 bg-[#0f0f14]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Send Us a Message</h3>
                  <p className="text-white/50 mb-8">
                    Fill out our contact form and we'll get back to you within 24 hours with a tailored strategy.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Book a Call Card */}
            <motion.div
              variants={scaleIn}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500" />
              <div className="relative h-full p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl rounded-3xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Book a Discovery Call</h3>
                  <p className="text-white/50 mb-8">
                    Schedule a free 15-minute call with our team to discuss your project and goals.
                  </p>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <span>Schedule Call</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits Row */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mt-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10"
                whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(123, 97, 255, 0.3)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-white/70 font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <p className="text-white/40 text-sm mb-4">Trusted by ambitious brands worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              {["LUMEN", "PULSE", "HEXABIT", "AVORA"].map((brand, idx) => (
                <span key={idx} className="text-xl font-bold text-white/30 tracking-widest">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
