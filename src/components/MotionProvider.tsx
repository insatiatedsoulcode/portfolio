"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MotionProviderProps {
  children: ReactNode;
}

const MotionProvider = ({ children }: MotionProviderProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return non-animated version during SSR
    return <>{children}</>;
  }

  // Return animated version on client
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionProvider;
export { motion, AnimatePresence };
