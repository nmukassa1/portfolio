"use client";
import { motion, MotionValue } from "framer-motion";
import { FC } from "react";

type Props = {
  show: boolean;
  imageOpacity: number;
  left: MotionValue<number>;
  top: MotionValue<number>;
  skewX: MotionValue<number>;
  skewY: MotionValue<number>;
  bgColor: string;
};

const ImagePreview: FC<Props> = ({
  show,
  imageOpacity,
  left,
  top,
  skewX,
  skewY,
  bgColor,
}) => {
  if (!show) return null;

  return (
    <motion.div
      className="w-[300px] h-[200px] fixed pointer-events-none z-50"
      style={{
        left,
        top,
        opacity: imageOpacity,
        skewX,
        skewY,
        backgroundColor: bgColor,
        borderRadius: "30px",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
    />
  );
};

export default ImagePreview;
