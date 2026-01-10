import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "cloud", name: "Cloud" },
  { id: "database", name: "Database" },
];

const technologies = {
  frontend: [
    { name: "React", color: "#61DAFB" },
    { name: "Vue.js", color: "#4FC08D" },
    { name: "Angular", color: "#DD0031" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Next.js", color: "#000000" },
    { name: "Tailwind", color: "#06B6D4" },
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Java", color: "#ED8B00" },
    { name: "Go", color: "#00ADD8" },
    { name: ".NET", color: "#512BD4" },
    { name: "Ruby", color: "#CC342D" },
  ],
  cloud: [
    { name: "AWS", color: "#FF9900" },
    { name: "Azure", color: "#0078D4" },
    { name: "Google Cloud", color: "#4285F4" },
    { name: "Docker", color: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5" },
    { name: "Terraform", color: "#7B42BC" },
  ],
  database: [
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Redis", color: "#DC382D" },
    { name: "Elasticsearch", color: "#005571" },
    { name: "GraphQL", color: "#E10098" },
  ],
};

export function TechLogos() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage the latest technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies[activeCategory as keyof typeof technologies].map((tech, index) => (
            <div
              key={tech.name}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl font-bold"
                style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="text-foreground font-medium text-sm text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
