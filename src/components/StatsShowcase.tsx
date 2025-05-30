import React, { useEffect, useState, useRef } from 'react';
import { Instagram, Diamond, Star, Smile } from 'lucide-react';
const stats = [{
  id: 1,
  number: "6+",
  label: "Countries Host Autthia's Clients",
  countTo: 6,
  suffix: "+"
}, {
  id: 2,
  number: "10x",
  label: "Growth in 90 Days",
  countTo: 10,
  suffix: "x"
}, {
  id: 3,
  number: "92%",
  label: "Clients Renew After 3 Months",
  countTo: 92,
  suffix: "%"
}, {
  id: 4,
  number: "100%",
  label: "Done-For-You Content Engine",
  countTo: 100,
  suffix: "%"
}, {
  id: 5,
  number: "200%",
  label: "Increase in Client Smiles (Confirmed via Slack) 😉",
  countTo: 200,
  suffix: "%"
}];
const FloatingIcon = ({
  Icon,
  className
}: {
  Icon: React.ComponentType<any>;
  className: string;
}) => <Icon className={`absolute text-autthia-purple/20 ${className}`} size={20} />;
const StatCard = ({
  stat,
  index
}: {
  stat: typeof stats[0];
  index: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Count-up animation
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = stat.countTo / steps;
          let currentCount = 0;
          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= stat.countTo) {
              setCount(stat.countTo);
              clearInterval(timer);
            } else {
              setCount(Math.floor(currentCount));
            }
          }, duration / steps);
        }
      });
    }, {
      threshold: 0.3
    });
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    return () => observer.disconnect();
  }, [stat.countTo, hasAnimated]);
  return <div ref={statRef} className="text-center reveal-on-scroll" style={{
    animationDelay: `${index * 0.1}s`
  }}>
      <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-gray-600 text-sm lg:text-base font-medium leading-relaxed max-w-[200px] mx-auto">
        {stat.label}
      </p>
    </div>;
};
const StatsShowcase = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <section className="py-24 relative overflow-hidden bg-gradient-to-r from-autthia-purple/5 via-white to-autthia-blue/5">
      {/* Floating Background Icons */}
      <FloatingIcon Icon={Instagram} className="top-10 left-[10%] animate-float" />
      <FloatingIcon Icon={Diamond} className="top-20 right-[15%] animate-float-slow" />
      <FloatingIcon Icon={Star} className="bottom-20 left-[20%] animate-float-fast" />
      <FloatingIcon Icon={Smile} className="bottom-10 right-[25%] animate-float" />
      <FloatingIcon Icon={Instagram} className="top-32 right-[40%] animate-float-slow" />
      <FloatingIcon Icon={Diamond} className="bottom-32 left-[45%] animate-float-fast" />
      <FloatingIcon Icon={Star} className="top-16 left-[60%] animate-float" />
      <FloatingIcon Icon={Smile} className="bottom-16 right-[70%] animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, index) => <StatCard key={stat.id} stat={stat} index={index} />)}
        </div>
      </div>
    </section>;
};
export default StatsShowcase;