import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import AI from "@/components/AI";
import AIAssistant from "@/components/AIAssistant";
import FreelanceBadge from "@/components/FreelanceBadge";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-blue-900 to-neutral-900">
        <Navigation />
        <FreelanceBadge />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Testimonials />
        <Pricing />
        <AI />
        <Contact />
        <AIAssistant />
      </main>
      <Footer />
    </>
  );
}
