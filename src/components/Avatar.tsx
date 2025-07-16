"use client";

import { motion } from "framer-motion";

interface AvatarProps {
  initial: string;
  bgGradient: string;
}

export default function Avatar({ initial, bgGradient }: AvatarProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center text-3xl md:text-4xl font-bold text-pink-500 shadow-sm`}
    >
      {initial}
    </motion.div>
  );
}
