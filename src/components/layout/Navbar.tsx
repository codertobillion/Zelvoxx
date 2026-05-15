"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { CALENDLY_URL } from "@/src/constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 glass border-b-0"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="relative z-[60] flex items-center gap-1 group">
          <span className="text-2xl md:text-3xl font-heading font-black tracking-widest bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            ZELVOX
          </span>
          <span className="text-2xl md:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]">
            X
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide">
          <Link href="/portfolio" className="hover:text-primary transition-colors">OUR WORK</Link>
          <Link href="/case-studies" className="hover:text-primary transition-colors">CASE STUDIES</Link>
          <Link href="/why-Zelvoxx" className="hover:text-primary transition-colors">WHY Zelvoxx</Link>
          <Link href="/team" className="hover:text-primary transition-colors">OUR TEAM</Link>
          <Link href="/work-with-us" className="hover:text-primary transition-colors">CAREERS</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">PRICING</Link>
          <Link href="/testimonials" className="hover:text-primary transition-colors">REVIEWS</Link>
          <Link href="/contact" className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary hover:bg-primary hover:text-white transition-all">CONTACT</Link>
        </div>
        
        <div className="hidden md:block">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary/90 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(123,97,255,0.4)] tracking-wide">
            Book a Call
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-overlay"
          className="md:hidden text-white relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X aria-hidden="true" className="w-8 h-8" /> : <Menu aria-hidden="true" className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#0B0B0B]/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center gap-10 h-screen w-full border-b border-white/10"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Zelvoxx" 
                width={180} 
                height={70} 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Our Work</Link>
            <Link href="/case-studies" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Case Studies</Link>
            <Link href="/why-Zelvoxx" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Why Zelvoxx</Link>
            <Link href="/team" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Our Team</Link>
            <Link href="/work-with-us" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Careers</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Pricing</Link>
            <Link href="/testimonials" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Reviews</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-primary hover:text-white transition-colors uppercase tracking-widest">Contact</Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-8 bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-full font-bold text-xl inline-block transition-all active:scale-95 shadow-[0_0_30px_rgba(123,97,255,0.4)] tracking-wide">
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
