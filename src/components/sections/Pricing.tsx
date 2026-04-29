"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Growth Foundations",
    price: "₹15,000",
    description: "For businesses who need a high-converting digital storefront.",
    features: [
      "Custom UI/UX Design",
      "Next.js Lightning Fast Build",
      "Basic SEO Implementation",
      "CMS Integration",
      "1x Conversion Funnel",
      "30 Days Support"
    ],
    highlighted: false,
    cta: "Book Discovery Call"
  },
  {
    name: "Revenue System",
    price: "₹49,000",
    description: "The complete digital growth engine for aggressive scaling.",
    features: [
      "Everything in Foundations",
      "Advanced Funnel Architectures",
      "Custom E-commerce/SaaS Logic",
      "CRM & Sales Automation",
      "Meta & Google Ads Setup",
      "Conversion Rate Optimization (CRO)",
      "90 Days VIP Support"
    ],
    highlighted: true,
    cta: "Start Scaling Now"
  },
  {
    name: "Enterprise Partner",
    price: "₹99,000",
    description: "Bespoke engineering and fractional CMO-level guidance.",
    features: [
      "Everything in Revenue System",
      "Dedicated Full-Stack Team",
      "Custom Web Apps & AI Tools",
      "Omnichannel Ads Management",
      "Continuous A/B Testing",
      "Priority 24/7 Slack Channel"
    ],
    highlighted: false,
    cta: "Apply for Partnership"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-40 bg-[#111116] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Investment</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-black text-white leading-[1.1] tracking-tight"
          >
            Choose your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              weapon.
              <div className="absolute bottom-1 left-0 w-full h-[40%] bg-primary/20 blur-xl z-[-1]" />
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-10 rounded-[2.5rem] relative group border flex flex-col h-full transition-all duration-500 hover:-translate-y-4 ${
                tier.highlighted 
                ? "bg-gradient-to-b from-[#1a1a24] to-[#0B0B0B] border-primary/50 shadow-[0_10px_40px_rgba(123,97,255,0.2)] lg:-mt-8 lg:-mb-8 z-10" 
                : "glass border-white/10 bg-[#16161c] hover:border-white/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg shadow-primary/30 z-20">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-wide group-hover:text-primary transition-colors">{tier.name}</h3>
                <p className="text-white/50 font-body min-h-[48px] leading-relaxed">{tier.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black font-heading text-white tracking-tight drop-shadow-md">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-white/40 font-body mb-2 font-medium tracking-wide">/project</span>}
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-5 mb-10">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-0.5 shrink-0 bg-primary/20 p-1.5 rounded-full group-hover:bg-primary/30 transition-colors">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-white/80 font-body leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-full font-bold transition-all duration-500 flex items-center justify-center gap-3 group/btn uppercase tracking-wider text-sm overflow-hidden relative ${
                tier.highlighted 
                ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_30px_rgba(123,97,255,0.6)] hover:scale-105" 
                : "bg-white/5 text-white border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(123,97,255,0.2)]"
              }`}>
                <span className="relative z-10 flex items-center gap-2">
                  {tier.cta}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </span>
                {tier.highlighted && <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-0" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
