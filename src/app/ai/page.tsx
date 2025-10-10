import { Metadata } from "next";
import AIContentGenerator from "@/components/AIContentGenerator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Content Generator | Deepak Kumar Singh",
  description: "AI-powered content generation tools for creating blog posts, email responses, SEO descriptions, and code snippets.",
  keywords: "AI, content generation, blog posts, OpenAI, Gemini, Claude, artificial intelligence",
};

export default function AIPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <AIContentGenerator />
      </main>
      <Footer />
    </>
  );
}
