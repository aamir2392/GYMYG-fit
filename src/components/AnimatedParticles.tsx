import React from "react";

const AnimatedParticles = () => {
  // Animated particles/dots overlay
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <div className="absolute top-20 left-[20%] w-1 h-1 rounded-full bg-purple-400"></div>
      <div className="absolute top-[30%] left-[10%] w-1 h-1 rounded-full bg-pink-400"></div>
      <div className="absolute top-[60%] left-[15%] w-1 h-1 rounded-full bg-purple-400"></div>
      <div className="absolute top-[80%] left-[25%] w-1 h-1 rounded-full bg-pink-400"></div>
      <div className="absolute top-[20%] right-[30%] w-1 h-1 rounded-full bg-purple-400"></div>
      <div className="absolute top-[40%] right-[20%] w-1 h-1 rounded-full bg-pink-400"></div>
      <div className="absolute top-[70%] right-[25%] w-1 h-1 rounded-full bg-purple-400"></div>
      <div className="absolute top-[90%] right-[15%] w-1 h-1 rounded-full bg-pink-400"></div>
    </div>
  );
};

export default AnimatedParticles;
