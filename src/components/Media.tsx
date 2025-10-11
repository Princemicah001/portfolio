import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const mediaItems = [
  {
    title: "CTR Remote Demo",
    description: "Android app controlling devices via WebSocket",
    year: "2024",
    role: "Developer",
    thumbnail: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Network Setup Tutorial",
    description: "MikroTik captive portal configuration",
    year: "2024",
    role: "Network Engineer",
    thumbnail: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
  },
  {
    title: "Jamani Music Video",
    description: "Colorful Nairobi-themed lyric video",
    year: "2024",
    role: "Motion Designer",
    thumbnail: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
  },
  {
    title: "IT Club Showcase",
    description: "Website walkthrough and features",
    year: "2024",
    role: "Web Developer",
    thumbnail: "bg-gradient-to-br from-indigo-500/20 to-pink-500/20",
  },
];

export const Media = () => {
  return (
    <section id="media" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
            <Typewriter text="STORIES" className="typer" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual stories from projects—demos, tutorials, and creative work
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-3xl border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-large cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail 
              <div className={`aspect-[9/16] ${item.thumbnail} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-spring">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="rounded-full shadow-medium">{item.year}</Badge>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                <Badge variant="secondary" className="rounded-full text-xs">
                  {item.role}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
