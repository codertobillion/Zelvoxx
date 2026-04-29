"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { CALENDLY_URL } from "@/src/constants/data";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-background relative overflow-hidden" id="cta">
      {/* Space Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
          alt="Space Background"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-12 md:p-24 rounded-[3rem] relative overflow-hidden shadow-2xl group border border-white/10 glass-premium"
        >
          <div className="absolute inset-0 bg-[#0B0B0B]/60 backdrop-blur-md z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-80 pointer-events-none z-0" />

          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", type: "tween" }}
            className="absolute top-12 left-12 md:top-24 md:left-24 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/10 overflow-hidden shadow-lg shadow-primary/20 z-0 hidden sm:block"
          >
            <Image src="https://i.pravatar.cc/150?u=11" alt="Client avatar" fill sizes="64px" className="object-cover" />
          </motion.div>
          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1, type: "tween" }}
            className="absolute bottom-12 right-12 md:bottom-24 md:right-24 w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white/10 overflow-hidden shadow-lg shadow-accent/20 z-0 hidden sm:block"
          >
            <Image src="https://i.pravatar.cc/150?u=22" alt="Client avatar" fill sizes="80px" className="object-cover" />
          </motion.div>
          <motion.div 
            animate={{ y: [-5, 5, -5] }} 
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5, type: "tween" }}
            className="absolute top-1/2 right-8 md:right-16 w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white/10 overflow-hidden shadow-lg shadow-white/10 z-0 hidden lg:block"
          >
            <Image src="https://i.pravatar.cc/150?u=33" alt="Client avatar" fill sizes="56px" className="object-cover" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Built for Growing Businesses
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-8 leading-[1.1] drop-shadow-2xl">
              Ready to stop wasting time and start <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient relative inline-block">
                dominating your market?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 font-body font-light mb-14 max-w-3xl mx-auto leading-relaxed">
              Stop bleeding cash on broken marketing and weak templates. We build <strong className="text-white font-medium">lethal growth systems</strong> that crush your competition and scale your revenue on autopilot.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 rounded-full font-black text-lg tracking-wide w-full sm:w-auto uppercase overflow-hidden"
                style={{
                  boxShadow: "0 0 40px rgba(255,255,255,0.2), 0 10px 40px rgba(255,255,255,0.1)",
                }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-[length:200%_100%]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Glow expansion on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                  style={{
                    boxShadow: "0 0 60px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.2)",
                  }}
                />
                <PhoneCall className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Book Your Growth Call</span>
              </motion.a>
              
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-12 py-6 rounded-full font-bold text-lg backdrop-blur-md tracking-wide w-full sm:w-auto uppercase overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                  style={{
                    boxShadow: "0 0 40px rgba(123,97,255,0.2), inset 0 0 20px rgba(123,97,255,0.05)",
                  }}
                />
                <span className="relative z-10">See Pricing</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-sm mt-12 font-body uppercase tracking-widest font-bold flex items-center justify-center gap-2 w-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Limited onboarding this month. Only <span className="text-white">2 build slots</span> left.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}