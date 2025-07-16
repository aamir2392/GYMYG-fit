"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  color?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  color = "rose",
}: StarRatingProps) {
  const [displayRating, setDisplayRating] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let currentRating = 0;
      const interval = setInterval(() => {
        if (currentRating < rating) {
          currentRating += 0.1;
          setDisplayRating(currentRating);
        } else {
          clearInterval(interval);
          setDisplayRating(rating);
        }
      }, 15); // Slightly faster animation

      return () => clearInterval(interval);
    }
  }, [inView, rating]);

  const colorClass = `text-${color}-400 fill-${color}-400`;

  return (
    <div ref={ref} className="flex items-center justify-center">
      {[...Array(maxRating)].map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= displayRating;
        const isPartiallyFilled =
          !isFilled &&
          starValue <= Math.ceil(displayRating) &&
          displayRating % 1 !== 0;
        const fillPercentage = isPartiallyFilled
          ? (displayRating % 1) * 100
          : 0;

        return (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -15 }}
            animate={{
              scale: inView ? 1 : 0,
              rotate: 0,
            }}
            transition={{
              delay: inView ? i * 0.08 : 0,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative w-5 h-5 mx-0.5"
          >
            {isPartiallyFilled ? (
              <div className="relative">
                <Star className={`w-5 h-5 text-gray-300`} />
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercentage}%` }}
                >
                  <Star className={`w-5 h-5 ${colorClass}`} />
                </div>
              </div>
            ) : (
              <Star
                className={`w-5 h-5 ${isFilled ? colorClass : "text-gray-300"}`}
                fill={isFilled ? "currentColor" : "none"}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
