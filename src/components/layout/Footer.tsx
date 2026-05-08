import Link from "next/link";
import Image from "next/image";
import { socialLinks, legalLinks, footerNavLinks, CALENDLY_URL } from "@/src/constants/data";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <span className="text-3xl font-heading font-black tracking-widest bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                ZELVOX
              </span>
              <span className="text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]">
                X
              </span>
            </Link>
            <p className="text-white/50 font-body max-w-sm leading-relaxed">
              We build premium digital growth systems that generate predictable revenue and dominate industries.
            </p>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-widest mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4 text-white/50 font-body">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.url} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-widest mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-white/50 font-body">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.url} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-widest mb-6 text-sm">Connect</h4>
            <ul className="space-y-4 text-white/50 font-body">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block mb-4">
                  Book a Strategy Call
                </a>
              </li>
              <li>
                <Link href="/" className="mb-4 flex flex-col items-center">
                  <span className="text-4xl font-heading font-black tracking-widest bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    ZELVOX
                  </span>
                  <span className="text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]">
                    X
                  </span>
                </Link>
              </li>
              <li className="pt-4 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm uppercase tracking-wider font-bold">
                    {social.platform}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-white/30 text-xs font-body uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Zelvoxx. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
             <span>Built for Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
