"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { services } from "@/src/constants/data";
import { ServiceType } from "@/src/types";

export default function Services({ data }: { data?: ServiceType[] }) {
  const displayData = data?.length ? data.map((d: ServiceType) => {
    // @ts-ignore
    const IconComponent = LucideIcons[d.icon] || LucideIcons.Code2;
    return {
      title: d.title,
      desc: d.shortDescription || d.description,
      slug: d.slug,
      icon: <IconComponent className="w-6 h-6 relative z-10" />
    }
  }) : services;

  return (
    <section id="services" className="relative bg-background overflow-hidden border-t border-white/5 py-20 scroll-mt-24">
      {/* Section Header Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Premium Background gradients */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] z-0 rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[150px] z-0 rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="sticky top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our Services</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              End-to-end growth solutions <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                under one roof.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a href="#contact" className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 rounded-lg transition-all text-sm font-medium">
                View All Services <LucideIcons.ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayData.map((service, idx) => (
              <Link
                key={idx}
                href={service.slug ? `/service/${service.slug}` : "#"}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-premium premium-border soft-glow p-8 rounded-2xl relative group overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  <div className="relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 z-10 border border-white/5 group-hover:border-primary/30">
                    {/* Glowing icon background */}
                    <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-3 tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed font-body text-sm relative z-10">
                    {service.desc}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 z-10 opacity-70" />
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
