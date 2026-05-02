"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image?: any;
  isFounder?: boolean;
  shortBio?: string;
}

interface Props {
  members: TeamMember[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// Default founders
const defaultFounders: TeamMember[] = [
  {
    _id: "founder-1",
    name: "Akshat Singh Jain",
    role: "Co-Founder",
    isFounder: true,
    shortBio: "Systems architect",
  },
  {
    _id: "founder-2",
    name: "Antara Das",
    role: "Co-Founder",
    isFounder: true,
    shortBio: "Operations excellence",
  },
];

export default function HomeTeam({ members }: Props) {
  const founders = members.filter((m) => m.isFounder).length > 0
    ? members.filter((m) => m.isFounder).slice(0, 2)
    : defaultFounders;

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 lg:mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(123, 97, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/70 font-medium">The Operators</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                Founders
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-8">
              Visionaries who don&apos;t just execute — they engineer growth systems that scale.
            </p>

            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300"
            >
              <span className="font-semibold">Meet the Full Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Founders Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => {
              const imageUrl = founder.image ? urlForImage(founder.image) : null;
              const isFirst = index === 0;

              return (
                <motion.div
                  key={founder._id}
                  variants={scaleIn}
                  className="group relative"
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(0deg, rgba(123,97,255,0.3), rgba(123,97,255,0.1))",
                        "linear-gradient(180deg, rgba(123,97,255,0.3), rgba(123,97,255,0.1))",
                        "linear-gradient(360deg, rgba(123,97,255,0.3), rgba(123,97,255,0.1))",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Card */}
                  <div className="relative p-8 lg:p-10 bg-[#0f0f14]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 1 }}
                    />

                    <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                      {/* Profile Image */}
                      <motion.div
                        className="relative flex-shrink-0"
                        animate={floatingAnimation}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                        
                        <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                          {imageUrl ? (
                            <Image
                              src={imageUrl.url()}
                              alt={founder.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                              <span className="text-4xl lg:text-5xl font-bold text-white/40">
                                {founder.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Founder Badge */}
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Sparkles className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Info */}
                      <div className="text-center lg:text-left flex-1">
                        <motion.h3
                          className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
                        >
                          {founder.name}
                        </motion.h3>
                        
                        <p className="text-primary font-semibold mb-3">
                          {founder.role}
                        </p>
                        
                        {founder.shortBio && (
                          <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                            {founder.shortBio}
                          </p>
                        )}

                        {/* Stats or Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                          {isFirst ? (
                            <>
                              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                Growth Architect
                              </span>
                              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                System Builder
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                Operations Lead
                              </span>
                              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                Client Success
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <p className="text-white/40 text-sm mb-4">
              Backed by a team of developers, marketers, and growth engineers
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="text-white/70 group-hover:text-white font-medium">View All Team Members</span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
