import { ThemeToggle } from "./ThemeToggle";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/princemicah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/princemicah", label: "LinkedIn" },
    { icon: Mail, href: "mailto:prince@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-display font-bold text-xl">
               <a
              href="#hero"
              className="flex items-center space-x-2 font-display font-bold text-xl lg:text-2xl text-primary transition-spring hover:scale-105 bg-none"
            >
              <img
              src="dist/icon.png"
              alt="Prince Micah Logo"
              className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="hidden sm:inline">Prince Micah</span>
            </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Building practical engineering solutions from Nairobi, Kenya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Prince Micah. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Built with <Heart className="h-4 w-4 mx-1 text-primary" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
