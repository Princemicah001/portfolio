import React from "react";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Zap } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import Reveal from "@/components/ui/Reveal";

function Slideshow({ images }: { images: string[] }) {
  const [i, setI] = React.useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Portrait of Prince Micah Ojiambo"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Portrait Card */}
          <Reveal className="space-y-8" data-oppose="left">
            <Card className="p-8 shadow-medium rounded-3xl slideshow-card bg-background/80 dark:bg-background/40 border border-border/40 backdrop-blur-xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/25 via-background/60 to-secondary/20 mb-6 flex items-center justify-center clip-reveal">
                <Slideshow images={["dist/micah.jpeg"]} />
              </div>
              <h2 className="font-display font-bold text-3xl mb-4">
                <Typewriter text="Prince Micah" className="typer text-neon" typingSpeed={110} deletingSpeed={60} pause={2000} />
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Nairobi-based builder focused on practical engineering—Android tools that
                run on modest hardware, Responsive websites with well defined edge cases and future proof.
              </p>
            </Card>
          </Reveal>

          {/* Right Column - Story & Principles */}
          <Reveal className="space-y-8 reveal-delay-200" data-oppose="right">
            <div>
              <h3 className="font-display font-bold text-4xl lg:text-5xl mb-6">
                <span className="text-split">
                  <span>Building</span>
                  <span>with Purpose</span>
                </span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Growing up in Kenya's dynamic tech scene, I learned early that great engineering
                isn't just about cutting-edge tools—it's about solving real problems elegantly,
                even with constraints.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-4">
              {[
                {
                  icon: Lightbulb,
                  title: "Cleanliness & Order",
                  description: "Code that's maintainable, UIs that breathe, systems that scale.",
                },
                {
                  icon: Target,
                  title: "Accuracy & Precision",
                  description: "Correct timing, proper protocols, zero-compromise quality.",
                },
                {
                  icon: Zap,
                  title: "Performance First",
                  description: "Optimized for real-world devices, not just developer machines.",
                },
              ].map((principle, index) => (
                <Reveal key={index} className="reveal-item" data-oppose={index % 2 === 0 ? "left" : "right"}>
                  <Card
                    className="p-6 rounded-2xl border border-border/40 hover:border-primary/50 transition-smooth hover:shadow-medium bg-background/75 dark:bg-background/30 backdrop-blur-xl"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary/15 icon-glow">
                        <principle.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 text-foreground">{principle.title}</h4>
                        <p className="text-muted-foreground text-sm">{principle.description}</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>

            {/* Current Focus */}
            <Card className="p-6 rounded-2xl bg-gradient-to-br from-secondary/15 via-background/40 to-primary/10 border border-secondary/30 backdrop-blur-xl" data-oppose="left">
              <h4 className="font-semibold text-lg mb-3">Currently Exploring</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-secondary mr-3 typetext" />
                  Law studies at Mount Kenya University School of Law
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-secondary mr-3 typetext" />
                  Legal tech & digital innovation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-secondary mr-3 typetext" />
                  Network automation & monitoring systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-secondary mr-3 typetext" />
                  Robust android solutions
                </li>
              </ul>
            </Card>
            <div className="double-sided-card rounded-3xl mt-10 relative" data-oppose="right">
              <div className="double-sided-card-inner rounded-3xl min-h-[260px]">
                <div className="double-sided-face front p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl flex flex-col justify-center gap-4">
                  <h4 className="font-display text-2xl mb-3 text-3d-jump">Legal-Tech Mission</h4>
                  <p className="text-muted-foreground">
                    Fusing Mount Kenya University law insights with engineering rigour to design
                    justice-first digital services across Kenya and East Africa.
                  </p>
                </div>
                <div className="double-sided-face back p-8 bg-gradient-to-br from-secondary/15 via-background to-primary/10 rounded-3xl flex flex-col justify-center gap-3">
                  <h4 className="font-display text-2xl mb-3 text-neon">Focus</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>AI-assisted research tooling for law students</li>
                    <li>Automated compliance systems for startups</li>
                    <li>Community legal education in Nairobi & Budalangi</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
