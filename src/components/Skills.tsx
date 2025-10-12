import { Card } from "@/components/ui/card";
import Typewriter from "@/components/Typewriter";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Network, Code, Palette, CreditCard } from "lucide-react";
import Reveal from "@/components/Reveal";

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

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-muted/20 dark:bg-muted/40 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20" data-oppose="up">
            <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              <Typewriter text="Capabilities" className="typer" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical toolkit built through real-world projects and problem-solving
            </p>
          </div>

          {/* Grid of Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, idx) => (
              <Reveal
                key={idx}
                data-oppose={idx % 2 === 0 ? "left" : "right"}
                className="transform transition-transform duration-500 hover:-translate-y-2"
              >
                <Card
                  className="
                    relative
                    p-8
                    rounded-3xl
                    backdrop-blur-2xl
                    bg-white/10 dark:bg-gray-800/30
                    border
                    border-white/20 dark:border-gray-600/30
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    overflow-hidden
                  "
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Gradient glow overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-primary/20
                      via-transparent
                      to-secondary/20
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-700
                    "
                  />

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                      <category.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-center font-bold text-2xl mb-6 text-foreground">
                    {category.title}
                  </h3>

                  {/* Skill list */}
                  <div className="space-y-4">
                    {category.skills.map((skill, sidx) => (
                      <div
                        key={sidx}
                        className="
                          flex items-center justify-between
                          bg-white/20 dark:bg-gray-700/25
                          rounded-xl
                          px-4 py-2
                          hover:bg-white/30 dark:hover:bg-gray-600/35
                          transition-colors
                          duration-300
                        "
                      >
                        <Badge
                          variant="secondary"
                          className="rounded-full px-4 py-1 font-medium bg-secondary/20 text-foreground text-sm"
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {skill.project}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
