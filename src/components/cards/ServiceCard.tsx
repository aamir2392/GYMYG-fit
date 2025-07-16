"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/30 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110"></div>
      <div className="relative space-y-4">
        <div className="inline-flex rounded-xl bg-primary/10 p-3">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
