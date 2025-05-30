
import React, { useEffect } from 'react';
import { Eye, Users, Instagram, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Data for the four cards in horizontal line
const differentiators = [{
  id: 1,
  emoji: "🧠",
  title: "Know Audience Psychology (Deeply)",
  description: "We decode how attention works online, and create content that keeps it.",
}, {
  id: 2,
  emoji: "🤝",
  title: "Work With Founders (Exclusively)",
  description: "Our clients are all founders. We get your pace, your pressure, and your purpose.",
}, {
  id: 3,
  emoji: "📱",
  title: "Focus On Instagram (Only)",
  description: "Instagram isn't one of many platforms, it's our only obsession.",
}, {
  id: 4,
  emoji: "✨",
  title: "Use 'Edutelling'™ (Strategically)",
  description: "We blend education + storytelling so you show up as credible, not preachy.",
}];

// 4 phone mockups with the same video
const processSteps = [{
  id: 1,
  videoUrl: "https://drive.google.com/uc?export=download&id=142WhHCl0YSSaFCQL4-gjSs-TXlbwwE92",
  thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  angle: "-8deg"
}, {
  id: 2,
  videoUrl: "https://drive.google.com/uc?export=download&id=142WhHCl0YSSaFCQL4-gjSs-TXlbwwE92",
  thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  angle: "4deg"
}, {
  id: 3,
  videoUrl: "https://drive.google.com/uc?export=download&id=142WhHCl0YSSaFCQL4-gjSs-TXlbwwE92",
  thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  angle: "-3deg"
}, {
  id: 4,
  videoUrl: "https://drive.google.com/uc?export=download&id=142WhHCl0YSSaFCQL4-gjSs-TXlbwwE92",
  thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  angle: "6deg"
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
      <section id="why-different" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative">
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
          
          {/* Desktop & Tablet: Horizontal Line with staggered positioning */}
          <div className="hidden md:block max-w-7xl mx-auto reveal-on-scroll">
            <div className="grid grid-cols-4 gap-6 items-start">
              {differentiators.map((item, index) => (
                <div key={item.id} className={`flex justify-center ${index === 1 || index === 3 ? 'mt-8' : ''}`}>
                  <div className="premium-card group transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <div className="text-4xl mb-4">{item.emoji}</div>
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal-on-scroll">
            <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent font-semibold text-5xl">Scroll-Stopping Founder Reels</span>
          </h2>

          <div className="max-w-6xl mx-auto reveal-on-scroll relative py-8">
            {/* Fade gradients on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full px-12"
            >
              <CarouselContent className="-ml-12 py-12">
                {processSteps.map((step, index) => (
                  <CarouselItem key={step.id} className="pl-12 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="group mx-auto w-fit px-8" style={{
                      transform: `rotate(${step.angle})`,
                      animationDelay: `${index * 0.2}s`
                    }}>
                      {/* Phone mockup container */}
                      <div className="relative w-64 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group-hover:rotate-0 mx-auto">
                        {/* Phone screen */}
                        <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                          {/* Video content */}
                          <div className="absolute inset-0">
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
                              <img src={step.thumbnail} alt="Video content" className="w-full h-full object-cover" />
                            </video>
                            
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
                            
                            {/* Play indicator on hover */}
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
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#678bd4]/20 rounded-full blur-sm animate-pulse"></div>
                      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400/20 rounded-full blur-sm animate-pulse delay-75"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Enhanced carousel controls */}
              <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 w-14 h-14 border-2 border-indigo-500 bg-white hover:bg-indigo-50 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-300/50 transition-all duration-300 text-indigo-600 hover:text-indigo-700" />
              <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 w-14 h-14 border-2 border-indigo-500 bg-white hover:bg-indigo-50 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-300/50 transition-all duration-300 text-indigo-600 hover:text-indigo-700" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyDifferent;
