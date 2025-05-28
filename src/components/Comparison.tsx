
import React from 'react';

const comparisonData = [
  {
    without: "You're posting inconsistently — or not at all",
    with: "Reels go out every week — powered by a proven system, people & workflow"
  },
  {
    without: "You're guessing what your audience wants",
    with: "Every reel is research-backed and audience-aligned"
  },
  {
    without: "No time to focus on other areas of your business",
    with: "You record just 2 hours/month — we handle everything else"
  },
  {
    without: "No clear strategy or direction",
    with: "You get a clear gameplan, brand voice, and strategic positioning"
  }
];

const Comparison = () => {
  return (
    <section id="comparison" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Without Autthia Side */}
        <div className="flex-1 py-16 px-8 lg:px-16" style={{ backgroundColor: '#88acf1' }}>
          <div className="max-w-2xl mx-auto lg:ml-auto lg:mr-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center lg:text-left reveal-on-scroll">
              Without Autthia
            </h2>
            
            <div className="space-y-8">
              {comparisonData.map((item, index) => (
                <div 
                  key={index} 
                  className="reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-white text-lg lg:text-xl leading-relaxed font-medium">
                    {item.without}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* With Autthia Side */}
        <div className="flex-1 py-16 px-8 lg:px-16" style={{ backgroundColor: '#c1caf3' }}>
          <div className="max-w-2xl mx-auto lg:mr-auto lg:ml-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-autthia-dark-purple mb-12 text-center lg:text-left reveal-on-scroll glow-text">
              With Autthia
            </h2>
            
            <div className="space-y-8">
              {comparisonData.map((item, index) => (
                <div 
                  key={index} 
                  className="reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <p className="text-autthia-dark-purple text-lg lg:text-xl leading-relaxed font-medium">
                    {item.with}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
