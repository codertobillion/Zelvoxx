"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonials } from "@/src/constants/data";
import { TestimonialType } from "@/src/types";

// Helper function to highlight emotional/impactful words
const highlightText = (text: string) => {
  const highlights = ["machine that prints money", "doubled", "insane", "closed our Series A", "permanently solves", "scale", "revenue", "ROI", "growth"];
  
  let result = text;
  highlights.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, '<span class="text-white font-bold bg-primary/20 px-1.5 py-0.5 rounded-md shadow-[0_0_12px_rgba(123,97,255,0.4)] border border-primary/30 inline-block mx-0.5">$1</span>');
  });
  
  return result;
};

export default function Testimonials({ data }: { data?: TestimonialType[] }) {
  const displayData = data?.length ? data : testimonials;

  return (
    <section id="testimonials" className="bg-background relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 blur-[150px] pointer-events-none z-0 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Intro */}
          <div className="sticky top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">What Clients Say</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Don't just take <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                our word for it.
              </span>
            </motion.h2>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              Real operators sharing what changed after the system was live: calmer teams, stronger pipelines, and predictable revenue.
            </p>
          </div>

          {/* Right Column: Cards Slider */}
          <div className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide relative z-10">
            {displayData.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[400px] glass-premium premium-border soft-glow p-8 rounded-[2rem] relative group bg-gradient-to-b from-white/[0.03] to-transparent hover:border-primary/40 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 text-primary">
                  <Quote className="w-16 h-16 drop-shadow-[0_0_15px_rgba(123,97,255,0.8)]" />
                </div>
                
                <p 
                  className="text-white/70 font-body text-lg leading-relaxed mb-8 relative z-10 h-[120px] md:h-[140px]"
                  dangerouslySetInnerHTML={{ __html: `"${highlightText(test.content)}"` }}
                />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-[2px] shadow-[0_0_15px_rgba(123,97,255,0.4)] shrink-0">
                    <div className="w-full h-full rounded-full bg-[#111116] border-[2px] border-[#0B0B0B] flex items-center justify-center text-white font-bold font-heading text-sm">
                      {test.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-sm tracking-wide">{test.name}</h4>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
