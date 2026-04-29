"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CALENDLY_URL } from "@/src/constants/data";

const logos = ["LUMEN", "PULSE", "HEXABIT", "AVORA", "NEXORA", "VERTEX"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-36 pb-16">
      {/* Background Image Placeholder with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80")' }}
        />
        {/* Strong dark gradient overlays to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Mesh gradients for purple/blue glowing vibe with slow animation */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full mix-blend-screen" 
        />
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,rgba(123,97,255,0.16),transparent_35%,rgba(45,156,219,0.16)_70%,transparent)]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Particles placeholder */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay z-0" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        
        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Growth Systems Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-heading font-black mb-8 text-white leading-[1.02] tracking-[-0.03em] relative"
          >
            <span className="relative inline-block">Build. Scale.<span className="absolute -inset-x-2 top-1/2 h-10 -translate-y-1/2 bg-primary/25 blur-2xl -z-10" /></span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#A88BFF] to-primary bg-300% animate-gradient">
              Dominate.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-lg font-body font-light leading-relaxed"
          >
            We build complete digital ecosystems that generate leads, increase sales, and scale your brand.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-[#5F3DFF] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(123,97,255,0.4)] hover:shadow-[0_0_40px_rgba(123,97,255,0.6)]">
              Book a Call
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 group glass-premium px-8 py-4 rounded-xl font-bold text-sm transition-all hover:bg-white/10 hover:scale-105 active:scale-95 text-white border-white/10">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right Column: Floating Vertical Metrics Card */}
        <div className="w-full lg:w-[400px] flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-30">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ duration: 6, delay: 0.6, type: "spring", repeat: Infinity, repeatType: "mirror" }}
            className="w-full max-w-sm glass-premium premium-border soft-glow rounded-3xl p-8 md:p-9 bg-gradient-to-b from-[#1A1A24]/80 to-[#0B0B10]/80 flex flex-col gap-8 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Inner glow effect for the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">250+</h3>
              <p className="text-sm text-white/70 font-medium tracking-wide">Projects Delivered</p>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent relative z-10" />

            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">150+</h3>
              <p className="text-sm text-white/70 font-medium tracking-wide">Happy Clients</p>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent relative z-10" />

            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">8X</h3>
              <p className="text-sm text-white/70 font-medium tracking-wide">Average ROI Generated</p>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent relative z-10" />

            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">24/7</h3>
              <p className="text-sm text-white/70 font-medium tracking-wide">Growth Support</p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Trusted By Logos at the bottom of the Hero */}
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
              {/* Fake logo icon placeholder */}
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
