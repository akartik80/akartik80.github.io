
import React, { useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, Heart, Share2, Eye } from 'lucide-react';

const FloatingIcon = ({
  Icon,
  className
}: {
  Icon: React.ComponentType<any>;
  className: string;
}) => <Icon className={`absolute text-autthia-purple/20 ${className}`} size={16} />;

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
    "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">
            Proof of Results
          </span>
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {analyticsScreenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >
              <img
                src={screenshot}
                alt={`Analytics screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <FloatingIcon Icon={TrendingUp} className="top-4 right-4" />
              <FloatingIcon Icon={BarChart3} className="bottom-4 left-4" />
              <FloatingIcon Icon={Heart} className="top-4 left-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofShowcase;
