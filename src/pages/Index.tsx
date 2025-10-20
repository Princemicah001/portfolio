import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Media } from "@/components/Media";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useScrollTheme } from "@/hooks/useScrollTheme";
import { useParallax } from "@/hooks/useParallax";
import { useOpposingSlideIn } from "@/hooks/useOpposingSlideIn";

const Index = () => {
  useScrollTheme();
  useParallax();
  useOpposingSlideIn();

  return (
    <div className="min-h-screen relative">
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent mix-blend-multiply" />
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Skills />
        <Projects />
        <Media />
        <Testimonials />
        <Timeline />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
