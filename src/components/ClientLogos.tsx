
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "TechFlow",
      niche: "SaaS Productivity",
      icon: "🚀"
    },
    {
      name: "EcoStream", 
      niche: "Sustainable Tech",
      icon: "🌱"
    },
    {
      name: "FinanceForward",
      niche: "FinTech", 
      icon: "💰"
    },
    {
      name: "HealthSync",
      niche: "Digital Health",
      icon: "🏥"
    },
    {
      name: "CreativeStudio",
      niche: "Design Agency",
      icon: "🎨"
    },
    {
      name: "DataInsight",
      niche: "Analytics",
      icon: "📊"
    }
  ];

  return (
    <div className="py-16" style={{ background: `linear-gradient(to right, ${hex678bd4}20, ${hex678bd4}20)` }}>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12 text-gray-800 font-normal md:text-2xl">
          Trusted by the Founders Behind These Iconic Brands
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex items-start gap-24 animate-marquee">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex flex-col items-center min-w-max">
                <div className="bg-white rounded-full shadow-lg flex items-center justify-center mb-4 hover:shadow-xl transition-shadow duration-300" style={{ width: '4cm', height: '4cm' }}>
                  <span className="text-5xl">{client.icon}</span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 mb-1">{client.name}</p>
                  <p className="text-gray-600">{client.niche}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless animation */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="flex flex-col items-center min-w-max">
                <div className="bg-white rounded-full shadow-lg flex items-center justify-center mb-4 hover:shadow-xl transition-shadow duration-300" style={{ width: '4cm', height: '4cm' }}>
                  <span className="text-3xl">{client.icon}</span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 mb-1">{client.name}</p>
                  <p className="text-gray-600">{client.niche}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
