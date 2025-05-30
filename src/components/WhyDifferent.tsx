
import React, { useEffect } from 'react';
import { Eye, Users, Instagram, Zap } from 'lucide-react';

// Data for the four staggered cards
const differentiators = [{
  id: 1,
  emoji: "🧠",
  icon: <Eye className="h-6 w-6" />,
  title: "Know Audience Psychology (Deeply)",
  description: "We decode how attention works online, and create content that keeps it.",
}, {
  id: 2,
  emoji: "🤝",
  icon: <Users className="h-6 w-6" />,
  title: "Work With Founders (Exclusively)",
  description: "Our clients are all founders. We get your pace, your pressure, and your purpose.",
}, {
  id: 3,
  emoji: "📱",
  icon: <Instagram className="h-6 w-6" />,
  title: "Focus On Instagram (Only)",
  description: "Instagram isn't one of many platforms, it's our only obsession.",
}, {
  id: 4,
  emoji: "✨",
  icon: <Zap className="h-6 w-6" />,
  title: "Use 'Edutelling'™ (Strategically)",
  description: "We blend education + storytelling so you show up as credible, not preachy.",
}];

const processSteps = [{
  id: 1,
  title: "ELLIOT HACKER",
  views: "2.4M+ Views",
  videoUrl: "https://drive.google.com/uc?export=download&id=15f4qyZb16A-JJppss0YjQvTBT87pQV7j",
  thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  angle: "-12deg"
}, {
  id: 2,
  title: "REID HOFFMAN",
  subtitle: "Co-founder LinkedIn",
  views: "3.2M+ Views",
  videoUrl: "https://drive.google.com/uc?export=download&id=142WhHCl0YSSaFCQL4-gjSs-TXlbwwE92",
  thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  angle: "0deg"
}, {
  id: 3,
  title: "THEY JUST",
  subtitle: "ACQUIRED FM",
  views: "4.9M+ Views",
  thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  angle: "12deg"
}, {
  id: 4,
  title: "STARTUP GROWTH",
  subtitle: "Behind the Scenes",
  views: "1.8M+ Views",
  thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  angle: "-8deg"
}, {
  id: 5,
  title: "TECH INSIGHTS",
  subtitle: "Industry Leaders",
  views: "3.6M+ Views",
  thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
  angle: "8deg"
}];

const WhyDifferent = () => {
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
    const elements = document.querySelectorAll('.process-container, .reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Add video autoplay enforcement with proper typing
    const videos = document.querySelectorAll('video[autoplay]');
    videos.forEach(video => {
      (video as HTMLVideoElement).play().catch(console.log);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section id="why-different" className="py-24 bg-gradient-to-br from-purple-50 via-pink-25 to-blue-50 overflow-hidden relative">
        <div className="container mx-auto px-4 relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
            <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent font-semibold">The Autthia Effect</span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-20 reveal-on-scroll">
            <p className="text-gray-600 text-xl leading-relaxed">Most agencies tell you to "post more," "teach more," or "sell more." But we disagree with that approach, instead we:</p>
          </div>
          
          {/* Desktop: Staggered Grid Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto reveal-on-scroll">
            <div className="grid grid-cols-2 gap-x-16 gap-y-12 relative">
              {/* Top row - 2 cards */}
              <div className="flex justify-center">
                <div className="premium-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <div className="text-4xl mb-4">{differentiators[0].emoji}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#678bd4] group-hover:scale-110 transition-transform duration-300">
                      {differentiators[0].icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                    {differentiators[0].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {differentiators[0].description}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <div className="premium-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <div className="text-4xl mb-4">{differentiators[1].emoji}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#678bd4] group-hover:scale-110 transition-transform duration-300">
                      {differentiators[1].icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                    {differentiators[1].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {differentiators[1].description}
                  </p>
                </div>
              </div>
              
              {/* Bottom row - 2 cards */}
              <div className="flex justify-center -mt-4">
                <div className="premium-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <div className="text-4xl mb-4">{differentiators[2].emoji}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#678bd4] group-hover:scale-110 transition-transform duration-300">
                      {differentiators[2].icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                    {differentiators[2].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {differentiators[2].description}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="premium-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <div className="text-4xl mb-4">{differentiators[3].emoji}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#678bd4] group-hover:scale-110 transition-transform duration-300">
                      {differentiators[3].icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                    {differentiators[3].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {differentiators[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tablet: 2x2 Grid */}
          <div className="hidden md:block lg:hidden max-w-4xl mx-auto reveal-on-scroll">
            <div className="grid grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={item.id} className="flex justify-center">
                  <div className="premium-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-[#678bd4] group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-8 reveal-on-scroll">
            {differentiators.map((item, index) => (
              <div key={item.id} className="premium-card group mx-auto transform hover:scale-105 hover:shadow-2xl transition-all duration-500" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#678bd4] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-24 bg-gradient-to-b from-white to-autthia-blue/5 overflow-hidden relative">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-on-scroll">
            <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent font-semibold text-5xl">Reels we've created</span>
          </h2>

          <div className="process-container max-w-6xl mx-auto">
            {/* Top row - 3 phones */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mb-12">
              {processSteps.slice(0, 3).map((step, index) => (
                <div key={step.id} className="process-item reveal-on-scroll opacity-0 group" style={{
                  transform: `rotate(${step.angle})`,
                  animationDelay: `${index * 0.2}s`
                }}>
                  {/* Phone mockup container */}
                  <div className="relative w-64 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group-hover:rotate-0">
                    {/* Phone screen */}
                    <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                      {/* Video content */}
                      <div className="absolute inset-0">
                        {step.videoUrl ? (
                          <video 
                            className="w-full h-full object-cover" 
                            autoPlay 
                            loop 
                            muted
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            x5-playsinline="true"
                            controls={false}
                            disablePictureInPicture
                          >
                            <source src={step.videoUrl} type="video/mp4" />
                            <img src={step.thumbnail} alt={step.title} className="w-full h-full object-cover" />
                          </video>
                        ) : (
                          <img src={step.thumbnail} alt={step.title} className="w-full h-full object-cover" />
                        )}
                        
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
                </div>
              ))}
            </div>

            {/* Bottom row - 2 phones staggered */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-32">
              {processSteps.slice(3, 5).map((step, index) => (
                <div key={step.id} className="process-item reveal-on-scroll opacity-0 group" style={{
                  transform: `rotate(${step.angle})`,
                  animationDelay: `${(index + 3) * 0.2}s`
                }}>
                  {/* Phone mockup container */}
                  <div className="relative w-64 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group-hover:rotate-0">
                    {/* Phone screen */}
                    <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                      {/* Video content */}
                      <div className="absolute inset-0">
                      {step.videoUrl ? (
                          <video 
                            className="w-full h-full object-cover" 
                            autoPlay 
                            loop 
                            muted
                            playsInline
                            preload="metadata"
                            webkit-playsinline="true"
                            x5-playsinline="true"
                            controls={false}
                            disablePictureInPicture
                          >
                            <source src={step.videoUrl} type="video/mp4" />
                            <img src={step.thumbnail} alt={step.title} className="w-full h-full object-cover" />
                          </video>
                        ) : (
                          <img src={step.thumbnail} alt={step.title} className="w-full h-full object-cover" />
                        )}
                        
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyDifferent;
