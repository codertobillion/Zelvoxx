"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Directly track coordinates via Framer Motion Values 
  // bypassing the heavy React component render lifecycle completely!
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics purely at the motion-value level for the trailing ring
  const smoothX = useSpring(mouseX, { damping: 15, stiffness: 150, mass: 0.1 });
  const smoothY = useSpring(mouseY, { damping: 15, stiffness: 150, mass: 0.1 });

  useEffect(() => {
    // Only mount custom cursor on devices with a physical mouse
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      // Modify values directly without triggering a React setState
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements or their children
      const isClickable = target.closest("button") || target.closest("a");
      setIsHovering(Boolean(isClickable));
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          // Shift backwards by 50% width/height to perfectly center the coordinates
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1, // Shrink away when hovering
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />
      
      {/* Outer trailing glow ring relying on useSpring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1, 
          backgroundColor: isHovering ? "rgba(123, 97, 255, 0.15)" : "rgba(123, 97, 255, 0)",
          borderColor: isHovering ? "rgba(123, 97, 255, 0)" : "rgba(255, 255, 255, 0.2)",
          borderWidth: isHovering ? "0px" : "1px",
        }}
      />
    </>
  );
}
