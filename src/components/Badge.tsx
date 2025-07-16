import React from "react";

type BadgeProps = {
  text: string;
  position?: "left" | "center" | "right";
  showDots?: boolean;
};

const Badge = ({ text, position = "center", showDots = false }: BadgeProps) => (
  <div className={`w-full flex justify-${position} items-center mt-8`}>
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border-primary/20 bg-primary/10 text-primary border border-pink-200 shadow-sm">
      {showDots ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
          {text}
          <span className="w-1.5 h-1.5 rounded-full bg-primary ml-2"></span>
        </>
      ) : (
        text
      )}
    </span>
  </div>
);

export default Badge;
