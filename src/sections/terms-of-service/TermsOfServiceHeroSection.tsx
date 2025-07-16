"use client";

import React from "react";

const TermsOfServiceHeroSection = () => {
  return (
    <section className="relative py-8 md:py-20 overflow-hidden bg-gradient-to-br from-black via-black to-gray-900 text-white">
      {/* Simplified Background with Subtle Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Simple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5"></div>

        {/* Minimal Animated Particles - Reduced Number */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: `rgba(255, ${100 + Math.random() * 50}, ${
                  150 + Math.random() * 50
                }, ${0.1 + Math.random() * 0.15})`,
                boxShadow: `0 0 ${Math.random() * 6 + 3}px rgba(255, ${
                  100 + Math.random() * 50
                }, ${150 + Math.random() * 50}, ${0.1 + Math.random() * 0.1})`,
                animation: `floatSimple ${
                  Math.random() * 15 + 20
                }s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content - Centered with Simplified Structure */}
      <div className="container relative z-10 py-20 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Terms of Service
            <span className="block mt-3 text-xl font-normal text-white/70 md:text-2xl">
              Clear, fair, and binding agreement for platform usage
            </span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl md:text-xl mx-auto">
            We establish clear rights and responsibilities to ensure a positive
            experience for all users.
          </p>
        </div>
      </div>

      {/* Simplified Animation */}
      <style jsx global>{`
        @keyframes floatSimple {
          0% {
            transform: translateY(10vh);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default TermsOfServiceHeroSection;
