
import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

const strategyElements = [
  "Niche Research",
  "Target Audience Research",
  "Personal Brand Positioning",
  "Visual Aesthetics Development",
  "Content Calendar Planning",
  "Content Pillars Creation"
];

const Strategy = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
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

  return (
    <section id="strategy" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-on-scroll">
          <span className="gradient-text">Strategic Approach</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <div className="relative flex items-center justify-center">
              {/* Venn Diagram */}
              <div className="absolute animate-pulse-soft w-64 h-64 rounded-full bg-autthia-blue/40 blur-md"></div>
              <div className="absolute animate-pulse-soft delay-300 w-64 h-64 translate-x-20 rounded-full bg-autthia-pink/40 blur-md"></div>
              <div className="absolute animate-pulse-soft delay-500 w-64 h-64 translate-y-20 rounded-full bg-autthia-yellow/40 blur-md"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-xl z-10 text-center">
                <h3 className="text-xl font-bold gradient-text">Your Personal<br />Brand Strategy</h3>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div className="autthia-card bg-autthia-blue/20">
                <h4 className="font-bold">Your Authentic Self</h4>
              </div>
              <div className="autthia-card bg-autthia-pink/20">
                <h4 className="font-bold">Target Audience</h4>
              </div>
              <div className="autthia-card bg-autthia-yellow/20">
                <h4 className="font-bold">Market Needs</h4>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 reveal-on-scroll">
            <h3 className="text-3xl font-bold">We go deep on strategy</h3>
            <p className="text-lg text-muted-foreground">
              We analyze the intersection of who you are, what your audience wants, and what the market needs. This sweet spot becomes your personal branding strategy.
            </p>
            
            <div className="space-y-4">
              {strategyElements.map((item, index) => (
                <div key={index} className="flex items-center gap-3 animate-slide-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-autthia-purple flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
