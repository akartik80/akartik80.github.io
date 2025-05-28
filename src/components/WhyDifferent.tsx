
import React from 'react';

// Data for the four cloud cards
const cloudCards = [
  {
    id: 1,
    title: "We Know Audience Psychology (Deeply)",
    color: "bg-sky-100",
    position: "top-0 left-8"
  },
  {
    id: 2,
    title: "We Work With Founders (Only)",
    color: "bg-blue-100",
    position: "top-16 right-12"
  },
  {
    id: 3,
    title: "We Focus Only on Instagram (And Dominate It)",
    color: "bg-indigo-100",
    position: "top-32 left-1/4"
  },
  {
    id: 4,
    title: "We Make the Process Addictive (In a Good Way)",
    color: "bg-purple-100",
    position: "top-48 right-1/4"
  }
];

const WhyDifferent = () => {
  return (
    <section id="why-different" className="py-24 bg-gradient-to-b from-white via-autthia-blue/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-autthia-light-purple rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-10"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-on-scroll">
          <span className="gradient-text">We're Not Your Typical Agency</span>
        </h2>
        
        {/* Desktop: Staggered cloud layout */}
        <div className="hidden lg:block relative min-h-[600px] reveal-on-scroll">
          {cloudCards.map((cloud, index) => (
            <div
              key={cloud.id}
              className={`absolute ${cloud.position} cloud-card ${cloud.color} group animate-float-slow`}
              style={{
                animationDelay: `${index * 0.5}s`,
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index + 1) * 2}deg)`
              }}
            >
              <div className="relative z-10 p-8 text-center">
                <h3 className="text-lg font-bold text-gray-800 leading-relaxed">
                  {cloud.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-8 reveal-on-scroll">
          {cloudCards.map((cloud, index) => (
            <div
              key={cloud.id}
              className={`cloud-card ${cloud.color} mx-auto animate-float-slow group`}
              style={{
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 leading-relaxed">
                  {cloud.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
