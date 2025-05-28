import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle, Instagram, Star, Sparkles, Zap, Wand2, CircleDashed, Hexagon, Play } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
const FloatingElement = ({
  children,
  className = "",
  animationClass = "animate-float"
}) => <div className={`absolute ${className} ${animationClass}`}>
    {children}
  </div>;
const Hero = () => {
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
  return <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#678bd4]/10 via-white to-[#678bd4]/5">
      {/* Decorative pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Background Emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute text-2xl opacity-30 animate-float" style={{
        bottom: '40%',
        left: '15%'
      }}>⚡</span>
        <span className="absolute text-xl opacity-25 animate-float-slow" style={{
        top: '60%',
        left: '5%'
      }}>✨</span>
        <span className="absolute text-2xl opacity-30 animate-float-fast" style={{
        bottom: '45%',
        left: '75%'
      }}>💎</span>
        <span className="absolute text-xl opacity-25 animate-float" style={{
        top: '80%',
        left: '25%'
      }}>🎬</span>
      </div>
      
      {/* Decorative elements with brand color */}
      <FloatingElement className="top-1/4 -left-4 w-40 h-40 bg-[#678bd4]/60 rounded-full blur-2xl opacity-60">
        <div></div>
      </FloatingElement>
      <FloatingElement className="bottom-1/3 -right-10 w-56 h-56 bg-[#678bd4]/40 rounded-full blur-2xl opacity-60" animationClass="animate-float-slow">
        <div></div>
      </FloatingElement>
      <FloatingElement className="top-1/3 right-1/4 w-32 h-32 bg-[#678bd4]/50 rounded-full blur-xl opacity-40" animationClass="animate-float-fast">
        <div></div>
      </FloatingElement>
      <FloatingElement className="bottom-1/4 left-1/5 w-24 h-24 bg-[#678bd4]/30 rounded-full blur-md opacity-40" animationClass="animate-float">
        <div></div>
      </FloatingElement>
      
      {/* Geometric shapes */}
      <FloatingElement className="hidden md:flex top-32 left-1/4 rotate-12" animationClass="animate-spin-slow">
        <CircleDashed className="h-12 w-12 text-[#678bd4] opacity-40" />
      </FloatingElement>
      <FloatingElement className="hidden md:flex bottom-40 right-1/3 -rotate-12" animationClass="animate-float-slow">
        <Hexagon className="h-10 w-10 text-[#678bd4] opacity-40" />
      </FloatingElement>
      
      {/* Social media elements */}
      <FloatingElement className="hidden md:block top-24 right-1/4 bg-white rounded-xl shadow-lg p-2 backdrop-blur-sm bg-white/70" animationClass="animate-float-slow">
        <Heart className="h-6 w-6 text-pink-500" />
      </FloatingElement>
      
      <FloatingElement className="hidden md:block bottom-32 left-1/4 bg-white rounded-xl shadow-lg p-2 backdrop-blur-sm bg-white/70" animationClass="animate-float">
        <MessageCircle className="h-6 w-6 text-[#678bd4]" />
      </FloatingElement>
      
      {/* Creative shape behind content */}
      <div className="absolute w-full max-w-4xl h-[500px] bg-gradient-to-br from-[#678bd4]/10 via-[#678bd4]/15 to-[#678bd4]/20 rounded-[30%_70%_70%_30%/30%_40%_60%_70%] z-0 animate-pulse-soft"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="text-[#678bd4] h-10 w-10 absolute -top-6 -left-6 animate-pulse-soft" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 reveal-on-scroll relative">
            <span className="absolute -left-10 top-0 text-[#678bd4]/30 opacity-30 text-8xl font-bold">"</span>
            <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">We Make </span>
            <span className="bg-gradient-to-r from-[#678bd4]/60 via-[#678bd4] to-[#678bd4]/80 bg-clip-text text-transparent relative inline-block">
              <span className="doodle-circle text-indigo-300">Founders,</span>
            </span>
            <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent"> Impossible to Scroll Past on Instagram</span>
            <span className="bg-gradient-to-r from-[#678bd4] to-[#678bd4]/70 bg-clip-text text-transparent relative inline-block">
              
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-1 animate-float">
                <Instagram className="h-5 w-5 text-[#678bd4]" />
              </div>
            </span>
            <span className="absolute -right-10 bottom-0 text-[#678bd4]/30 opacity-30 text-8xl font-bold">"</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 reveal-on-scroll max-w-3xl mx-auto space-y-2">
            <p>We're addicted to turning founder stories into reels that build 10X visibility, trust, and authority in 90 days, using our Edutelling™ framework. No fluff, just results.</p>
          </div>
          
          <div className="flex flex-col items-center gap-6 reveal-on-scroll">
            <Button size="lg" className="bg-gradient-to-r from-[#678bd4] to-[#678bd4]/80 hover:opacity-90 transition-opacity rounded-full px-8 text-white">
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            {/* Video Block */}
            <div className="w-full max-w-2xl bg-black/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm border border-[#678bd4]/20">
              <div className="aspect-video bg-gradient-to-br from-[#678bd4]/20 to-[#678bd4]/40 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 hover:bg-white transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-[#678bd4] ml-1" />
                  </div>
                  <p className="text-white font-semibold">Watch Our Success Stories</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center gap-3 reveal-on-scroll">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#678bd4] to-[#678bd4]/${60 + i * 10}`}></div>)}
            </div>
            <p className="text-sm text-muted-foreground">Join 300+ founders</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#process" className="text-muted-foreground hover:text-[#678bd4] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
      
      {/* Wavy bottom design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="rgba(103, 139, 212, 0.2)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;