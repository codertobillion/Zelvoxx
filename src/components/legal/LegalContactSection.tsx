"use client";

import { motion } from "framer-motion";
import { legalSiteInfo } from "@/src/constants/data";

type LegalContactSectionProps = {
  intro?: string;
  heading?: string;
};

export default function LegalContactSection({
  intro = "If you have questions about this page or how Zelvoxx handles related matters, reach us here:",
  heading = "Contact",
}: LegalContactSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
        {heading}
      </h2>
      <p className="text-white/70 font-body leading-relaxed mb-4">{intro}</p>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_0_36px_-12px_rgba(123,97,255,0.35)]">
        <p className="text-white/70 font-body mb-2">
          <strong className="text-white">Email:</strong>{" "}
          <a
            href={`mailto:${legalSiteInfo.email}`}
            className="text-primary hover:underline"
          >
            {legalSiteInfo.email}
          </a>
        </p>
        <p className="text-white/70 font-body mb-2">
          <strong className="text-white">Website:</strong>{" "}
          <a
            href={legalSiteInfo.website}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {legalSiteInfo.website}
          </a>
        </p>
        <p className="text-white/70 font-body">
          <strong className="text-white">LinkedIn:</strong>{" "}
          <a
            href={legalSiteInfo.linkedIn}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {legalSiteInfo.linkedIn}
          </a>
        </p>
      </div>
    </motion.section>
  );
}
