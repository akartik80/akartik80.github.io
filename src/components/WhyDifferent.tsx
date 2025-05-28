
import React from 'react';
import { Eye, Users, Instagram, Zap } from 'lucide-react';

// Data for the four circle cards
const differentiators = [{
  id: 1,
  icon: <Eye className="h-8 w-8" />,
  title: "We Know Audience Psychology (Deeply)",
  description: "We decode how attention works online—and create content that keeps it.",
  bgColor: "bg-blue-100",
  position: "top-8 left-8"
}, {
  id: 2,
  icon: <Users className="h-8 w-8" />,
  title: "We Work With Founders (Only)",
  description: "Our clients are all founders, so we get your pace, your pressure, and your purpose.",
  bgColor: "bg-purple-100",
  position: "top-16 right-12"
}, {
  id: 3,
  icon: <Instagram className="h-8 w-8" />,
  title: "We Focus Only on Instagram (And Dominate It)",
  description: "Instagram isn't one of many things we do—it's the only thing we do.",
  bgColor: "bg-pink-100",
  position: "top-32 left-16"
}, {
  id: 4,
  icon: <Zap className="h-8 w-8" />,
  title: "We Make the Process Addictive (In a Good Way)",
  description: "We mix storytelling and education so you come across as human and credible—never preachy.",
  bgColor: "bg-cyan-100",
  position: "top-48 right-8"
}];

const WhyDifferent = () => {
  return (
    <section id="why-different" className="py-24 bg-gradient-to-b from-white via-autthia-blue/5 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-autthia-light-purple rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-10"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="gradient-text">We're Not Your Typical Agency</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <p className="text-lg text-muted-foreground">
            Most agencies tell you to "post more," "teach more," or "sell more."
            We believe true influence comes from stories that educate without preaching.
          </p>
        </div>
        
        {/* Desktop: Staggered Layout */}
        <div className="hidden md:block relative min-h-[600px] reveal-on-scroll">
          {differentiators.map((item, index) => (
            <div 
              key={item.id} 
              className={`absolute ${item.position} circle-cloud-card ${item.bgColor} group animate-float-slow`}
              style={{ 
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${6 + index}s`
              }}
            >
              <div className="flex flex-col items-center text-center p-8 h-full justify-center">
                <div className="text-autthia-purple group-hover:text-autthia-dark-purple transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-autthia-dark-purple transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-8 reveal-on-scroll">
          {differentiators.map((item, index) => (
            <div 
              key={item.id} 
              className={`circle-cloud-card ${item.bgColor} group animate-float-slow mx-auto`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${6 + index}s`
              }}
            >
              <div className="flex flex-col items-center text-center p-8 h-full justify-center">
                <div className="text-autthia-purple group-hover:text-autthia-dark-purple transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-autthia-dark-purple transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
