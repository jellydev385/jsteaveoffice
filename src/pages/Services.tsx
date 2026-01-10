import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield, 
  Cpu, 
  BarChart3,
  Database,
  Globe,
  Cog,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and scalability.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
      "CMS Integration",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Solutions",
      "App Maintenance",
      "UI/UX Design",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern enterprises.",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps Services",
      "Serverless Architecture",
      "Cost Optimization",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 4,
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Management",
      "Incident Response",
      "Security Training",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
    features: [
      "AI Strategy Consulting",
      "ML Model Development",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights for informed decision-making.",
    features: [
      "Data Warehousing",
      "Business Intelligence",
      "Dashboard Development",
      "ETL Processes",
      "Data Visualization",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    icon: Database,
    title: "Database Solutions",
    description: "Robust database design, optimization, and management services.",
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Migration",
      "Backup Solutions",
      "Real-time Databases",
    ],
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 8,
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic digital marketing to boost your online presence and growth.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Marketing",
      "PPC Campaigns",
      "Analytics & Reporting",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 9,
    icon: Cog,
    title: "IT Consulting",
    description: "Expert guidance to align technology with your business objectives.",
    features: [
      "Technology Assessment",
      "Digital Strategy",
      "Process Optimization",
      "Vendor Selection",
      "Change Management",
    ],
    color: "from-amber-500 to-orange-500",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Technology <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From web development to AI solutions, we offer a full range of services to help your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-card"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We <span className="text-primary">Work</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your goals, challenges, and requirements." },
              { step: "02", title: "Planning", description: "We create a detailed roadmap and technical specification." },
              { step: "03", title: "Development", description: "Our team builds your solution with agile methodology." },
              { step: "04", title: "Launch", description: "We deploy, test, and provide ongoing support." },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
