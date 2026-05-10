import Link from "next/link";
import Image from "next/image";
import { socialLinks, legalLinks, footerNavLinks, CALENDLY_URL } from "@/src/constants/data";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 sm:mb-6 inline-block">
              <span className="text-2xl sm:text-3xl font-heading font-black tracking-widest bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                ZELVOX
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]">
                X
              </span>
            </Link>
            <p className="text-white/50 font-body max-w-sm leading-relaxed text-sm sm:text-base">
              We build premium digital growth systems that generate predictable revenue and dominate industries.
            </p>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-widest mb-4 sm:mb-6 text-xs sm:text-sm">Navigation</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/50 font-body text-sm sm:text-base">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.url} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-widest mb-4 sm:mb-6 text-xs sm:text-sm">Legal</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/50 font-body text-sm sm:text-base">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.url} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold font-heading uppercase tracking-widest mb-4 sm:mb-6 text-xs sm:text-sm">Connect</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/50 font-body text-sm sm:text-base">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block mb-3 sm:mb-4">
                  Book a Strategy Call
                </a>
              </li>
              <li className="pt-2 sm:pt-4 flex items-center gap-3 sm:gap-4 flex-wrap">
                {socialLinks.map((social) => (
                  <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs sm:text-sm uppercase tracking-wider font-bold">
                    {social.platform}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-white/30 text-xs font-body uppercase tracking-wider gap-4 sm:gap-0">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Zelvoxx. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
             <span>Built for Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
