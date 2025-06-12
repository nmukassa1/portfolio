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
  // bgColor: string;
  previewImage: string | undefined;
};

const ImagePreview: FC<Props> = ({
  show,
  imageOpacity,
  left,
  top,
  skewX,
  skewY,
  // bgColor,
  previewImage = undefined,
}) => {
  if (!show) return null;

  return (
    <motion.div
      className="w-[500px] h-[300px] absolute pointer-events-none z-50 "
      style={{
        left,
        top,
        opacity: imageOpacity,
        skewX,
        skewY,
        // backgroundColor: bgColor,
        borderRadius: "30px",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
    >
      <motion.img
        src={previewImage}
        alt="Preview"
        className="w-full h-full object-cover rounded-[30px]"
        style={{ opacity: imageOpacity }}
      />
    </motion.div>
  );
};

export default ImagePreview;
