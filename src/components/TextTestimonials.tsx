
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "David Palmer",
    position: "AI Startup Founder",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    text: "Autthia helped me establish a personal brand that truly reflects who I am as a founder. The results have been incredible—more investor meetings, better networking opportunities, and a growing audience that resonates with my story.",
    stars: 5
  },
  {
    id: 2,
    name: "Amelia Watson",
    position: "Finance Tech Founder",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Working with Autthia transformed how I present myself online. My content feels authentic to who I am, while still being strategic and professional. I've seen a 300% increase in engagement and countless new business opportunities.",
    stars: 5
  },
  {
    id: 3,
    name: "Rajiv Mehta",
    position: "Health Tech Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "I was skeptical about personal branding at first, but Autthia made the process painless and actually enjoyable. The strategy was tailored to my personality and goals, not a cookie-cutter approach. The impact on my business has been measurable and significant.",
    stars: 5
  },
  {
    id: 4,
    name: "Zoe Chen",
    position: "EdTech Founder",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    text: "As an introvert, I was worried about putting myself out there. Autthia helped me find a voice that feels comfortable while still making an impact. Now I'm recognized as a thought leader in my industry, and it's opened doors I never thought possible.",
    stars: 5
  },
  {
    id: 5,
    name: "Marcus Johnson",
    position: "B2B SaaS Founder",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "The Autthia team understood exactly what I needed. They created a content strategy that showcases my expertise while keeping it authentic. My personal brand now attracts ideal clients who already trust me before we even speak.",
    stars: 5
  }
];

const TextTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialPreview = testimonials[(currentIndex + 1) % testimonials.length];
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-br from-autthia-purple/5 via-white to-autthia-yellow/10">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-autthia-blue rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-green rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">What Founders Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've helped hundreds of founders build authentic personal brands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 reveal-on-scroll">
            {/* Main testimonial */}
            <Card className="col-span-5 md:col-span-3 border-2 border-autthia-purple/20 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="h-12 w-12 text-autthia-purple/20" />
                      <div className="flex">
                        {[...Array(currentTestimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-autthia-yellow text-autthia-yellow" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-lg mb-8 italic text-foreground/90 leading-relaxed">
                      "{currentTestimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {currentTestimonial.avatar ? (
                          <img 
                            src={currentTestimonial.avatar} 
                            alt={currentTestimonial.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-autthia-purple/30"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-autthia-purple/20 flex items-center justify-center">
                            <User className="h-6 w-6 text-autthia-purple" />
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-autthia-purple rounded-full flex items-center justify-center border-2 border-white">
                          <Quote className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">{currentTestimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{currentTestimonial.position}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-autthia-purple/30 hover:bg-autthia-purple/10 hover:border-autthia-purple"
                        onClick={prevTestimonial}
                      >
                        <ChevronLeft className="h-5 w-5 text-autthia-purple" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-autthia-purple/30 hover:bg-autthia-purple/10 hover:border-autthia-purple"
                        onClick={nextTestimonial}
                      >
                        <ChevronRight className="h-5 w-5 text-autthia-purple" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Preview of next testimonial */}
            <Card className="col-span-5 md:col-span-2 border border-autthia-purple/10 bg-white/30 backdrop-blur-sm hover:border-autthia-purple/30 transition-all cursor-pointer overflow-hidden h-full" onClick={nextTestimonial}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 flex justify-between items-start">
                  <h3 className="text-lg font-medium">Next Testimonial</h3>
                  <ChevronRight className="h-5 w-5 text-autthia-purple" />
                </div>
                
                <div className="flex-grow relative">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <p className="text-muted-foreground line-clamp-4 italic text-sm">
                      "{nextTestimonialPreview.text}"
                    </p>
                    
                    <div className="flex items-center gap-3 mt-4">
                      {nextTestimonialPreview.avatar ? (
                        <img 
                          src={nextTestimonialPreview.avatar} 
                          alt={nextTestimonialPreview.name} 
                          className="w-10 h-10 rounded-full object-cover border border-autthia-purple/20"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-autthia-purple/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-autthia-purple/50" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-sm">{nextTestimonialPreview.name}</h4>
                        <p className="text-xs text-muted-foreground">{nextTestimonialPreview.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextTestimonials;
