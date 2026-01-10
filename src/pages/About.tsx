import { Layout } from "@/components/layout/Layout";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Rocket,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We focus on delivering solutions that make a real impact on our clients' businesses.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work as an extension of your team.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do.",
  },
];

const milestones = [
  { year: "2008", event: "Company Founded", description: "Started with a vision to transform businesses through technology." },
  { year: "2012", event: "100+ Clients", description: "Reached our first major milestone serving over 100 clients." },
  { year: "2016", event: "Global Expansion", description: "Opened offices in Europe and Asia to serve clients worldwide." },
  { year: "2020", event: "500+ Projects", description: "Completed over 500 successful projects across various industries." },
  { year: "2024", event: "Industry Leader", description: "Recognized as a leader in digital transformation services." },
];

const team = [
  { name: "John Smith", role: "CEO & Founder", initial: "JS" },
  { name: "Sarah Johnson", role: "CTO", initial: "SJ" },
  { name: "Michael Chen", role: "VP Engineering", initial: "MC" },
  { name: "Emily Brown", role: "Design Director", initial: "EB" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Empowering Businesses Through <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              For over 15 years, we've been helping businesses transform their operations and achieve their goals through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-10 border border-border">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To deliver exceptional technology solutions that empower businesses to thrive in the digital age. We're committed to innovation, quality, and creating lasting partnerships with our clients.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-10 border border-border">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the global leader in digital transformation, recognized for our innovative solutions, technical excellence, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives <span className="text-primary">Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key <span className="text-primary">Milestones</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-glow">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our <span className="text-primary">Team</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology <span className="text-primary">Partner</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We combine deep technical expertise with a genuine understanding of business needs to deliver solutions that drive real results.
              </p>
              <ul className="space-y-4">
                {[
                  "15+ years of industry experience",
                  "500+ successful projects delivered",
                  "98% client satisfaction rate",
                  "24/7 dedicated support",
                  "Certified technology experts",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-2xl p-8 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Retention</div>
              </div>
              <div className="bg-background rounded-2xl p-8 border border-border text-center mt-8">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Team Experts</div>
              </div>
              <div className="bg-background rounded-2xl p-8 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-background rounded-2xl p-8 border border-border text-center mt-8">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
