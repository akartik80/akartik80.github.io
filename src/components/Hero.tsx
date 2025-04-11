
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle, Instagram, Star, Sparkles, Zap, Wand2, CircleDashed, Hexagon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const FloatingElement = ({ 
  children, 
  className = "", 
  animationClass = "animate-float" 
}) => (
  <div className={`absolute ${className} ${animationClass}`}>
    {children}
  </div>
);

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-autthia-blue/10 via-white to-autthia-pink/10">
      {/* Decorative pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Decorative elements */}
      <FloatingElement className="top-1/4 -left-4 w-40 h-40 bg-autthia-yellow rounded-full blur-2xl opacity-60">
        <div></div>
      </FloatingElement>
      <FloatingElement className="bottom-1/3 -right-10 w-56 h-56 bg-autthia-pink rounded-full blur-2xl opacity-60" animationClass="animate-float-slow">
        <div></div>
      </FloatingElement>
      <FloatingElement className="top-1/3 right-1/4 w-32 h-32 bg-autthia-blue rounded-full blur-xl opacity-40" animationClass="animate-float-fast">
        <div></div>
      </FloatingElement>
      <FloatingElement className="bottom-1/4 left-1/5 w-24 h-24 bg-autthia-green rounded-full blur-md opacity-40" animationClass="animate-float">
        <div></div>
      </FloatingElement>
      
      {/* Geometric shapes */}
      <FloatingElement className="hidden md:flex top-32 left-1/4 rotate-12" animationClass="animate-spin-slow">
        <CircleDashed className="h-12 w-12 text-autthia-dark-purple opacity-40" />
      </FloatingElement>
      <FloatingElement className="hidden md:flex bottom-40 right-1/3 -rotate-12" animationClass="animate-float-slow">
        <Hexagon className="h-10 w-10 text-autthia-purple opacity-40" />
      </FloatingElement>
      
      {/* Social media elements */}
      <FloatingElement className="hidden md:block top-24 right-1/4 bg-white rounded-xl shadow-lg p-2 backdrop-blur-sm bg-white/70" animationClass="animate-float-slow">
        <Heart className="h-6 w-6 text-pink-500" />
      </FloatingElement>
      
      <FloatingElement className="hidden md:block bottom-32 left-1/4 bg-white rounded-xl shadow-lg p-2 backdrop-blur-sm bg-white/70" animationClass="animate-float">
        <MessageCircle className="h-6 w-6 text-autthia-purple" />
      </FloatingElement>
      
      <FloatingElement className="hidden md:block top-1/3 left-1/5 bg-white rounded-xl shadow-lg p-2 rotate-12 backdrop-blur-sm bg-white/70" animationClass="animate-float-fast">
        <Instagram className="h-6 w-6 text-autthia-dark-purple" />
      </FloatingElement>
      
      {/* Creative shape behind content */}
      <div className="absolute w-full max-w-4xl h-[500px] bg-gradient-to-br from-autthia-purple/10 via-autthia-light-purple/15 to-autthia-pink/20 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] z-0 animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="text-autthia-purple h-10 w-10 absolute -top-6 -left-6 animate-pulse-soft" />
              <div className="p-3 bg-white backdrop-blur-md bg-white/70 rounded-full shadow-lg inline-block mb-2">
                <Wand2 className="h-8 w-8 text-autthia-dark-purple" />
              </div>
              <Zap className="text-autthia-yellow h-10 w-10 absolute -top-4 -right-6 animate-pulse-soft" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 reveal-on-scroll relative">
            <span className="absolute -left-10 top-0 text-autthia-yellow opacity-30 text-8xl font-bold">"</span>
            <span className="bg-gradient-to-r from-autthia-purple via-autthia-dark-purple to-autthia-light-purple bg-clip-text text-transparent">Authentic</span> Personal Branding for <span className="bg-gradient-to-r from-autthia-dark-purple via-autthia-purple to-autthia-light-purple bg-clip-text text-transparent">Founders</span>
            <span className="absolute -right-10 bottom-0 text-autthia-yellow opacity-30 text-8xl font-bold">"</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-autthia-purple to-autthia-light-purple rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 reveal-on-scroll max-w-3xl mx-auto">
            We help founders create organic Instagram content that's true to who you are and gets the attention you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll">
            <Button size="lg" className="bg-gradient-to-r from-autthia-purple to-autthia-dark-purple hover:opacity-90 transition-opacity rounded-full px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-autthia-purple text-autthia-purple hover:bg-autthia-purple/10 rounded-full px-8">
              See Our Work
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-3 reveal-on-scroll">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-autthia-purple to-autthia-${i % 2 === 0 ? 'pink' : 'blue'}`}></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Join 300+ founders</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#process" className="text-muted-foreground hover:text-autthia-purple transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
      
      {/* Wavy bottom design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="rgba(214, 188, 250, 0.3)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
