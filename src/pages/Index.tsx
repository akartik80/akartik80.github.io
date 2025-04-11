
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Process from "@/components/Process";
import Strategy from "@/components/Strategy";
import VideoShowcase from "@/components/VideoShowcase";
import VideoTestimonials from "@/components/VideoTestimonials";
import TextTestimonials from "@/components/TextTestimonials";
import StatsShowcase from "@/components/StatsShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Process />
      <Strategy />
      <StatsShowcase />
      <VideoTestimonials />
      <TextTestimonials />
      <VideoShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
