"use client";

import dynamic from "next/dynamic";
import { Code, Sparkles } from "lucide-react";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  animated?: boolean;
}

const Logo = ({ size = "md", showText = true, animated = true }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <motion.div
      className="flex items-center space-x-3"
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Background Circle */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-90"></div>
        
        {/* Code Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="w-6 h-6 text-white" />
        </div>
        
        {/* Sparkle Animation */}
        {animated && (
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        )}
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold text-white leading-tight`}>
            Deepak
          </span>
          <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight`}>
            Singh
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
