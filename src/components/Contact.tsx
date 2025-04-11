
import React from 'react';
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-autthia-pink/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-autthia-blue/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Shine?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Every founder deserves the spotlight. Let's create authentic content that grows your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-autthia-purple to-autthia-dark-purple hover:opacity-90 transition-opacity">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            
            <Button size="lg" variant="outline" className="border-autthia-purple text-autthia-purple hover:bg-autthia-purple/10">
              <Instagram className="mr-2 h-4 w-4" />
              Follow Us
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-autthia-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-autthia-purple/50"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border border-autthia-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-autthia-purple/50"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 border border-autthia-purple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-autthia-purple/50"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-autthia-purple to-autthia-dark-purple hover:opacity-90 transition-opacity">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
