"use client";

import { motion } from "framer-motion";

interface DynamicBackgroundProps {
  variant?: "purple" | "blue" | "orange" | "green" | "mixed";
  intensity?: "low" | "medium" | "high";
}

export default function DynamicBackground({ 
  variant = "purple", 
  intensity = "medium" 
}: DynamicBackgroundProps) {
  const colorSets = {
    purple: {
      primary: "rgba(123, 97, 255,",
      secondary: "rgba(139, 92, 246,",
      accent: "rgba(167, 139, 250,"
    },
    blue: {
      primary: "rgba(59, 130, 246,",
      secondary: "rgba(37, 99, 235,",
      accent: "rgba(96, 165, 250,"
    },
    orange: {
      primary: "rgba(249, 115, 22,",
      secondary: "rgba(234, 88, 12,",
      accent: "rgba(251, 146, 60,"
    },
    green: {
      primary: "rgba(34, 197, 94,",
      secondary: "rgba(22, 163, 74,",
      accent: "rgba(74, 222, 128,"
    },
    mixed: {
      primary: "rgba(123, 97, 255,",
      secondary: "rgba(59, 130, 246,",
      accent: "rgba(139, 92, 246,"
    }
  };

  const colors = colorSets[variant];
  const blurAmount = intensity === "high" ? "300px" : intensity === "medium" ? "200px" : "150px";
  const opacity = intensity === "high" ? 0.4 : intensity === "medium" ? 0.25 : 0.15;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${colors.primary} ${opacity * 100}%) 0%, transparent 70%)`,
          filter: `blur(${blurAmount})`,
        }}
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["-10%", "20%", "-10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full right-0"
        style={{
          background: `radial-gradient(circle, ${colors.secondary} ${opacity * 80}%) 0%, transparent 70%)`,
          filter: `blur(${blurAmount})`,
        }}
        animate={{
          x: ["10%", "-15%", "10%"],
          y: ["20%", "-10%", "20%"],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bottom-0 left-1/3"
        style={{
          background: `radial-gradient(circle, ${colors.accent} ${opacity * 60}%) 0%, transparent 70%)`,
          filter: `blur(${blurAmount})`,
        }}
        animate={{
          x: ["0%", "20%", "0%"],
          y: ["0%", "-15%", "0%"],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: colors.primary,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Gradient mesh overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, ${colors.primary} 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, ${colors.secondary} 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, ${colors.accent} 0.05) 0%, transparent 70%)
          `,
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
