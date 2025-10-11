import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, Rocket } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const milestones = [
  {
    year: "2025",
    icon: Award,
    title: "LAW STUDENT",
    description: "LLB Student at Mount Kenya University School of Law",
    category: "School",
  },
  {
    year: "2024",
    icon: Award,
    title: "IT Club Chair",
    description: "Led Lenana School IT Club initiatives and website modernization",
    category: "Leadership",
  },
  {
    year: "2024",
    icon: Rocket,
    title: "WiFi Business Launch",
    description: "Deployed MikroTik captive portal with M-Pesa integration in Budalangi",
    category: "Entrepreneurship",
  },
  {
    year: "2023",
    icon: Briefcase,
    title: "CTR Remote Controller",
    description: "Built Android remote control app with WebSocket communication",
    category: "Development",
  },
  {
    year: "2023",
    icon: GraduationCap,
    title: "Network Engineering",
    description: "Completed advanced MikroTik configuration and automation projects",
    category: "Learning",
  },
  {
    year: "2022",
    icon: Rocket,
    title: "First Android App",
    description: "Published first working Android application using AIDE",
    category: "Milestone",
  },
  {
    year: "2021",
    icon: GraduationCap,
    title: "Started Coding Android",
    description: "Began learning Java and Android development fundamentals",
    category: "Learning",
  },
  {
    year: "2018",
    icon: GraduationCap,
    title: "Started CodingAndroid",
    description: "Where my coding journey started with learning basic web fundamentals from w3schools.com",
    category: "Starting",
  }
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Leadership: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    Entrepreneurship: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    Development: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    Learning: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    Milestone: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20",
  };
  return colors[category] || colors.Milestone;
};

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
            <Typewriter text="Journey & Achievements" className="typer" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones in building practical engineering solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative pl-8 sm:pl-32 py-6 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 sm:left-[7.5rem] top-0 bottom-0 w-px bg-border group-hover:bg-primary transition-smooth" />

                {/* Year Badge */}
                <div className="absolute left-0 sm:left-20 top-6 -translate-x-1/2 sm:translate-x-0">
                  <Badge className="rounded-full px-4 py-1 font-semibold shadow-medium whitespace-nowrap">
                    {milestone.year}
                  </Badge>
                </div>

                {/* Milestone Card */}
                <Card className="p-6 rounded-3xl border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium ml-6 sm:ml-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <milestone.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display font-semibold text-xl">
                          {milestone.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`rounded-full text-xs whitespace-nowrap ${getCategoryColor(
                            milestone.category
                          )}`}
                        >
                          {milestone.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
