
import React, { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play } from 'lucide-react';

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

const VideoCard = ({ video }) => (
  <div className="video-card min-w-[280px] max-w-xs flex-shrink-0 mx-4">
    <div className="relative aspect-[9/16] bg-gray-200 overflow-hidden rounded-xl">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        className="w-full h-full object-cover"
      />
      <div className="video-overlay p-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-autthia-purple flex items-center justify-center">
              <Play className="h-4 w-4 text-white" />
            </div>
            <span className="text-white font-medium">{video.client}</span>
          </div>
          <h3 className="text-white font-bold">{video.title}</h3>
        </div>
      </div>
    </div>
  </div>
);

const VideoShowcase = () => {
  useEffect(() => {
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

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="gradient-text">Our Work</span>
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 reveal-on-scroll">
          Swipe through our collection of authentic content we've created for founders just like you.
        </p>
        
        <div className="reveal-on-scroll">
          <ScrollArea className="w-full h-[500px] rounded-md border p-4">
            <div className="flex pb-8">
              {videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
