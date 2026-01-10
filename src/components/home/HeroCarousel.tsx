import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Innovative Technology Solutions",
    subtitle: "For Your Business Growth",
    description: "We deliver cutting-edge software and IT services that transform how businesses operate and compete in the digital age.",
    cta: "Explore Services",
    ctaLink: "/services",
  },
  {
    id: 2,
    title: "Expert Development Team",
    subtitle: "Building Tomorrow's Solutions",
    description: "Our skilled professionals bring years of experience in creating scalable, secure, and innovative digital products.",
    cta: "Meet Our Team",
    ctaLink: "/about",
  },
  {
    id: 3,
    title: "Digital Transformation",
    subtitle: "Accelerate Your Success",
    description: "Partner with us to modernize your infrastructure, streamline operations, and unlock new growth opportunities.",
    cta: "Get Started",
    ctaLink: "/contact",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "transition-all duration-700 ease-in-out",
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              )}
            >
              {index === currentSlide && (
                <>
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i}>
                        {i === slide.title.split(' ').length - 1 ? (
                          <span className="text-primary">{word}</span>
                        ) : (
                          word + ' '
                        )}
                      </span>
                    ))}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
                      {slide.cta}
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      Learn More
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-12 left-4 lg:left-8 flex items-center space-x-4">
          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-12 right-4 lg:right-8 flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border bg-card/50 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border bg-card/50 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
