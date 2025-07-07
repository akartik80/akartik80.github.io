import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-sm py-3' : 'py-5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img alt="Autthia" style={{
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(214deg) brightness(97%) contrast(97%)',
          mixBlendMode: 'multiply'
        }} src="/lovable-uploads/727ddbfc-8e71-4057-88fe-0bc397f966cb.png" className="h-28 w-auto object-contain" />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">Process</a>
          <a href="#strategy" className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">Strategy</a>
          <a href="#work" className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">Work</a>
          <a href="#contact" className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">Contact</a>
        </div>
        
        
      </div>
    </nav>;
};
export default Navbar;