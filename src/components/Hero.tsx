
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle, Instagram } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative elements */}
      <FloatingElement className="top-1/4 -left-4 w-32 h-32 bg-autthia-yellow rounded-full blur-2xl opacity-60" />
      <FloatingElement className="bottom-1/4 -right-10 w-40 h-40 bg-autthia-pink rounded-full blur-2xl opacity-60" animationClass="animate-float-slow" />
      <FloatingElement className="top-1/3 right-1/4 w-24 h-24 bg-autthia-blue rounded-full blur-xl opacity-40" animationClass="animate-float-fast" />
      
      {/* Instagram UI elements */}
      <FloatingElement className="hidden md:block top-24 right-1/4 bg-white rounded-xl shadow-lg p-2" animationClass="animate-float-slow">
        <Heart className="h-6 w-6 text-pink-500" />
      </FloatingElement>
      
      <FloatingElement className="hidden md:block bottom-32 left-1/4 bg-white rounded-xl shadow-lg p-2" animationClass="animate-float">
        <MessageCircle className="h-6 w-6 text-autthia-purple" />
      </FloatingElement>
      
      <FloatingElement className="hidden md:block top-1/3 left-1/5 bg-white rounded-xl shadow-lg p-2 rotate-12" animationClass="animate-float-fast">
        <Instagram className="h-6 w-6 text-autthia-dark-purple" />
      </FloatingElement>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 reveal-on-scroll">
            <span className="gradient-text">Authentic</span> Personal Branding for <span className="gradient-text">Founders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 reveal-on-scroll">
            We help founders create organic Instagram content that's true to who you are and gets the attention you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll">
            <Button size="lg" className="bg-gradient-to-r from-autthia-purple to-autthia-dark-purple hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-autthia-purple text-autthia-purple hover:bg-autthia-purple/10">
              See Our Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#process" className="text-muted-foreground hover:text-autthia-purple transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
