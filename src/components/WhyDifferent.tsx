
import React from 'react';
import { Eye, Users, Instagram, Zap } from 'lucide-react';

// Data for the four circle cards
const differentiators = [{
  id: 1,
  icon: <Eye className="h-8 w-8" />,
  title: "Know Audience Psychology (Deeply)",
  description: "We decode how attention works online—and create content that keeps it.",
  bgColor: "bg-[#678bd4]",
  position: "top-8 left-4"
}, {
  id: 2,
  icon: <Users className="h-8 w-8" />,
  title: "Work With Founders (Only)",
  description: "Our clients are all founders, so we get your pace, your pressure, and your purpose.",
  bgColor: "bg-[#678bd4]/80",
  position: "top-20 left-1/4"
}, {
  id: 3,
  icon: <Instagram className="h-8 w-8" />,
  title: "Focus Only on Instagram (And Dominate It)",
  description: "Instagram isn't one of many things we do—it's the only thing we do.",
  bgColor: "bg-[#678bd4]/60",
  position: "top-4 left-2/4"
}, {
  id: 4,
  icon: <Zap className="h-8 w-8" />,
  title: "We Use 'Edutelling'™ (Strategically)",
  description: "We mix storytelling and education so you come across as human and credible—never preachy.",
  bgColor: "bg-[#678bd4]",
  position: "top-16 right-4"
}];

const WhyDifferent = () => {
  return <section id="why-different" className="py-24 bg-gradient-to-b from-white via-autthia-blue/5 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-autthia-light-purple rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-autthia-purple rounded-full blur-3xl opacity-10"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 reveal-on-scroll">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent font-semibold text-5xl">The Autthia Effect</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <p className="text-muted-foreground text-xl">Most agencies tell you to &quot;post more,&quot; &quot;teach more,&quot; or &quot;sell more.&quot; But we disagree with that approach, instead we:</p>
        </div>
        
        {/* Desktop: Horizontal Layout with Vertical Variance */}
        <div className="hidden md:block relative min-h-[400px] reveal-on-scroll">
          <div className="flex justify-between items-start max-w-6xl mx-auto relative">
            {differentiators.map((item, index) => {
            // Define vertical offsets for each card to create floating effect
            const verticalOffsets = ['translate-y-4', '-translate-y-2', 'translate-y-6', '-translate-y-4'];
            return <div key={item.id} className={`circle-cloud-card ${item.bgColor} group animate-float-slow ${verticalOffsets[index]} hover:bg-indigo-300 transition-colors duration-300`} style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${6 + index}s`
            }}>
                  <div className="flex flex-col items-center text-center p-8 h-full justify-center">
                    <div className="text-white group-hover:text-gray-800 transition-colors duration-300 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-gray-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>
        
        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-8 reveal-on-scroll">
          {differentiators.map((item, index) => <div key={item.id} className={`circle-cloud-card ${item.bgColor} group animate-float-slow mx-auto hover:bg-indigo-300 transition-colors duration-300`} style={{
          animationDelay: `${index * 0.3}s`,
          animationDuration: `${6 + index}s`
        }}>
              <div className="flex flex-col items-center text-center p-8 h-full justify-center">
                <div className="text-white group-hover:text-gray-800 transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-gray-800 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyDifferent;
