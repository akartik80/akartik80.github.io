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
        <a href="#" className="text-2xl font-bold gradient-text">Autthia</a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent">Process</a>
          <a href="#strategy" className="hover:text-autthia-purple transition-colors text-white drop-shadow-sm">Strategy</a>
          <a href="#work" className="hover:text-autthia-purple transition-colors text-white drop-shadow-sm">Work</a>
          <a href="#contact" className="hover:text-autthia-purple transition-colors text-white drop-shadow-sm">Contact</a>
        </div>
        
        <Button className="bg-white text-autthia-dark-purple hover:bg-white/90 transition-opacity">
          <Instagram className="mr-2 h-4 w-4" />
          Follow Us
        </Button>
      </div>
    </nav>;
};
export default Navbar;