import { useEffect, useRef } from "react";
import { Smartphone, Network, Code, Palette, CreditCard } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Platforms",
      skills: [
        { name: "Android (AIDE)", project: "CTR Remote" },
        { name: "Termux", project: "CLI Tools" },
        { name: "MikroTik", project: "Captive Portal" },
        { name: "Ubuntu", project: "Server Setup" },
      ],
    },
    {
      icon: Code,
      title: "Languages",
      skills: [
        { name: "Java", project: "Android Apps" },
        { name: "HTML/CSS/JS", project: "Web UIs" },
        { name: "JSON", project: "API Design" },
        { name: "Shell", project: "Automation" },
      ],
    },
    {
      icon: Network,
      title: "Networking",
      skills: [
        { name: "Captive Portals", project: "WiFi Business" },
        { name: "WebSockets", project: "CTR Remote" },
        { name: "IP Discovery", project: "Network Tools" },
        { name: "MikroTik Hotspot", project: "Access Control" },
      ],
    },
    {
      icon: Palette,
      title: "UX/UI",
      skills: [
        { name: "Motion Design", project: "Jamani Video" },
        { name: "Dark Theming", project: "CTR Interface" },
        { name: "Component Systems", project: "IT Club Site" },
        { name: "Responsive Design", project: "All Projects" },
      ],
    },
    {
      icon: CreditCard,
      title: "Payments",
      skills: [
        { name: "M-Pesa Integration", project: "WiFi Portal" },
        { name: "STK Push", project: "Instant Payments" },
        { name: "Session Control", project: "Access Management" },
      ],
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-muted/10 dark:bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-center mb-16">
          <Typewriter text="Capabilities" />
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flip-card hidden-card"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front glass-card">
                  <category.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Back Side */}
                <div className="flip-card-back glass-card">
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex flex-col items-center text-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-xs">{skill.project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
