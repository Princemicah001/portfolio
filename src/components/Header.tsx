import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Media", href: "#media" },
  { label: "Resume", href: "#resume" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                asChild
                className="hidden sm:inline-flex rounded-full px-6 transition-spring hover:scale-105"
              >
                <a href="#contact">Contact</a>
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-20 left-0 right-0 mx-4 bg-card rounded-3xl shadow-large p-6 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-2xl text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full rounded-2xl mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Contact</a>
            </Button>
          </nav>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};
