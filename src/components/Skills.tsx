import { Card } from "@/components/ui/card";
import Typewriter from "@/components/Typewriter";
import { Badge } from "@/components/ui/badge";
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
          <div className="text-center mb-20 animate-fade-in-up" data-oppose="up">
            <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              <Typewriter text="Capabilities" className="typer" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical toolkit built through real-world projects and problem-solving
            </p>
          </div>

          {/* Skills Cards - Horizontal Style */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 p-8 rounded-3xl border border-border/40 bg-background/60 dark:bg-background/30 backdrop-blur-xl 
                           hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card-holographic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Left: Icon + Title */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-1/3">
                  <div className="p-4 rounded-2xl bg-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">Real-world skills & tools</p>
                </div>

                {/* Right: Skills List */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full sm:w-2/3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center sm:items-start bg-secondary/10 p-3 rounded-2xl hover:bg-secondary/20 transition-colors duration-300"
                    >
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 font-medium bg-secondary/30 text-foreground mb-1"
                      >
                        {skill.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{skill.project}</span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary via-accent to-secondary transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
