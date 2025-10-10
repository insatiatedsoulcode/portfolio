"use client";

import Navigation from "@/components/Navigation";
import AIContentGenerator from "@/components/AIContentGenerator";

const AIPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Navigation />
      <div className="pt-20">
        <AIContentGenerator />
      </div>
    </div>
  );
};

export default AIPage;