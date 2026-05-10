"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, Award } from "lucide-react";

const getMetrics = (isMobile: boolean) => [
  {
    id: 1,
    title: "Revenue Generated",
    value: 12,
    suffix: "M+",
    prefix: "$",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    delay: isMobile ? 0.05 : 0.1,
  },
  {
    id: 2,
    title: "Active Partners",
    value: 50,
    suffix: "+",
    prefix: "",
    icon: <Users className="w-6 h-6 text-accent" />,
    delay: isMobile ? 0.1 : 0.2,
  },
  {
    id: 3,
    title: "Average ROI",
    value: 340,
    suffix: "%",
    prefix: "",
    icon: <Award className="w-6 h-6 text-primary" />,
    delay: isMobile ? 0.15 : 0.3,
  },
];

function Counter({ from, to, prefix = "", suffix = "", delay = 0 }: { from: number; to: number; prefix?: string; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(from, {
    damping: 50,
    stiffness: 100,
    restDelta: 0.001
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        springValue.set(to);
      }, delay * 1000);
    }
  }, [inView, springValue, to, delay]);

  const display = useTransform(springValue, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  );

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Metrics() {
  // Mobile detection for faster animations
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const metrics = getMetrics(isMobile);

  return (
    <section className="py-24 bg-background relative border-y border-white/[0.05] z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: metric.delay }}
              className="flex flex-col items-center text-center py-8 md:py-0 px-4 group"
            >
              <div className="mb-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-[0_0_15px_rgba(123,97,255,0)] group-hover:shadow-[0_0_30px_rgba(123,97,255,0.15)]">
                {metric.icon}
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-2 tracking-tight">
                <Counter from={0} to={metric.value} prefix={metric.prefix} suffix={metric.suffix} delay={metric.delay} />
              </h3>
              
              <p className="text-white/50 font-body uppercase tracking-widest text-sm font-semibold">
                {metric.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
