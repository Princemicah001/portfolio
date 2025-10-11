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

const Index = () => {
  return (
    <div className="min-h-screen">
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
