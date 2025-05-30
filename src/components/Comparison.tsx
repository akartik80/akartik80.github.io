import React from 'react';
const comparisonData = [{
  without: "You're posting inconsistently — or not at all",
  with: "Reels go out every week — powered by a proven system, people & workflow"
}, {
  without: "You're guessing what your audience wants",
  with: "Every reel is research-backed and audience-aligned"
}, {
  without: "No time to focus on other areas of your business",
  with: "You record just 2 hours/month — we handle everything else"
}, {
  without: "No clear strategy or direction",
  with: "You get a clear gameplan, brand voice, and strategic positioning"
}];
const Comparison = () => {
  return <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 reveal-on-scroll">
          
          <span className="mx-4 text-gray-400">|</span>
          <span className="gradient-text">With Autthia</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Without Autthia Box */}
          <div className="rounded-3xl p-8 lg:p-12 reveal-on-scroll" style={{
          backgroundColor: '#88acf1'
        }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
              Without Autthia
            </h3>
            
            <div className="space-y-4">
              {comparisonData.map((item, index) => <div key={index} className="comparison-pill without-pill reveal-on-scroll" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <p className="text-gray-700 text-base lg:text-lg font-medium leading-relaxed">
                    {item.without}
                  </p>
                </div>)}
            </div>
          </div>

          {/* With Autthia Box */}
          <div className="rounded-3xl p-8 lg:p-12 reveal-on-scroll" style={{
          backgroundColor: '#c1caf3'
        }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-autthia-dark-purple mb-8 text-center glow-text">
              With Autthia
            </h3>
            
            <div className="space-y-4">
              {comparisonData.map((item, index) => <div key={index} className="comparison-pill with-pill reveal-on-scroll" style={{
              animationDelay: `${index * 0.1 + 0.2}s`
            }}>
                  <p className="text-autthia-dark-purple text-base lg:text-lg font-medium leading-relaxed">
                    {item.with}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Comparison;