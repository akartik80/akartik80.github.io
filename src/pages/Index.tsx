
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import WhyDifferent from "@/components/WhyDifferent";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import StatsShowcase from "@/components/StatsShowcase";
import VideoShowcase from "@/components/VideoShowcase";
import ProofShowcase from "@/components/ProofShowcase";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQ from "@/components/FAQ";
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
      {/* Hero Section */}
      <Hero />
      {/* Trusted By Section */}
      <ClientLogos />
      {/* We're Not Your Typical Agency */}
      <WhyDifferent />
      {/* How It Works */}
      <Process />
      {/* The Autthia Effect */}
      <StatsShowcase />
      {/* Scroll-Stopping Founder Reels */}
      <VideoShowcase />
      {/* With Autthia / Without Autthia */}
      <Comparison />
      {/* Proof Over Promises */}
      <ProofShowcase />
      {/* What Founders Are Saying */}
      <VideoTestimonials />
      {/* FAQs section */}
      <FAQ />
      {/* Secondary sections below FAQ */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
