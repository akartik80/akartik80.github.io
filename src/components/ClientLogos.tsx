
import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "Alwahda",
      niche: "Arabic Brand",
      logo: "/lovable-uploads/9e8bdeea-f3bd-467f-a989-6d0f12fb2c06.png"
    },
    {
      name: "Diamond Corp",
      niche: "Luxury Business",
      logo: "/lovable-uploads/6932078a-fc68-4a69-9f3a-17f0ba6701b5.png"
    },
    {
      name: "MyMsy",
      niche: "Creative Agency",
      logo: "/lovable-uploads/bfeb969e-c367-4c73-9615-ac6da31d9269.png"
    },
    {
      name: "Starlight",
      niche: "Hospitality",
      logo: "/lovable-uploads/1fa45c13-26fc-4bef-8854-c1633c455546.png"
    },
    {
      name: "Nooma",
      niche: "Haircare",
      logo: "/lovable-uploads/226a2e93-a46e-47ab-a042-82f1d0e5ff14.png"
    },
    {
      name: "YouniFy",
      niche: "Tech Solutions",
      logo: "/lovable-uploads/6bbb8b0a-a7f4-4e0a-a163-467303d8b35a.png"
    },
    {
      name: "Ibota",
      niche: "Digital Platform",
      logo: "/lovable-uploads/7a18b7bb-9de7-4f8a-b7f9-8937aba84499.png"
    },
    {
      name: "Aura",
      niche: "Design Studio",
      logo: "/lovable-uploads/f2745766-d744-4b42-88e6-6bfbd634f576.png"
    }
  ];

  return (
    <div className="py-16" style={{
      background: `linear-gradient(to right, #678bd420, #678bd420)`
    }}>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12 text-gray-800 font-normal md:text-3xl">
          Trusted by the Founders Behind These Iconic Brands
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex items-start gap-24 animate-marquee">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex flex-col items-center min-w-max">
                <div className="bg-white rounded-full shadow-lg flex items-center justify-center mb-4 hover:shadow-xl transition-shadow duration-300" style={{
                  width: '4cm',
                  height: '4cm'
                }}>
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-[70%] max-h-[70%] object-contain"
                  />
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
                <div className="bg-white rounded-full shadow-lg flex items-center justify-center mb-4 hover:shadow-xl transition-shadow duration-300" style={{
                  width: '4cm',
                  height: '4cm'
                }}>
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-[70%] max-h-[70%] object-contain"
                  />
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
