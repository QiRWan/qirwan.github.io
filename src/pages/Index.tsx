import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import InteractiveSkills from "@/components/InteractiveSkills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <InteractiveSkills />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default Index;
