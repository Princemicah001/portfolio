import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Send, Github, Linkedin, MessageSquare, MapPin, Clock, Instagram } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message.");
      }

      toast.success("Asante! I'll reply soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error(error?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              <Typewriter text="Let's build something useful" className="typer" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available for collaborations, internships, and client work. I'm always excited to
              discuss new projects and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-3 p-8 rounded-3xl shadow-medium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="rounded-2xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-2xl py-6 text-lg font-semibold transition-spring hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (<><Send className="mr-2 h-5 w-5" />Send Message</>)}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Links */}
              <Card className="p-6 rounded-3xl space-y-4">
                <h3 className="font-display font-semibold text-xl mb-4">Quick Links</h3>
                {[
                  { icon: Mail, label: "Email", value: "micahprincemicah001@gmail.com", href: "mailto:micahprincemicah001@gmail.com" },
                  { icon: MessageSquare, label: "WhatsApp", value: "+254707865597", href: "https://wa.me/254707865597" },
                  { icon: Instagram, label: "Instagram", value: "dean.miccur", href: "https://instagram.com/dean.miccur" },
                  { icon: Github, label: "GitHub", value: "@Princemicah001", href: "https://github.com/Princemicah001" },
                  { icon: Linkedin, label: "LinkedIn", value: "Prince Micah", href: "https://linkedin.com/in/princemicah" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-muted transition-smooth group"
                  >
                    <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground">{link.label}</div>
                      <div className="text-sm font-medium">{link.value}</div>
                    </div>
                  </a>
                ))}
              </Card>

              {/* Location & Time */}
              <Card className="p-6 rounded-3xl space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="font-medium">Nairobi, Kenya</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Timezone</div>
                    <div className="font-medium">EAT (UTC+3)</div>
                  </div>
                </div>
              </Card>

              {/* Greeting */}
              <Card className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <p className="text-lg font-medium">Karibu! 👋</p>
                <p className="text-sm text-muted-foreground mt-2">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
