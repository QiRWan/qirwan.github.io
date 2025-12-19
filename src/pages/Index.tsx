import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveSkills from "@/components/InteractiveSkills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import PersonalSection from "@/components/PersonalSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <InteractiveSkills />
      <About />
      <Projects />
      <PersonalSection />
    </main>
  );
};

export default Index;
