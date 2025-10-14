"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamic motion components to avoid SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const MotionSection = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.section),
  { ssr: false }
);

const MotionNav = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.nav),
  { ssr: false }
);

const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.button),
  { ssr: false }
);

const MotionA = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.a),
  { ssr: false }
);

const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

// Fallback components for SSR
const FallbackDiv = ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
  <div {...props}>{children}</div>
);

const FallbackSection = ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
  <section {...props}>{children}</section>
);

const FallbackNav = ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
  <nav {...props}>{children}</nav>
);

const FallbackButton = ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
  <button {...props}>{children}</button>
);

const FallbackA = ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
  <a {...props}>{children}</a>
);

// Export motion components with fallbacks
export const motion = {
  div: MotionDiv || FallbackDiv,
  section: MotionSection || FallbackSection,
  nav: MotionNav || FallbackNav,
  button: MotionButton || FallbackButton,
  a: MotionA || FallbackA,
};

export { AnimatePresence };
