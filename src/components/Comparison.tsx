import React from 'react';
import { Button } from './ui/button';
const comparisonData = [{
  without: "😩 Posting inconsistently — or not at all",
  with: "📅 Reels go out every week — powered by a proven system"
}, {
  without: "🎯 Guessing what your audience wants",
  with: "📊 Every reel is research-backed & aligned to audience pain points"
}, {
  without: "⏳ No time for anything else",
  with: "🕒 You record just 2 hours/month — we do the rest"
}, {
  without: "🧭 No clear strategy or direction",
  with: "🧠 You get a clear brand voice, gameplan, and strategic positioning"
}];
const Comparison = () => {
  return <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50/50 to-purple-50"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 reveal-on-scroll">
          <span className="text-4xl md:text-5xl font-bold text-center mb-20 reveal-on-scroll">The Autthia Effect</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start relative">
          {/* Center divider line with arrow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2 hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-xl">→</span>
              </div>
            </div>
          </div>

          {/* Without Autthia Column */}
          <div className="space-y-6 reveal-on-scroll">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">
              ❌ Without Autthia
            </h3>
            
            <div className="space-y-4">
              {comparisonData.map((item, index) => <div key={index} className="comparison-bullet-left reveal-on-scroll" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <p className="text-gray-700 text-lg font-medium leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
                    {item.without}
                  </p>
                </div>)}
            </div>
          </div>

          {/* With Autthia Column */}
          <div className="space-y-6 reveal-on-scroll">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-autthia-dark-purple">
              ✅ With Autthia
            </h3>
            
            <div className="space-y-4">
              {comparisonData.map((item, index) => <div key={index} className="comparison-bullet-right reveal-on-scroll" style={{
              animationDelay: `${index * 0.2 + 0.1}s`
            }}>
                  <p className="text-autthia-dark-purple text-lg font-medium leading-relaxed bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-autthia-purple/20">
                    {item.with}
                  </p>
                </div>)}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-8 reveal-on-scroll" style={{
            animationDelay: '1s'
          }}>
              <Button size="lg" className="bg-autthia-purple hover:bg-autthia-dark-purple text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Comparison;