
import React, { useEffect, useState } from 'react';
import { Play, Pause, Video } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Sample videos - in a real implementation, you would fetch these from an API
const videos = [
  {
    id: 1,
    title: "Tech Founder Journey",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    client: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Startup Morning Routine",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    client: "Mark Davis"
  },
  {
    id: 3,
    title: "Product Launch Strategy",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    client: "Emma Wilson"
  },
  {
    id: 4,
    title: "Founder Interview Series",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    client: "Alex Brown"
  },
  {
    id: 5,
    title: "Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    client: "Jessica Smith"
  },
  {
    id: 6,
    title: "Morning Routine",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    client: "Tom Harris"
  }
];

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="video-card h-full">
      <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? 
              <Pause className="h-8 w-8 text-white" /> : 
              <Play className="h-8 w-8 text-white ml-1" />
            }
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white font-bold">{video.title}</h3>
          <p className="text-white/80 text-sm">{video.client}</p>
        </div>
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  const [autoplay, setAutoplay] = useState(true);
  const [api, setApi] = useState(null);
  
  useEffect(() => {
    // Set up intersection observer for animation on scroll
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
  
  // Set up autoplay functionality
  useEffect(() => {
    if (!api || !autoplay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [api, autoplay]);

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white via-autthia-blue/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-autthia-blue rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-20"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="gradient-text">Our Work</span>
        </h2>
        
        <div className="flex items-center justify-center mb-8 reveal-on-scroll">
          <Video className="w-6 h-6 text-autthia-purple mr-2" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Experience our authentic vertical video content created for founders just like you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto reveal-on-scroll">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAutoplay(!autoplay)}
              className="text-xs"
            >
              {autoplay ? "Pause Autoplay" : "Enable Autoplay"}
            </Button>
          </div>
          
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5">
                  <VideoCard video={video} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 h-10 w-10" />
              <CarouselNext className="static translate-y-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
