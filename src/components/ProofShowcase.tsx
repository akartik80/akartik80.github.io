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
  const analyticsScreenshots = ["/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png", "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png", "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png", "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png", "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png", "/lovable-uploads/b0546885-f305-4ba2-aab2-73a3c9c9593a.png"];
  return;
};
export default ProofShowcase;