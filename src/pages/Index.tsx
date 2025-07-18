
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import WhyDifferent from "@/components/WhyDifferent";
import Strategy from "@/components/Strategy";
import Comparison from "@/components/Comparison";
import StatsShowcase from "@/components/StatsShowcase";
import ProofShowcase from "@/components/ProofShowcase";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQ from "@/components/FAQ";
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
      {/* Hero Section */}
      <Hero />
      {/* Trusted By Section */}
      <ClientLogos />
      {/* We're Not Your Typical Agency */}
      <WhyDifferent />
      {/* How It Works */}
      <Strategy />
      {/* The Autthia Effect */}
      <StatsShowcase />
      {/* Scroll-Stopping Founder Reels */}
      <ProofShowcase />
      {/* With Autthia / Without Autthia */}
      <Comparison />
      {/* What Founders Are Saying */}
      <VideoTestimonials />
      {/* FAQs section */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
