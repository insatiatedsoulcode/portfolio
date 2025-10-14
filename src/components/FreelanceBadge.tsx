"use client";

import dynamic from "next/dynamic";
import { CheckCircle, Clock, Globe, Star } from "lucide-react";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});

const FreelanceBadge = () => {
  // Badge removed as requested
  return null;
};

export default FreelanceBadge;
