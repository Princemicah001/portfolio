import { Badge } from "@/components/ui/badge";

export const TrustSection = () => {
  const badges = [
    "IT Club Lenana",
    "Community Builds",
    "School Tech Initiatives",
    "Hackathons",
    "Open Source",
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Featured in school tech initiatives & community builds
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-2 text-sm font-medium rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-smooth"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
