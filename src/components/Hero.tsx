import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Code, Users, Rocket } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-background/90 to-background/95 z-10" />
        {/* Placeholder for video - will be replaced with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(var(--secondary)/0.15),transparent_50%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-border/20">
            <span className="text-sm font-medium text-primary-foreground/90">
              Law Student. Builder. Tech Enthusiast.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-primary-foreground leading-tight">
            Prince Micah — <Typewriter text="Law Student & Tech Creator" className="typer text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-primary-foreground/70" />
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            I build lightweight Android tools, high-performing networks, and human-friendly UIs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold transition-spring hover:scale-105 shadow-glow"
            >
              <a href="#contact">
                Work with me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-spring hover:scale-105"
            >
              <a href="#projects">View projects</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { icon: Code, value: "5+", label: "Years Coding" },
              { icon: Rocket, value: "20+", label: "Projects Shipped" },
              { icon: Users, value: "500+", label: "Users Reached" },
              { icon: MapPin, value: "Nairobi", label: "Kenya (EAT)" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-background/10 backdrop-blur-sm border border-border/10 transition-spring hover:scale-105 hover:shadow-medium"
              >
                <stat.icon className="h-6 w-6 text-primary-foreground/80" />
                <div className="font-display font-bold text-2xl text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};
