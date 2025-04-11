
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Quote, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock video testimonial data
const videoTestimonials = [
  {
    id: 1,
    name: "Jessica Chen",
    position: "Tech Startup Founder",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoUrl: "#",
    quote: "Working with Autthia transformed my personal brand completely. I'm now closing deals I couldn't even get meetings for before."
  },
  {
    id: 2,
    name: "Marcus Williams",
    position: "SaaS Founder",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    videoUrl: "#",
    quote: "The authentic approach they took helped me connect with my audience in ways I never thought possible."
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    position: "E-commerce Founder",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    videoUrl: "#",
    quote: "My social presence has completely transformed. I'm now seen as a thought leader in my industry."
  }
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-autthia-purple/5 to-white">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-autthia-pink rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-autthia-blue rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hear Their Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real founders sharing real results from our personal branding strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center reveal-on-scroll">
            {/* Featured video player */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={videoTestimonials.find(v => v.id === activeVideo)?.thumbnail} 
                alt="Video thumbnail" 
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
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-autthia-yellow text-autthia-yellow" />
                    ))}
                  </div>
                </div>
                <h3 className="text-white font-bold">{videoTestimonials.find(v => v.id === activeVideo)?.name}</h3>
                <p className="text-white/80 text-sm">{videoTestimonials.find(v => v.id === activeVideo)?.position}</p>
              </div>
            </div>
            
            {/* Testimonial cards */}
            <div className="space-y-4">
              {videoTestimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id}
                  className={`border-2 cursor-pointer transition-all ${
                    activeVideo === testimonial.id 
                      ? 'border-autthia-purple bg-autthia-purple/5 shadow-lg' 
                      : 'border-transparent hover:border-autthia-purple/30'
                  }`}
                  onClick={() => setActiveVideo(testimonial.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <Quote className={`h-8 w-8 ${activeVideo === testimonial.id ? 'text-autthia-purple' : 'text-autthia-purple/50'}`} />
                      <div>
                        <p className="line-clamp-3 text-muted-foreground mb-2">{testimonial.quote}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className={`rounded-full ${
                              activeVideo === testimonial.id 
                                ? 'bg-autthia-purple text-white hover:bg-autthia-dark-purple' 
                                : 'border border-autthia-purple/50 hover:bg-autthia-purple/10'
                            }`}
                          >
                            Watch
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
