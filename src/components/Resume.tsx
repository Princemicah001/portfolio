import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              <Typewriter text="Resume" className="typer" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my experience, education, and technical skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Resume Preview */}
            <Card className="lg:col-span-2 p-8 rounded-3xl shadow-medium space-y-8">
              {/* Experience */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl">Experience</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <div className="text-sm text-muted-foreground mb-1">2024 - Present</div>
                    <h4 className="font-semibold text-lg mb-2">
                      IT Club Chair & Technical Lead
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">Lenana School</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Led website modernization and member training initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Coordinated tech events and workshops for 100+ students</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-6">
                    <div className="text-sm text-muted-foreground mb-1">2023 - Present</div>
                    <h4 className="font-semibold text-lg mb-2">Independent Developer</h4>
                    <p className="text-sm text-muted-foreground mb-3">Freelance</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Built Android apps and network solutions for local clients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Deployed prepaid WiFi infrastructure with M-Pesa integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <div className="text-sm text-muted-foreground mb-1">
                      Current
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Bachelor of Laws (LLB)
                    </h4>
                    <p className="text-sm text-muted-foreground">Mount Kenya University School of Law</p>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-6">
                    <div className="text-sm text-muted-foreground mb-1">2020 - 2024</div>
                    <h4 className="font-semibold text-lg mb-2">Secondary Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Lenana School, Nairobi • IT Club Chair 2024
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Download & Quick Info */}
            <div className="space-y-6">
              
              <Card className="p-6 rounded-3xl shadow-medium space-y-4">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <FileText className="h-20 w-20 text-primary/30" />
                </div>
                <div>
                  {/*
                  <h4 className="font-semibold mb-2">Full Resume</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download the complete PDF version with all details and references
                  </p>
                  
                  <Button className="w-full rounded-2xl transition-spring hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  */}
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6 rounded-3xl space-y-4">
                <h4 className="font-semibold mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  {[
                    { label: "Experience", value: "5+ years" },
                    { label: "Projects", value: "20+ completed" },
                    { label: "Tech Stack", value: "10+ tools" },
                    { label: "Availability", value: "Open to work" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
