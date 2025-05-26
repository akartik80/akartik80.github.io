
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "Alwahda",
      industry: "Real Estate",
      logo: "/lovable-uploads/9e8bdeea-f3bd-467f-a989-6d0f12fb2c06.png"
    },
    {
      name: "Mumsy",
      industry: "Apparel & Fashion",
      logo: "/lovable-uploads/6932078a-fc68-4a69-9f3a-17f0ba6701b5.png"
    },
    {
      name: "Starlight",
      industry: "Hospitality",
      logo: "/lovable-uploads/bfeb969e-c367-4c73-9615-ac6da31d9269.png"
    },
    {
      name: "Nooma",
      industry: "Haircare",
      logo: "/lovable-uploads/1fa45c13-26fc-4bef-8854-c1633c455546.png"
    },
    {
      name: "Youphoria",
      industry: "Cosmetics",
      logo: "/lovable-uploads/226a2e93-a46e-47ab-a042-82f1d0e5ff14.png"
    },
    {
      name: "iBota",
      industry: "Tech",
      logo: "/lovable-uploads/6bbb8b0a-a7f4-4e0a-a163-467303d8b35a.png"
    },
    {
      name: "Aarambha",
      industry: "Fintech",
      logo: "/lovable-uploads/7a18b7bb-9de7-4f8a-b7f9-8937aba84499.png"
    }
  ];

  return (
    <div className="py-8" style={{ background: '#678bd4' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 text-white font-normal md:text-xl">
          Trusted by the Founders Behind These Iconic Brands
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex items-start gap-24 animate-marquee">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex flex-col items-center min-w-max">
                <div 
                  className="bg-white shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-all duration-300"
                  style={{
                    width: '3cm',
                    height: '3cm'
                  }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="w-full h-full object-contain"
                    style={{
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1 text-sm">{client.name}</p>
                  <p className="text-white/80 text-xs">{client.industry}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless animation */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="flex flex-col items-center min-w-max">
                <div 
                  className="bg-white shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-all duration-300"
                  style={{
                    width: '3cm',
                    height: '3cm'
                  }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="w-full h-full object-contain"
                    style={{
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1 text-sm">{client.name}</p>
                  <p className="text-white/80 text-xs">{client.industry}</p>
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
