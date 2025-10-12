import { Card } from "@/components/ui/card";
import Typewriter from "@/components/Typewriter";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { Smartphone, Network, Code, Palette, CreditCard } from "lucide-react";

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
    <section id="skills" className="py-20 lg:py-32 bg-muted/20 dark:bg-muted/40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Reveal className="text-center mb-16" data-oppose="up">
            <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              <Typewriter text="Capabilities" className="typer" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical toolkit built through real-world projects and problem-solving
            </p>
          </Reveal>

          <Reveal className="cube-scene mb-16" aria-hidden="true" data-oppose="up">
            <div className="cube reflective-cube">
              {[
                "Legal Tech",
                "Networks",
                "Android",
                "UI/UX",
                "Research",
                "Automation",
              ].map((face, index) => (
                <div key={index} className="cube-face text-sm sm:text-base text-center px-4">
                  {face}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Reveal
                key={index}
                data-oppose={index % 2 === 0 ? "left" : "right"}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  className={cn(
                    "p-6 rounded-3xl border backdrop-blur-xl transition-spring hover:shadow-medium",
                    "bg-gradient-to-br from-background/95 via-primary/8 to-secondary/10",
                    "dark:from-background/60 dark:via-primary/16 dark:to-secondary/18",
                    "border-border/50 hover:border-primary/40 capability-card",
                  )}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-soft">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-start justify-between space-x-3"
                      >
                        <Badge
                          variant="outline"
                          className="rounded-full px-3 py-1 text-xs font-semibold bg-background/80 dark:bg-background/40 border-primary/25 text-foreground/90"
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
