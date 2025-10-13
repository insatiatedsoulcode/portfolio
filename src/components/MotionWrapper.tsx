"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamic motion components to avoid SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.div),
  { ssr: false }
);

const MotionSection = dynamic(
  () => import("framer-motion").then((mod) => mod.section),
  { ssr: false }
);

const MotionNav = dynamic(
  () => import("framer-motion").then((mod) => mod.nav),
  { ssr: false }
);

const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => mod.button),
  { ssr: false }
);

const MotionA = dynamic(
  () => import("framer-motion").then((mod) => mod.a),
  { ssr: false }
);

const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

// Fallback components for SSR
const FallbackDiv = ({ children, ...props }: { children: ReactNode; [key: string]: any }) => (
  <div {...props}>{children}</div>
);

const FallbackSection = ({ children, ...props }: { children: ReactNode; [key: string]: any }) => (
  <section {...props}>{children}</section>
);

const FallbackNav = ({ children, ...props }: { children: ReactNode; [key: string]: any }) => (
  <nav {...props}>{children}</nav>
);

const FallbackButton = ({ children, ...props }: { children: ReactNode; [key: string]: any }) => (
  <button {...props}>{children}</button>
);

const FallbackA = ({ children, ...props }: { children: ReactNode; [key: string]: any }) => (
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
