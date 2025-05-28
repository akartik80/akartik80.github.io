
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Video testimonial data
const videoTestimonials = [
  {
    id: 1,
    name: "Jessica Chen",
    position: "Tech Startup Founder",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "#",
    quote: "In 8 weeks, they grew my Instagram from 1,450 to 35k followers and Facebook from 1k to 50k, with content consistently reaching 30k–50k organic views."
  },
  {
    id: 2,
    name: "Marcus Williams",
    position: "SaaS Founder",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    videoUrl: "#",
    quote: "Working with Autthia transformed my personal brand completely. I'm now closing deals I couldn't even get meetings for before."
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    position: "E-commerce Founder",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "#",
    quote: "The authentic approach they took helped me connect with my audience in ways I never thought possible. My revenue increased by 300%."
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Tech Consultant",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    videoUrl: "#",
    quote: "My social presence has completely transformed. I went from zero followers to being recognized as a thought leader in my industry."
  },
  {
    id: 5,
    name: "Amanda Foster",
    position: "Digital Marketing Agency Owner",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    videoUrl: "#",
    quote: "The results speak for themselves - 10x growth in just 90 days. My clients are now asking me how I became so visible online."
  }
];

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    setIsPlaying(false);
  };

  const currentTestimonial = videoTestimonials[currentIndex];

  return (
    <section id="video-testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-autthia-purple/5 to-white">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-autthia-pink rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-autthia-blue rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What Founders Are Saying</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real founders sharing real results from our personal branding strategies.
            </p>
          </div>
          
          <div className="relative">
            {/* Main testimonial card */}
            <Card className="bg-white rounded-2xl shadow-xl overflow-hidden reveal-on-scroll">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Column - Video */}
                  <div className="relative aspect-video bg-black">
                    <img 
                      src={currentTestimonial.thumbnail} 
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
                    {/* Duration bar (optional) */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-full h-1 bg-white/30 rounded-full">
                        <div className="w-1/3 h-full bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Quote */}
                  <div className="p-8 flex flex-col justify-center">
                    <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                      "{currentTestimonial.quote}"
                    </blockquote>
                    <div>
                      <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{currentTestimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-autthia-purple hover:bg-autthia-purple hover:text-white transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Pagination dots */}
              <div className="flex gap-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-autthia-purple' 
                        : 'bg-autthia-purple/30 hover:bg-autthia-purple/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-autthia-purple hover:bg-autthia-purple hover:text-white transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
