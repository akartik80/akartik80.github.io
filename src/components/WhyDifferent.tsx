
import React, { useEffect, useRef } from 'react';
import { Eye, Users, Instagram, Zap } from 'lucide-react';

// Data for the four cloud cards with updated headings
const differentiators = [{
  id: 1,
  icon: <Eye className="h-8 w-8" />,
  title: "We Know Audience Psychology",
  subtitle: "(Deeply)",
  description: "We decode how attention works online—and create content that keeps it.",
  bgColor: "#E0F2FE", // light sky blue
  delay: "0s"
}, {
  id: 2,
  icon: <Users className="h-8 w-8" />,
  title: "We Work With Founders",
  subtitle: "(Only)",
  description: "Our clients are all founders, so we get your pace, your pressure, and your purpose.",
  bgColor: "#F0F9FF", // very light blue
  delay: "0.2s"
}, {
  id: 3,
  icon: <Instagram className="h-8 w-8" />,
  title: "We Focus Only on Instagram",
  subtitle: "(And Dominate It)",
  description: "Instagram isn't one of many things we do—it's the only thing we do.",
  bgColor: "#DBEAFE", // light blue
  delay: "0.4s"
}, {
  id: 4,
  icon: <Zap className="h-8 w-8" />,
  title: "We Make the Process Addictive",
  subtitle: "(In a Good Way)",
  description: "We mix storytelling and education so you come across as human and credible—never preachy.",
  bgColor: "#EFF6FF", // pale blue
  delay: "0.6s"
}];

const WhyDifferent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cards = cardsRef.current;
        if (entry.isIntersecting) {
          // Fade in clouds as they enter viewport
          cards.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
              }, index * 200);
            }
          });
        } else {
          // Fade out clouds as they leave viewport
          cards.forEach((card) => {
            if (card) {
              card.style.opacity = '0.3';
              card.style.transform = 'translateY(20px) scale(0.95)';
            }
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(section);

    return () => observer.unobserve(section);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="why-different" 
      className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="gradient-text">Why Not Your Typical Agency</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <p className="text-lg text-muted-foreground mb-4">
            Most agencies tell you to "post more," "teach more," or "sell more."
            We believe true influence comes from stories that educate without preaching.
          </p>
        </div>
        
        {/* Staggered cloud layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop staggered layout */}
          <div className="hidden lg:block">
            {/* First row - 2 clouds */}
            <div className="flex justify-center items-start gap-16 mb-8">
              {[0, 1].map((index) => (
                <div
                  key={differentiators[index].id}
                  ref={(el) => cardsRef.current[index] = el}
                  className="cloud-card group"
                  style={{
                    backgroundColor: differentiators[index].bgColor,
                    opacity: '0',
                    transform: 'translateY(30px) scale(0.9)',
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: differentiators[index].delay,
                    marginTop: index === 1 ? '4rem' : '0'
                  }}
                >
                  <div className="text-center relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
                        {differentiators[index].icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {differentiators[index].title}
                    </h3>
                    <p className="text-lg font-semibold mb-3 text-sky-700">
                      {differentiators[index].subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {differentiators[index].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - 2 clouds */}
            <div className="flex justify-center items-start gap-16">
              {[2, 3].map((index) => (
                <div
                  key={differentiators[index].id}
                  ref={(el) => cardsRef.current[index] = el}
                  className="cloud-card group"
                  style={{
                    backgroundColor: differentiators[index].bgColor,
                    opacity: '0',
                    transform: 'translateY(30px) scale(0.9)',
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: differentiators[index].delay,
                    marginTop: index === 2 ? '4rem' : '0'
                  }}
                >
                  <div className="text-center relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
                        {differentiators[index].icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {differentiators[index].title}
                    </h3>
                    <p className="text-lg font-semibold mb-3 text-sky-700">
                      {differentiators[index].subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {differentiators[index].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical layout */}
          <div className="lg:hidden space-y-8">
            {differentiators.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => cardsRef.current[index] = el}
                className="cloud-card group mx-auto"
                style={{
                  backgroundColor: item.bgColor,
                  opacity: '0',
                  transform: 'translateY(30px) scale(0.9)',
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  animationDelay: item.delay,
                  maxWidth: '320px'
                }}
              >
                <div className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold mb-3 text-sky-700">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
