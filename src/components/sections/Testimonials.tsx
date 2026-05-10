"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonials } from "@/src/constants/data";
import { TestimonialType } from "@/src/types";

// Enhanced helper function to highlight emotional/impactful words
const highlightText = (text: string) => {
  const highlights = [
    "machine that prints money",
    "doubled",
    "insane",
    "closed our Series A",
    "permanently solves",
    "scales on autopilot",
    "revenue",
    "ROI",
    "growth",
    "predictable",
    "scalable infrastructure",
    "conversion rate"
  ];
  
  let result = text;
  highlights.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, '<span class="text-white font-bold bg-primary/25 px-1.5 py-0.5 rounded-md shadow-[0_0_20px_rgba(123,97,255,0.5)] border border-primary/40 inline-block mx-0.5 glow-text">$1</span>');
  });
  
  return result;
};

export default function Testimonials({ data }: { data?: TestimonialType[] }) {
  const displayData = data?.length ? data : testimonials;

  return (
    <section id="testimonials" className="py-20 sm:py-32 md:py-44 bg-background relative overflow-hidden border-t border-white/5">
      {/* Enhanced background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-primary/5 blur-[180px] pointer-events-none z-0 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[150px] pointer-events-none z-0 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Intro - Enhanced spacing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">What Clients Say</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
            >
              Don't just take <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                our word for it.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed-plus max-w-sm mx-auto lg:mx-0"
            >
              Real operators sharing what changed after the system was live: calmer teams, stronger pipelines, and predictable revenue.
            </motion.p>
          </motion.div>

          {/* Right Column: Cards Slider - Enhanced */}
          <div className="flex overflow-x-auto gap-4 sm:gap-8 pb-8 sm:pb-12 pt-4 snap-x snap-mandatory scrollbar-hide relative z-10 -mx-4 px-4 sm:mx-0 sm:px-0">
            {displayData.map((test, idx) => (
              <Link
                key={idx}
                href={test.slug ? `/testimonial/${test.slug}` : "#"}
                className="snap-center shrink-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="w-[78vw] sm:w-[440px] min-h-[320px] sm:min-h-[400px] glass-premium premium-border p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] relative group bg-gradient-to-b from-white/[0.04] to-transparent flex flex-col transition-all duration-500"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Card glow effect on hover */}
                  <motion.div
                    className="absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(123,97,255,0.2), rgba(45,156,219,0.1))",
                      filter: "blur(20px)",
                    }}
                  />
                  
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 group-hover:border-primary/40 transition-colors duration-500 pointer-events-none" />
                  
                  {/* Quote icon - larger and more prominent */}
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-15 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                    <Quote className="w-12 h-12 sm:w-20 sm:h-20 text-primary drop-shadow-[0_0_30px_rgba(123,97,255,0.6)]" />
                  </div>
                  
                  {/* Quote text - larger and more readable */}
                  <p
                    className="text-white/75 font-body text-base sm:text-xl leading-relaxed-plus mb-8 sm:mb-12 relative z-10 flex-grow"
                    dangerouslySetInnerHTML={{ __html: `"${highlightText(test.content || test.excerpt || '')}"` }}
                  />

                  {/* Client info - enhanced spacing */}
                  <div className="flex items-center gap-3 sm:gap-5 relative z-10 mt-auto pt-4 border-t border-white/5">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary via-primary to-accent p-[2px] shadow-[0_0_25px_rgba(123,97,255,0.4)] group-hover:shadow-[0_0_35px_rgba(123,97,255,0.6)] transition-shadow duration-500 shrink-0">
                      <div className="w-full h-full rounded-full bg-[#111116] border-[2px] border-[#0B0B0B] flex items-center justify-center text-white font-bold font-heading text-sm sm:text-base">
                        {test.name.charAt(0)}
                      </div>
                    </div>
                    <div className="space-y-0.5 sm:space-y-1 min-w-0">
                      <h4 className="text-white font-bold font-heading text-sm sm:text-base tracking-wide truncate">{test.name}</h4>
                      <p className="text-primary text-xs sm:text-sm font-semibold tracking-wider truncate">{test.role}{test.company ? ` at ${test.company}` : ''}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
