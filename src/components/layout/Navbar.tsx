"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
        <Link href="/" className="text-2xl md:text-3xl font-heading font-black text-white tracking-widest flex items-center gap-2 relative z-[60]">
          ZELVOX<span className="text-primary -ml-2">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide">
          <Link href="#problem" className="hover:text-primary transition-colors">THE PROBLEM</Link>
          <Link href="#services" className="hover:text-primary transition-colors">SERVICES</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">PORTFOLIO</Link>
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
            <Link href="#problem" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">The Problem</Link>
            <Link href="#services" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Services</Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-4xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-widest">Portfolio</Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-8 bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-full font-bold text-xl inline-block transition-all active:scale-95 shadow-[0_0_30px_rgba(123,97,255,0.4)] tracking-wide">
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
