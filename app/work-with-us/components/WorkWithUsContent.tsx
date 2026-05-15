"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Code2,
  Globe,
  Home,
  Laptop,
  Loader2,
  Palette,
  Megaphone,
  Share2,
  Sparkles,
  Target,
  Users,
  Zap,
  Heart,
  Rocket,
  Brain,
  Send,
  AlertCircle,
  Upload,
} from "lucide-react";
import DynamicBackground from "@/src/components/ui/DynamicBackground";
import CTASection from "@/src/components/ui/CTASection";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const whyWorkItems = [
  "High-converting websites",
  "Performance marketing systems",
  "Brand identity projects",
  "Automation workflows",
  "Growth infrastructure",
  "Real client scaling systems",
];

const cultureValues = [
  "Ownership",
  "Creativity",
  "Fast execution",
  "Problem-solving",
  "Learning mindset",
  "Communication",
  "Innovation",
];

const workModes = [
  {
    id: "remote",
    title: "Remote Work",
    description: "Work from anywhere while collaborating with our team digitally.",
    icon: Globe,
  },
  {
    id: "hybrid",
    title: "Hybrid Mode",
    description: "Mix of remote flexibility and in-person collaboration sessions.",
    icon: Laptop,
  },
  {
    id: "onsite",
    title: "On-Site Roles",
    description: "Collaborate directly with the team in a focused creative environment.",
    icon: Home,
  },
];

const lookingFor = [
  "Think beyond basic execution",
  "Want to build elite-level skills",
  "Love solving problems",
  "Adapt quickly",
  "Care about quality",
  "Want to grow with a modern digital agency",
];

const teams = [
  {
    id: "development",
    title: "Development Team",
    icon: Code2,
    roles: [
      "Frontend Developers",
      "Backend Developers",
      "Full Stack Developers",
      "React / Next.js Developers",
      "WordPress Developers",
      "Shopify Developers",
    ],
    workOn: [
      "High-performance websites",
      "Interactive UI systems",
      "CMS integrations",
      "API systems",
      "Automation workflows",
      "Custom digital experiences",
    ],
  },
  {
    id: "design",
    title: "Design Team",
    icon: Palette,
    roles: [
      "UI/UX Designers",
      "Brand Designers",
      "Motion Designers",
      "Graphic Designers",
    ],
    workOn: [
      "Luxury brand identities",
      "Website interfaces",
      "Social media creatives",
      "Animations and visual systems",
      "High-conversion design systems",
    ],
  },
  {
    id: "marketing",
    title: "Marketing Team",
    icon: Megaphone,
    roles: [
      "Performance Marketers",
      "Meta Ads Specialists",
      "Google Ads Experts",
      "SEO Strategists",
      "Funnel Strategists",
    ],
    workOn: [
      "Lead generation systems",
      "Ad campaigns",
      "Scaling strategies",
      "Conversion optimization",
      "Analytics and reporting",
    ],
  },
  {
    id: "social",
    title: "Social Media Team",
    icon: Share2,
    roles: [
      "Content Creators",
      "Video Editors",
      "Reels Editors",
      "Social Media Managers",
      "Copywriters",
    ],
    workOn: [
      "Viral content systems",
      "Brand storytelling",
      "Social campaigns",
      "Creative direction",
      "Content strategy",
    ],
  },
];

const perks = [
  {
    title: "Growth Opportunities",
    icon: Rocket,
    items: [
      "Fast skill development",
      "Real project ownership",
      "Opportunity to grow into leadership roles",
      "Work directly on impactful projects",
    ],
  },
  {
    title: "Creative Freedom",
    icon: Sparkles,
    items: ["We encourage experimentation, innovation, and new ideas."],
  },
  {
    title: "Flexible Work",
    icon: Globe,
    items: ["Remote and hybrid opportunities depending on role."],
  },
  {
    title: "Learning Environment",
    icon: Brain,
    items: ["Work alongside developers, marketers, strategists, and creatives."],
  },
  {
    title: "Performance-Based Growth",
    icon: Target,
    items: ["We value contribution and execution over hierarchy."],
  },
  {
    title: "Modern Workflow",
    icon: Zap,
    items: [
      "Collaborative systems",
      "Flexible communication",
      "Digital-first workflow",
      "Efficient project management",
    ],
  },
];

const mindsetBeliefs = [
  "Systems over shortcuts",
  "Strategy over noise",
  "Execution over excuses",
  "Growth over comfort",
];

const openRoles = [
  {
    category: "Development",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Shopify Developer",
      "WordPress Developer",
    ],
  },
  {
    category: "Design",
    roles: ["UI/UX Designer", "Graphic Designer", "Motion Designer"],
  },
  {
    category: "Marketing",
    roles: [
      "Meta Ads Specialist",
      "Google Ads Expert",
      "SEO Specialist",
      "Funnel Strategist",
    ],
  },
  {
    category: "Content & Social",
    roles: [
      "Video Editor",
      "Reels Editor",
      "Content Creator",
      "Social Media Manager",
      "Copywriter",
    ],
  },
];

