
import React, { useEffect, useState, useRef } from 'react';
import { Globe, Rocket, RotateCcw, Wrench, Smile } from 'lucide-react';

const stats = [{
  id: 1,
  number: "6+",
  label: "Countries Host Autthia's Clients",
  countTo: 6,
  suffix: "+",
  icon: Globe
}, {
  id: 2,
  number: "10x",
  label: "Growth in 90 Days",
  countTo: 10,
  suffix: "x",
  icon: Rocket
}, {
  id: 3,
  number: "92%",
  label: "Clients Renew After 3 Months",
  countTo: 92,
  suffix: "%",
  icon: RotateCcw
}, {
  id: 4,
  number: "100%",
  label: "Done-For-You Content Engine",
  countTo: 100,
  suffix: "%",
  icon: Wrench
}, {
  id: 5,
  number: "200%",
  label: "Increase in Client Smiles (Confirmed via Slack) 😉",
  countTo: 200,
  suffix: "%",
  icon: Smile
}];

const StatCard = ({
  stat,
  index
}: {
  stat: typeof stats[0];
  index: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const IconComponent = stat.icon;

  return (
    <div 
      ref={statRef} 
      className="text-center reveal-on-scroll group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center mb-4">
        <IconComponent 
          className={`text-[#678bd4] mb-3 transition-all duration-300 ${
            isHovered ? 'scale-110 text-[#678bd4]' : ''
          }`} 
          size={32} 
        />
        <div className={`text-5xl lg:text-6xl font-bold gradient-text mb-2 transition-all duration-300 ${
          isHovered ? 'scale-105 drop-shadow-lg' : ''
        }`}
        style={{
          textShadow: isHovered ? '0 0 20px rgba(103, 139, 212, 0.4)' : 'none'
        }}>
          {count}{stat.suffix}
        </div>
      </div>
      <p className="text-gray-600 text-sm lg:text-base font-medium leading-relaxed max-w-[200px] mx-auto">
        {stat.label}
      </p>
    </div>
  );
};

const StatsShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

    // Auto-scroll for screenshots
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      let scrollSpeed = 1;
      let isScrolling = true;

      const autoScroll = () => {
        if (isScrolling && scrollContainer) {
          scrollContainer.scrollLeft += scrollSpeed;

          // Reset to beginning when reached the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      };

      const interval = setInterval(autoScroll, 20);

      // Pause on hover
      const handleMouseEnter = () => {
        isScrolling = false;
      };
      const handleMouseLeave = () => {
        isScrolling = true;
      };

      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        clearInterval(interval);
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Sample analytics screenshots
  const analyticsScreenshots = [
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png"
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 reveal-on-scroll">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">
            Proof Over Promises
          </span>
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Screenshot Carousel */}
        <div className="reveal-on-scroll">
          <div 
            ref={scrollRef} 
            className="flex gap-8 overflow-x-auto scrollbar-hide py-8" 
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...analyticsScreenshots, ...analyticsScreenshots].map((screenshot, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                style={{ aspectRatio: '9/16' }}
              >
                <img 
                  src={screenshot} 
                  alt={`Instagram Analytics Screenshot ${index % analyticsScreenshots.length + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;
