import React, { useEffect, useState, useRef } from 'react';
import { Eye, Users, Instagram, Zap, Diamond, Star, Smile } from 'lucide-react';
const circleData = [{
  id: 1,
  title: "We Know Audience Psychology",
  subtitle: "(Deeply)",
  description: "Understanding what makes founders stop scrolling, engage, and convert through psychological triggers",
  color: "#b8d0ff"
}, {
  id: 2,
  title: "We Work With Founders",
  subtitle: "(Exclusively)",
  description: "100% focused on founder stories, challenges, and authentic personal branding strategies",
  color: "#9abafa"
}, {
  id: 3,
  title: "We Focus On Instagram",
  subtitle: "(Only)",
  description: "Master-level expertise in Instagram's algorithm, trends, and vertical video optimization",
  color: "#80a9fd"
}, {
  id: 4,
  title: "We Use Edutelling",
  subtitle: "(Signaturely)",
  description: "Our proprietary framework combining education with storytelling for maximum impact",
  color: "#6f90d8"
}];

// Sample videos for phone mockups
const videos = [{
  id: 1,
  title: "Tech Founder Journey",
  thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  client: "Sarah Johnson"
}, {
  id: 2,
  title: "Startup Morning Routine",
  thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  client: "Mark Davis"
}, {
  id: 3,
  title: "Product Launch Strategy",
  thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  client: "Emma Wilson"
}, {
  id: 4,
  title: "Founder Interview Series",
  thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  client: "Alex Brown"
}, {
  id: 5,
  title: "Behind the Scenes",
  thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  client: "Jessica Smith"
}];
const FloatingIcon = ({
  Icon,
  className
}: {
  Icon: React.ComponentType<any>;
  className: string;
}) => <Icon className={`absolute text-autthia-purple/20 ${className}`} size={20} />;
const CircleCard = ({
  circle,
  index
}: {
  circle: typeof circleData[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.3
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div ref={cardRef} className={`circle-cloud-card mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
    backgroundColor: circle.color,
    animationDelay: `${index * 0.2}s`
  }}>
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
          {circle.title}
        </h3>
        <p className="text-sm font-medium text-white/90 mb-3">
          {circle.subtitle}
        </p>
        <p className="text-xs text-white/80 leading-relaxed">
          {circle.description}
        </p>
      </div>
    </div>;
};
const PhoneMockup = ({
  video,
  className = ""
}: {
  video: typeof videos[0];
  className?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return <div className={`relative ${className}`}>
      <div className="w-32 sm:w-40 md:w-48 lg:w-56 aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl border-4 border-gray-800 relative">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all" onClick={() => setIsPlaying(!isPlaying)}>
            <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
          <h4 className="text-white font-bold text-xs mb-1">{video.title}</h4>
          <p className="text-white/80 text-xs">{video.client}</p>
        </div>
      </div>
    </div>;
};
const UnifiedShowcase = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    const observer = new IntersectionObserver(entries => {
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
  return <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Floating Background Icons */}
      <FloatingIcon Icon={Instagram} className="top-10 left-[10%] animate-float" />
      <FloatingIcon Icon={Diamond} className="top-20 right-[15%] animate-float-slow" />
      <FloatingIcon Icon={Star} className="bottom-20 left-[20%] animate-float-fast" />
      <FloatingIcon Icon={Smile} className="bottom-10 right-[25%] animate-float" />
      <FloatingIcon Icon={Instagram} className="top-32 right-[40%] animate-float-slow" />
      <FloatingIcon Icon={Diamond} className="bottom-32 left-[45%] animate-float-fast" />
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-autthia-light-purple rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="gradient-text">The Autthia Effect</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 reveal-on-scroll">
          Most agencies tell you to "post more," "teach more," or "sell more." But we disagree with that approach, instead we:
        </p>

        {/* Circle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20">
          {circleData.map((circle, index) => <CircleCard key={circle.id} circle={circle} index={index} />)}
        </div>

        {/* Transition to Phone Mockups */}
        <div className="text-center mb-12">
          
          
        </div>

        {/* Phone Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top Row - 3 Phones */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 reveal-on-scroll">
            <PhoneMockup video={videos[0]} className="transform -rotate-3" />
            <PhoneMockup video={videos[1]} className="transform rotate-1 scale-110" />
            <PhoneMockup video={videos[2]} className="transform rotate-3" />
          </div>

          {/* Bottom Row - 2 Staggered Phones */}
          
        </div>
      </div>
    </section>;
};
export default UnifiedShowcase;