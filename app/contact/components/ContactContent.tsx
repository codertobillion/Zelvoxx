"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle, 
  ChevronDown,
  MessageCircle,
  Calendar,
  Zap,
  Users,
  Target,
  Sparkles,
  Loader2,
  AlertCircle
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { CALENDLY_URL } from "@/src/constants/data";
import DynamicBackground from "@/src/components/ui/DynamicBackground";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

const services = [
  { id: "web-design", label: "Web Design & Development", icon: Zap },
  { id: "branding", label: "Brand Strategy & Identity", icon: Sparkles },
  { id: "marketing", label: "Digital Marketing & Ads", icon: Target },
  { id: "seo", label: "SEO & Content Strategy", icon: MessageCircle },
  { id: "funnels", label: "Funnel Architecture", icon: Users },
  { id: "automation", label: "Sales Automation & CRM", icon: Calendar },
  { id: "complete-system", label: "Complete Growth System", icon: CheckCircle },
];

const budgetOptions = [
  { value: "", label: "Select your budget range" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const timelineOptions = [
  { value: "", label: "Select your timeline" },
  { value: "asap", label: "ASAP (Within 2 weeks)" },
  { value: "1-2-months", label: "1-2 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "exploring", label: "Just Exploring" },
];

const discoveryOptions = [
  { value: "", label: "How did you find us?" },
  { value: "google", label: "Google Search" },
  { value: "social", label: "Social Media" },
  { value: "referral", label: "Referral / Word of Mouth" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "other", label: "Other" },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    discoverySource: "",
    message: "",
    services: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.services.length === 0) newErrors.services = "Please select at least one service";
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await client.create({
        _type: "contactSubmission",
        ...formData,
        submittedAt: new Date().toISOString(),
        status: "new",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Message Sent!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/60 mb-8"
          >
            Thank you for reaching out! Our team will review your project details and get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              Back to Home
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book a Call Now
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background */}
      <DynamicBackground variant="mixed" intensity="high" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(123, 97, 255, 0.15)" }}
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">Get in Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Let's Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                Together
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto px-4 sm:px-0">
              Tell us about your project. We'll respond within 24 hours with a tailored strategy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Sidebar */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 bg-white/[0.03] backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Email Us</p>
                      <p className="text-white font-medium">hello@zelvoxx.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Call Us</p>
                      <p className="text-white font-medium">+91 9810 601 084</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Response Time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick CTA */}
              <motion.div 
                className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h4 className="text-xl font-bold text-white mb-3">Prefer to Talk?</h4>
                <p className="text-white/60 mb-6">Schedule a free 15-minute discovery call with our team.</p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Call
                </a>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div variants={scaleIn} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-5 sm:p-8 lg:p-10 bg-white/[0.03] backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <motion.div
                      animate={{ 
                        boxShadow: focusedField === "name" 
                          ? "0 0 0 2px rgba(123, 97, 255, 0.5)" 
                          : "0 0 0 0px rgba(123, 97, 255, 0)" 
                      }}
                      className="relative rounded-xl"
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <motion.div
                      animate={{ 
                        boxShadow: focusedField === "email" 
                          ? "0 0 0 2px rgba(123, 97, 255, 0.5)" 
                          : "0 0 0 0px rgba(123, 97, 255, 0)" 
                      }}
                      className="relative rounded-xl"
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number
                    </label>
                    <motion.div
                      animate={{ 
                        boxShadow: focusedField === "phone" 
                          ? "0 0 0 2px rgba(123, 97, 255, 0.5)" 
                          : "0 0 0 0px rgba(123, 97, 255, 0)" 
                      }}
                      className="relative rounded-xl"
                    >
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                  </div>

                  {/* Company */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Company Name
                    </label>
                    <motion.div
                      animate={{ 
                        boxShadow: focusedField === "company" 
                          ? "0 0 0 2px rgba(123, 97, 255, 0.5)" 
                          : "0 0 0 0px rgba(123, 97, 255, 0)" 
                      }}
                      className="relative rounded-xl"
                    >
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Budget Range <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0f0f14]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </div>
                    {errors.budget && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.budget}
                      </motion.p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Project Timeline
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0f0f14]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Discovery Source */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      How Did You Find Us?
                    </label>
                    <div className="relative">
                      <select
                        name="discoverySource"
                        value={formData.discoverySource}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                      >
                        {discoveryOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0f0f14]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-3">
                      Services Interested In <span className="text-primary">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {services.map((service) => {
                        const isSelected = formData.services.includes(service.id);
                        return (
                          <motion.button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceToggle(service.id)}
                            className={`relative p-4 rounded-xl border text-left transition-all duration-300 ${
                              isSelected
                                ? "bg-primary/20 border-primary/50"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isSelected ? "bg-primary/30" : "bg-white/5"
                              }`}>
                                <service.icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-white/60"}`} />
                              </div>
                              <span className={`font-medium ${isSelected ? "text-white" : "text-white/70"}`}>
                                {service.label}
                              </span>
                            </div>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-2 right-2"
                              >
                                <CheckCircle className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-3 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.services}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Project Details
                    </label>
                    <motion.div
                      animate={{ 
                        boxShadow: focusedField === "message" 
                          ? "0 0 0 2px rgba(123, 97, 255, 0.5)" 
                          : "0 0 0 0px rgba(123, 97, 255, 0)" 
                      }}
                      className="relative rounded-xl"
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us about your project, goals, and any specific challenges you're facing..."
                        rows={5}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  whileHover={{ boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
