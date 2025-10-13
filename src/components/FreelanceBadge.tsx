"use client";

import dynamic from "next/dynamic";
import { CheckCircle, Clock, Globe, Star } from "lucide-react";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});

const FreelanceBadge = () => {
  const stats = [
    { icon: CheckCircle, label: "Available", value: "Now", color: "text-green-400" },
    { icon: Clock, label: "Response", value: "&lt; 2hrs", color: "text-blue-400" },
    { icon: Star, label: "Rating", value: "5.0/5", color: "text-yellow-400" },
    { icon: Globe, label: "Remote", value: "Global", color: "text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 right-4 z-40 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl max-w-xs"
    >
      <div className="text-center mb-3">
        <h3 className="text-white font-bold text-sm mb-1">🚀 Available for Projects</h3>
        <p className="text-white/80 text-xs">Senior Full Stack Developer</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
              <Icon className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
              <p className="text-white text-xs font-medium">{stat.value}</p>
              <p className="text-white/60 text-xs">{stat.label}</p>
            </div>
          );
        })}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 border border-white/30"
        onClick={() => {
          // Scroll to contact section
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Start a Project
      </motion.button>
    </motion.div>
  );
};

export default FreelanceBadge;
