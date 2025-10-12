import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Smartphone, Network, Globe, Palette, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 2,
    icon: Network,
    title: "Prepaid WiFi Business",
    tagline: "Frictionless internet access.",
    category: "Networking",
    stack: ["MikroTik", "M-Pesa", "Radius", "HTML/CSS"],
    description:
      "Custom MikroTik captive portal with M-Pesa integration, providing affordable internet access in Budalangi via Starlink and Airtel connections.",
    highlights: [
      "Branded responsive login portal with session control",
      "STK Push integration for instant payments",
      "Uptime monitoring and user analytics dashboard",
      "Ready-to-deploy template for similar setups",
    ],
    outcome:
      "Stable revenue model with simplified user onboarding. Reduced support overhead by 60%.",
    video: "/videos/project-2.mp4",
  },
  {
    id: 3,
    icon: Globe,
    title: "Lenana School IT Club Website",
    tagline: "Student site, studio polish.",
    category: "Web",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Refreshed the IT Club website with maroon/white/grey branding, animated galleries, and improved Resources/Events/Projects pages.",
    highlights: [
      "Consistent UX across all pages with clean navigation",
      "Filterable dynamic image gallery with smooth animations",
      "Preserved original design intent while modernizing interface",
      "Mobile-responsive with touch-friendly interactions",
    ],
    outcome:
      "Enhanced club presence with improved member engagement. Easier content updates for admins.",
    video: "/videos/project-3.mp4",
  },
  {
    id: 4,
    icon: Palette,
    title: "Jamani — Cover Art & Lyric Video",
    tagline: "Color, rhythm, Nairobi.",
    category: "Media",
    stack: ["Motion Graphics", "Video Editing"],
    description:
      "Vibrant Nairobi CBD-themed music video with colorful ambient effects and precise lyric synchronization.",
    highlights: [
      "Animated water and ambient visual effects",
      "Tight lyric sync with ×2 refrain sections",
      "Color palette inspired by Nairobi urban landscape",
      "Export-ready for multiple platform formats",
    ],
    outcome:
      "Strong viewer engagement with professional storytelling. Showcased creative versatility.",
  },
  {
    id: 5,
    icon: Smartphone,
    title: "BEE — Offline Smart Voice Assistant",
    tagline: "Offline, Voice, Siri.",
    category: "Android",
    stack: ["Java", "Android", "Voice Recognition"],
    description:
      "An offline Android personal smart assistant similar to Siri, built to execute phone commands and interact with users through voice, all without needing an internet connection. Designed for privacy, speed, and accessibility.",
    highlights: [
      "Executes phone commands entirely offline",
      "Voice interaction with natural language processing",
      "Privacy-focused: no data leaves the device",
      "Fast response and accessible for all users",
    ],
    outcome:
      "Empowered users with private, fast, and reliable voice control on Android devices without internet dependency.",
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Android", "Networking", "Web", "Media"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
            <Typewriter text="Featured Work" className="typer" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Case studies showcasing end-to-end problem solving, technical execution, and
            measurable outcomes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="rounded-full px-6 transition-spring hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-large cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Preview 
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                   Project Preview 
                  <project.icon className="h-20 w-20 text-primary/30 group-hover:scale-110 transition-transform" />
                
                  </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              */}
              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 rounded-full">{project.category}</Badge>
                    <h3 className="font-display font-bold text-2xl">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl">{selectedProject.title}</DialogTitle>
                <p className="text-muted-foreground">{selectedProject.tagline}</p>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Video/Preview 
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <selectedProject.icon className="h-24 w-24 text-primary/30" />
                </div>
*/}
                {/* Stack */}
                <div>
                  <h4 className="font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-3">Overview</h4>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="font-semibold mb-3">Outcome</h4>
                  <p className="text-muted-foreground">{selectedProject.outcome}</p>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 rounded-2xl">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-2xl">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
