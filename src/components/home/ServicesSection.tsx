import { Link } from "react-router-dom";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield, 
  Cpu, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and scalability.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern enterprises.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 4,
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights for informed decision-making.",
    color: "from-indigo-500 to-purple-500",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-card"
            >
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
                service.color
              )}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
