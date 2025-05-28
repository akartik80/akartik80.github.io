
import React, { useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, Heart, Share2, Eye } from 'lucide-react';

const FloatingIcon = ({ Icon, className }: { Icon: React.ComponentType<any>, className: string }) => (
  <Icon className={`absolute text-autthia-purple/20 ${className}`} size={16} />
);

const ProofShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

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
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Sample analytics screenshots - you can replace with actual screenshots
  const analyticsScreenshots = [
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-autthia-blue/5 via-white to-autthia-purple/5">
      {/* Floating Background Icons */}
      <FloatingIcon Icon={TrendingUp} className="top-10 left-[8%] animate-float" />
      <FloatingIcon Icon={BarChart3} className="top-20 right-[12%] animate-float-slow" />
      <FloatingIcon Icon={Heart} className="bottom-20 left-[15%] animate-float-fast" />
      <FloatingIcon Icon={Share2} className="bottom-10 right-[20%] animate-float" />
      <FloatingIcon Icon={Eye} className="top-32 right-[35%] animate-float-slow" />
      <FloatingIcon Icon={TrendingUp} className="bottom-32 left-[40%] animate-float-fast" />
      <FloatingIcon Icon={BarChart3} className="top-16 left-[55%] animate-float" />
      <FloatingIcon Icon={Heart} className="bottom-16 right-[65%] animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text reveal-on-scroll">
          Proof Over Promises
        </h2>

        {/* Auto-scrolling Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Duplicate the array to create seamless loop */}
          {[...analyticsScreenshots, ...analyticsScreenshots].map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                src={screenshot}
                alt={`Instagram Analytics Screenshot ${(index % analyticsScreenshots.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofShowcase;