const hiringSteps = [
  { step: 1, title: "Application", description: "Submit your application and portfolio." },
  { step: 2, title: "Review", description: "Our team reviews your skills, experience, and mindset." },
  { step: 3, title: "Interview", description: "Short conversation to understand your goals and fit." },
  { step: 4, title: "Task / Trial", description: "Depending on the role, we may assign a small practical task." },
  { step: 5, title: "Welcome To Zelvoxx", description: "Join the team and start building." },
];

const roleOptions = openRoles.flatMap((g) =>
  g.roles.map((role) => ({ value: role, label: role }))
);

const experienceOptions = [
  { value: "", label: "Select years of experience" },
  { value: "0-1", label: "0–1 years" },
  { value: "1-3", label: "1–3 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "5+", label: "5+ years" },
];

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm text-primary font-semibold">{children}</span>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 sm:p-8 bg-white/[0.03] backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary/30 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default function WorkWithUsContent() {
  const [activeTeam, setActiveTeam] = useState(teams[0].id);
  const applyRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    role: "",
    portfolioUrl: "",
    workMode: "",
    yearsOfExperience: "",
    whyJoin: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  const scrollToApply = () => applyRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToRoles = () => rolesRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.role) newErrors.role = "Please select a role";
    if (!formData.workMode) newErrors.workMode = "Please select a work mode";
    if (!formData.whyJoin.trim()) newErrors.whyJoin = "Please tell us why you want to join";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));
      if (resumeFile) body.append("resume", resumeFile);

      const res = await fetch("/api/career-application", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeTeamData = teams.find((t) => t.id === activeTeam) ?? teams[0];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <DynamicBackground variant="mixed" intensity="high" />

        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>Work With Us</SectionBadge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Build The Future Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
              Digital Growth.
            </span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="space-y-4 text-lg sm:text-xl text-white/50 max-w-3xl mx-auto mb-10">
            <p>
              Join a team obsessed with systems, creativity, execution, and scaling modern brands.
            </p>
            <p>
              At Zelvoxx, we don&apos;t just work on projects. We build growth ecosystems that help
              businesses dominate online.
            </p>
            <p>
              Whether you&apos;re a developer, designer, strategist, marketer, editor, or growth
              operator — we&apos;re looking for people who want to create meaningful work and grow
              with a high-performance team.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToApply}
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(123,97,255,0.3)]"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={scrollToRoles}
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 border border-white/10"
            >
              View Open Roles
              <Briefcase className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY WORK AT ZELVOXX */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <SectionBadge>Why Zelvoxx</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              We Build, Not Just Talk.
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Most agencies focus on appearances. We focus on systems, execution, and measurable
              growth. At Zelvoxx, you&apos;ll work on:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyWorkItems.map((item) => (
              <motion.div key={item} variants={fadeInUp}>
                <GlassCard className="h-full group hover:bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-white/80 font-medium">{item}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="text-center text-white/40 mt-10 text-lg">
            Every project is designed to create impact.
          </motion.p>
        </motion.div>
      </section>

      {/* CULTURE + WHO WE'RE LOOKING FOR */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionBadge>Our Culture</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                A High-Performance Environment
              </h2>
              <p className="text-white/50 mb-8">
                We&apos;re building a culture where talented people can create their best work
                without unnecessary corporate bureaucracy.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {cultureValues.map((value) => (
                <motion.span
                  key={value}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(123, 97, 255, 0.15)" }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium cursor-default"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionBadge>Who We Hire</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Who We&apos;re Looking For
              </h2>
              <p className="text-white/50 mb-6">
                We&apos;re looking for ambitious people who:
              </p>
            </motion.div>
            <ul className="space-y-4">
              {lookingFor.map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-3">
                  <motion.div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-white/70">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.p variants={fadeInUp} className="mt-8 text-primary font-semibold">
              Experience matters. Mindset matters more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WORK MODES */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <SectionBadge>Flexibility</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Hybrid + Remote + On-Site Opportunities
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              We understand that great work can happen anywhere. We prioritize productivity,
              communication, and outcomes over rigid structures.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
            {workModes.map((mode) => (
              <GlassCard key={mode.id} className="text-center group">
                <motion.div
                  className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <mode.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{mode.title}</h3>
                <p className="text-white/50">{mode.description}</p>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* TEAMS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <SectionBadge>Teams</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Teams At Zelvoxx
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-10">
            {teams.map((team) => (
              <button
                key={team.id}
                type="button"
                onClick={() => setActiveTeam(team.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeTeam === team.id
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(123,97,255,0.4)]"
                    : "bg-white/5 border border-white/10 text-white/60 hover:border-white/20"
                }`}
              >
                <team.icon className="w-4 h-4" />
                {team.title.replace(" Team", "")}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard>
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <activeTeamData.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{activeTeamData.title}</h3>
                </div>

                <motion.div
                  className="grid md:grid-cols-2 gap-10"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                      Open Roles
                    </h4>
                    <ul className="space-y-2">
                      {activeTeamData.roles.map((role) => (
                        <li key={role} className="text-white/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                      What You&apos;ll Work On
                    </h4>
                    <ul className="space-y-2">
                      {activeTeamData.workOn.map((item) => (
                        <li key={item} className="text-white/70 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PERKS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <SectionBadge>Benefits</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Benefits & Perks
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <motion.div key={perk.title} variants={fadeInUp}>
                <GlassCard className="h-full">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <perk.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{perk.title}</h3>
                  <ul className="space-y-2">
                    {perk.items.map((item) => (
                      <li key={item} className="text-white/50 text-sm flex items-start gap-2">
                        <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MINDSET */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>The Zelvoxx Mindset</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              We don&apos;t believe in average.
            </h2>
            <p className="text-white/50 mb-10 text-lg">We believe in:</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {mindsetBeliefs.map((belief) => (
              <motion.div
                key={belief}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-semibold text-lg"
              >
                {belief}
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeInUp} className="mt-10 text-white/60 text-lg">
            We want people who are excited about building things that matter.
          </motion.p>
        </motion.div>
      </section>

      {/* OPEN ROLES */}
      <section
        ref={rolesRef}
        id="open-roles"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white/[0.02] border-y border-white/5 scroll-mt-28"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <SectionBadge>Careers</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Open Roles
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {openRoles.map((group) => (
              <GlassCard key={group.category}>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.roles.map((role) => (
                    <li key={role}>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, role }));
                          scrollToApply();
                        }}
                        className="text-white/60 hover:text-primary text-sm text-left transition-colors w-full"
                      >
                        {role}
                      </button>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <SectionBadge>Process</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Hiring Process
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden sm:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.div className="space-y-8">
              {hiringSteps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  className="flex gap-6 sm:gap-8 items-start"
                >
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 font-bold text-primary text-lg sm:text-xl z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  <GlassCard className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50">{step.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* APPLICATION FORM */}
      <section
        ref={applyRef}
        id="apply"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-28"
      >
        <DynamicBackground variant="purple" intensity="medium" />

        <div className="max-w-3xl mx-auto relative">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-12 bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <CheckCircle className="w-12 h-12 text-primary" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Application Received!
              </h2>
              <p className="text-white/60 mb-8 text-lg">
                Thank you for applying to Zelvoxx. Our team will review your application and get
                back to you soon.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
                Back to Home
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <SectionBadge>Apply</SectionBadge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Let&apos;s Build Something Bigger Together.
                </h2>
                <p className="text-white/50 text-lg">
                  If you&apos;re passionate about creativity, systems, technology, and growth —
                  we&apos;d love to hear from you.
                </p>
              </motion.div>

              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="p-6 sm:p-10 bg-white/[0.03] backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 space-y-6"
              >
                <motion.div className="grid sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@email.com"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <motion.div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </motion.div>

                  <motion.div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Your city"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </motion.div>

                  <motion.div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Role Applying For <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        <option value="" className="bg-[#0f0f14]">
                          Select a role
                        </option>
                        {roleOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0f0f14]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </div>
                    {errors.role && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.role}
                      </p>
                    )}
                  </motion.div>

                  <motion.div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Portfolio / LinkedIn URL
                    </label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/you or portfolio link"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </motion.div>

                  <motion.div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Resume Upload
                    </label>
                    <label className="flex flex-col items-center justify-center w-full px-4 py-8 bg-white/5 border border-dashed border-white/20 rounded-xl cursor-pointer hover:border-primary/50 transition-colors group">
                      <Upload className="w-8 h-8 text-white/40 group-hover:text-primary mb-3 transition-colors" />
                      <span className="text-white/60 text-sm text-center">
                        {resumeFile ? resumeFile.name : "Click to upload PDF, DOC, or DOCX"}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                      />
                    </label>
                  </motion.div>

                  <motion.div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-3">
                      Preferred Work Mode <span className="text-primary">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {workModes.map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, workMode: mode.id }));
                            if (errors.workMode) setErrors((prev) => ({ ...prev, workMode: "" }));
                          }}
                          className={`px-5 py-3 rounded-xl border font-medium text-sm transition-all ${
                            formData.workMode === mode.id
                              ? "bg-primary/20 border-primary/50 text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                          }`}
                        >
                          {mode.title.replace(" Work", "").replace(" Mode", "").replace(" Roles", "")}
                        </button>
                      ))}
                    </div>
                    {errors.workMode && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.workMode}
                      </p>
                    )}
                  </motion.div>

                  <motion.div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Years of Experience
                    </label>
                    <motion.div className="relative">
                      <select
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        {experienceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0f0f14]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </motion.div>
                  </motion.div>

                  <motion.div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Why Do You Want To Join Zelvoxx? <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your goals, skills, and what excites you about Zelvoxx..."
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                    {errors.whyJoin && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {errors.whyJoin}
                      </p>
                    )}
                  </motion.div>
                </motion.div>

                {submitError && (
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {submitError}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Apply Now
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        variant="large"
        title="Ready To Build The Next Generation Of Digital Brands?"
        subtitle="Join a team focused on execution, innovation, and real growth."
        primaryCtaText="Apply Today"
        primaryCtaLink="#apply"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </>
  );
}
