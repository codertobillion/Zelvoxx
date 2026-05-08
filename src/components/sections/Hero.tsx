"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { CALENDLY_URL } from "@/src/constants/data";

const logos = ["LUMEN", "PULSE", "HEXABIT", "AVORA", "NEXORA", "VERTEX"];

// Floating particles configuration
const particles = [
  { size: 4, x: "15%", y: "20%", delay: 0, duration: 20 },
  { size: 3, x: "85%", y: "15%", delay: 2, duration: 25 },
  { size: 5, x: "70%", y: "60%", delay: 4, duration: 22 },
  { size: 2, x: "25%", y: "70%", delay: 1, duration: 28 },
  { size: 4, x: "90%", y: "80%", delay: 3, duration: 24 },
  { size: 3, x: "40%", y: "35%", delay: 5, duration: 26 },
  { size: 2, x: "60%", y: "85%", delay: 2.5, duration: 30 },
  { size: 4, x: "10%", y: "50%", delay: 1.5, duration: 23 },
];

interface HeroData {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface StatItem {
  label?: string;
  value?: string;
}

interface HeroProps {
  data?: HeroData | null;
  stats?: StatItem[];
}

// Default stats fallback
const defaultStats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "8X", label: "Average ROI Generated" },
  { value: "24/7", label: "Growth Support" },
];

export default function Hero({ data, stats }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-32 pb-10">
      <div className="absolute inset-0 z-0">
        {/* Background Image with enhanced overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

        {/* Animated gradient orbs - slow cinematic movement */}
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/25 blur-[180px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.25, 1], 
            opacity: [0.2, 0.4, 0.2],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/20 blur-[180px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full mix-blend-screen"
        />

        {/* Slow animated gradient beam */}
        <motion.div
          aria-hidden="true"
          animate={{ x: [-30, 30, -30], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 left-1/2 w-[40vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl"
        />

        {/* Floating particles layer - low opacity for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-full bg-white"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.x,
                top: particle.y,
                filter: "blur(1px)",
              }}
              animate={{
                y: [0, -30, 0, 20, 0],
                x: [0, 15, -10, 5, 0],
                opacity: [0.1, 0.25, 0.15, 0.3, 0.1],
                scale: [1, 1.2, 0.9, 1.1, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Subtle animated gradient mesh */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(123, 97, 255, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(123, 97, 255, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(45, 156, 219, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(123, 97, 255, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Animated Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="relative group cursor-pointer">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(123, 97, 255, 0.3)",
                    "0 0 40px rgba(123, 97, 255, 0.5)",
                    "0 0 20px rgba(123, 97, 255, 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl blur-xl"
              />
              <div className="relative glass-premium rounded-2xl px-6 py-3 border border-white/10">
                <span className="text-3xl md:text-4xl font-heading font-black tracking-widest bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  ZELVOX
                </span>
                <span className="text-3xl md:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]">
                  X
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading with subtle glow effect */}
          <div className="relative">
            {/* Glow behind heading */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 bg-primary/20 blur-[80px] rounded-full pointer-events-none z-0"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-black mb-6 text-white leading-[1.05] tracking-tighter"
            >
              Build. Scale. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#A88BFF] to-primary bg-300% animate-gradient glow-text">
                Dominate.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-lg font-body font-light leading-relaxed"
          >
            {data?.subtitle || "We build complete digital ecosystems that generate leads, increase sales, and scale your brand."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href={data?.ctaLink || CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full sm:w-auto inline-flex justify-center items-center gap-2 text-white px-8 py-4 rounded-xl font-bold text-sm overflow-hidden group"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-[#8B71FF] to-primary bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Shadow layer */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 40px rgba(123,97,255,0.5), 0 10px 40px rgba(123,97,255,0.3)",
                }}
              />
              <span className="relative z-10">{data?.ctaText || "Book a Call"}</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white overflow-hidden group glass-premium border border-white/10"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 30px rgba(123,97,255,0.2), inset 0 0 20px rgba(123,97,255,0.05)",
                }}
              />
              <MessageCircle className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>

        <div className="w-full lg:w-[400px] flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-30">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="w-full max-w-sm glass-premium rounded-3xl p-8 border border-white/10 bg-gradient-to-b from-[#1A1A24]/80 to-[#0B0B10]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-6 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
            
            {/* Logo in stats card */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center mb-2"
            >
              <span className="text-2xl font-heading font-black tracking-widest bg-gradient-to-r from-white/60 via-white/60 to-white/40 bg-clip-text text-transparent">
                ZELVOX
              </span>
              <span className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1]/60 via-[#8b5cf6]/60 to-[#a78bfa]/60">
                X
              </span>
            </motion.div>
            {(stats?.length ? stats : defaultStats).map((stat, idx) => (
              <div key={idx}>
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-white/70 font-medium tracking-wide">{stat.label}</p>
                </div>
                {idx < (stats?.length ? stats : defaultStats).length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent relative z-10 mt-8" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full mt-24 relative z-20 max-w-7xl mx-auto px-6 pb-12 lg:pb-0"
      >
        <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-8 lg:mb-12">
          Trusted By Growing Brands Worldwide
        </p>
        <div className="flex flex-wrap gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/60" />
              </div>
              <span className="font-heading font-bold text-lg md:text-xl tracking-wider text-white/80">{logo}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}