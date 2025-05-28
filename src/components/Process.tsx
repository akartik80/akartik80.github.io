import React, { useEffect } from 'react';
const processSteps = [{
  id: 1,
  title: "ELLIOT HACKER",
  views: "2.4M+ Views",
  thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  angle: "-12deg"
}, {
  id: 2,
  title: "REID HOFFMAN",
  subtitle: "Co-founder LinkedIn",
  views: "3.2M+ Views",
  thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  angle: "0deg"
}, {
  id: 3,
  title: "THEY JUST",
  subtitle: "ACQUIRED FM",
  views: "4.9M+ Views",
  thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  angle: "12deg"
}];
const Process = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Add a delay for each child element to create a cascade effect
          if (entry.target.children) {
            Array.from(entry.target.children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 200);
            });
          }
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.process-container');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <section id="process" className="py-20 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-on-scroll">
          <span className="gradient-text">Scroll-Stopping Founder Reels</span>
        </h2>
        
        <div className="process-container flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {processSteps.map((step, index) => <div key={step.id} className="process-item reveal-on-scroll opacity-0 group" style={{
          transform: `rotate(${step.angle})`,
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Phone mockup container */}
              <div className="relative w-64 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group-hover:rotate-0">
                {/* Phone screen */}
                <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                  {/* Video content */}
                  <div className="absolute inset-0">
                    <img src={step.thumbnail} alt={step.title} className="w-full h-full object-cover" />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                      {/* Top content */}
                      <div className="flex justify-between items-start">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        
                      </div>
                      
                      {/* Bottom content */}
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg leading-tight">{step.title}</h3>
                        {step.subtitle && <p className="text-sm text-white/80">{step.subtitle}</p>}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/60">{step.views}</span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Play indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone details */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* Floating elements for 3D effect */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-autthia-purple/20 rounded-full blur-sm animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-autthia-blue/20 rounded-full blur-sm animate-float-fast"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Process;