"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { visitorTracker } from '@/utils/visitorTracking';

const VisitorTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page visit
    visitorTracker.trackPageVisit(pathname);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default VisitorTracker;
