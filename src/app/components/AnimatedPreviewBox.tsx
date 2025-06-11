"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export default function AnimatedPreviewBox() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const velocityX = useVelocity(springX);
  const velocityY = useVelocity(springY);

  const skewX = useTransform(velocityX, [-1000, 1000], [-15, 15]);
  const skewY = useTransform(velocityY, [-1000, 1000], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-[300px] h-[200px] bg-red-400 pointer-events-none"
      style={{
        x: springX,
        y: springY,
        skewX,
        skewY,
        borderRadius: "30px",
      }}
    />
  );
}
