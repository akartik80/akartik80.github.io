
import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gradient-to-r from-autthia-purple/10 to-autthia-dark-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text">Autthia</h2>
            <p className="text-muted-foreground mt-2">Personal branding for authentic founders</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-autthia-purple transition-colors" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:text-autthia-purple transition-colors" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="hover:text-autthia-purple transition-colors" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-autthia-purple transition-colors" aria-label="YouTube">
              <Youtube />
            </a>
          </div>
        </div>
        
        <div className="border-t border-autthia-purple/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Autthia. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-autthia-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-autthia-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
