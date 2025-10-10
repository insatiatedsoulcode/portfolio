import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import AI from "@/components/AI";
import AIAssistant from "@/components/AIAssistant";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <AI />
        <Contact />
        <AIAssistant />
      </main>
      <Footer />
    </>
  );
}
