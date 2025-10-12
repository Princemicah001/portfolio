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
    <section id="skills" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              <Typewriter text="Capabilities" className="typer" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical toolkit built through real-world projects and problem-solving
            </p>
          </div>

          <div className="cube-scene mb-16">
            <div className="cube">
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
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 rounded-3xl border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium animate-fade-in-up card-holographic"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start justify-between space-x-3"
                    >
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 font-medium"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
