import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { id: 1, value: 15, suffix: "+", label: "Years Experience" },
  { id: 2, value: 98, suffix: "%", label: "Client Satisfaction" },
  { id: 3, value: 500, suffix: "+", label: "Projects Completed" },
  { id: 4, value: 50, suffix: "+", label: "Team Members" },
];

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
}

function StatItem({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView);
  
  return (
    <div className="text-center p-8">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-muted-foreground text-lg">{stat.label}</div>
    </div>
  );
}

export function StatsCounter() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
