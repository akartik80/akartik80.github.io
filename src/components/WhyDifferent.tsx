import React from 'react';
import { Eye, Users, Instagram, MessageSquare } from 'lucide-react';

// Data for the four columns
const differentiators = [{
  id: 1,
  icon: <Eye className="h-10 w-10" />,
  title: "We Understand Psychology",
  description: "We decode how attention works online—and create content that keeps it."
}, {
  id: 2,
  icon: <Users className="h-10 w-10" />,
  title: "We Work Only With Founders",
  description: "Our clients are all founders, so we get your pace, your pressure, and your purpose."
}, {
  id: 3,
  icon: <Instagram className="h-10 w-10" />,
  title: "We Live & Breathe Instagram",
  description: "Instagram isn't one of many things we do—it's the only thing we do."
}, {
  id: 4,
  icon: <MessageSquare className="h-10 w-10" />,
  title: "We Created Eductelling",
  description: "We mix storytelling and education so you come across as human and credible—never preachy."
}];
const WhyDifferent = () => {
  return <section id="why-different" className="py-24 bg-gradient-to-b from-white via-autthia-blue/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-autthia-light-purple rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-10"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="gradient-text">Why We're Not Your Typical Agency</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <p className="text-lg text-muted-foreground mb-4">
            Most agencies tell you to "post more," "teach more," or "sell more."
            We believe true influence comes from stories that educate without preaching—a method we've refined into our signature formula: <span className="font-semibold text-autthia-dark-purple">Eductelling</span>.
          </p>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-on-scroll">
          {differentiators.map(item => <div key={item.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="text-autthia-purple group-hover:text-autthia-dark-purple transition-colors duration-300 animate-float-slow">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-autthia-dark-purple transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-center text-muted-foreground">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyDifferent;