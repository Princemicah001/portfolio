import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Code, Users, Rocket } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export const Hero = () => {
  const wavyTagline = "I build lightweight Android tools, high-performing networks, and human-friendly UIs.";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-background/90 to-background/95 z-10" />
        <div className="bg-floating-balls absolute inset-0 pointer-events-none" data-parallax data-speed="0.04" />
        <div className="bg-color-columns parallax-layer pointer-events-none" data-parallax data-speed="0.06" />
        <div className="bg-color-drip absolute inset-0 mix-blend-screen pointer-events-none" data-parallax data-speed="0.02" />
        <div className="bg-shooting-stars absolute inset-0 opacity-70 pointer-events-none" data-parallax data-speed="0.08" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(var(--secondary)/0.15),transparent_50%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up" data-oppose="up">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-background/70 dark:bg-background/30 backdrop-blur-xl border border-border/40 shadow-soft"
            data-oppose="left"
          >
            <span className="text-sm font-medium text-foreground/80">
              Law Student. Builder. Tech Enthusiast.
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-foreground leading-tight space-y-2"
            data-oppose="right"
          >
            <span
              className="block text-glitch text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
              data-text="Prince Micah"
            >
              Prince Micah
            </span>
            <span className="block text-split">
              <span className="text-foreground/80">—</span>
              <span className="text-3d-jump text-neon">
                <Typewriter
                  text="Law Student & Tech Creator"
                  className="typer"
                />
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-wavy"
            data-oppose="left"
          >
            {Array.from(wavyTagline).map((char, index) => (
              <span key={`${char}-${index}`} style={{ "--index": index } as React.CSSProperties}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" data-oppose="right">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold transition-spring hover:scale-105 shadow-glow btn-liquid button-animate"
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
              className="rounded-full px-8 py-6 text-lg font-semibold bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-spring hover:scale-105 button-animate"
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
                data-oppose={index % 2 === 0 ? "left" : "right"}
                className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-background/70 dark:bg-background/40 backdrop-blur-xl border border-border/30 transition-spring hover:scale-105 hover:shadow-medium card-holographic gradient-border"
              >
                <stat.icon className="h-6 w-6 text-primary" />
                <div className="font-display font-bold text-2xl text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
