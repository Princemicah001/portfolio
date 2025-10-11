import { Card } from "@/components/ui/card";
import Typewriter from "@/components/Typewriter";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Prince's attention to detail and problem-solving skills are exceptional. His CTR remote control app runs smoothly even on older devices.",
    author: "Alex Kimani",
    role: "Software Engineer",
    affiliation: "Tech Colleague",
    avatar: "AK",
  },
  {
    quote:
      "The MikroTik captive portal solution transformed our WiFi business. Setup was straightforward and customer response has been overwhelmingly positive.",
    author: "Sarah Omondi",
    role: "Business Owner",
    affiliation: "Budalangi WiFi",
    avatar: "SO",
  },
  {
    quote:
      "Working with Prince on the IT Club website was a pleasure. He understood our vision and delivered a polished product that exceeded expectations.",
    author: "David Mwangi",
    role: "Club Secretary",
    affiliation: "Lenana School IT Club",
    avatar: "DM",
  },
  {
    quote:
      "His motion design work on the Jamani video showcased real artistic talent combined with technical precision. The result was stunning.",
    author: "Grace Nyambura",
    role: "Creative Director",
    affiliation: "Independent Artist",
    avatar: "GN",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
            <Typewriter text="What People Say" className="typer" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, clients, and collaborators
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-lg leading-relaxed mb-6 text-foreground/90">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.affiliation}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
