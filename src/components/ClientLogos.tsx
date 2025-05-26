import React from 'react';
const ClientLogos = () => {
  const clients = [{
    name: "Alwahda",
    industry: "Real Estate",
    logo: "/lovable-uploads/9e8bdeea-f3bd-467f-a989-6d0f12fb2c06.png"
  }, {
    name: "Bonterga",
    industry: "FMCG",
    logo: "/lovable-uploads/f2745766-d744-4b42-88e6-6bfbd634f576.png"
  }, {
    name: "Mumsy",
    industry: "Apparel & Fashion",
    logo: "/lovable-uploads/1c9f4e6d-fb7d-46a5-b7a7-1f4ea6ffa14e.png"
  }, {
    name: "Starglight",
    industry: "Hospitality",
    logo: "/lovable-uploads/542081d7-fa80-4adb-bb4a-73bd9a6cda8b.png"
  }, {
    name: "Nooma",
    industry: "Haircare",
    logo: "/lovable-uploads/a2026627-2c55-48da-a052-edba2360d591.png"
  }, {
    name: "Youphoria",
    industry: "Cosmetics",
    logo: "/lovable-uploads/c91c06bb-ac00-4cc6-b253-4017450da9bc.png"
  }, {
    name: "Aarambha",
    industry: "Fintech",
    logo: "/lovable-uploads/dcedbb88-cc30-4617-97c7-25cd2dd42d22.png"
  }, {
    name: "iBota",
    industry: "Tech",
    logo: "/lovable-uploads/a0acba37-391c-461d-b129-633b7c2baf6e.png"
  }];
  return <div className="py-8 bg-gradient-to-br from-[#678bd4]/10 via-white to-[#678bd4]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 font-normal md:text-xl">
          <span className="bg-gradient-to-r from-[#678bd4] via-[#678bd4]/80 to-[#678bd4]/60 bg-clip-text text-transparent text-2xl font-medium">
            Trusted by the Founders Behind These Iconic Brands
          </span>
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex items-start gap-24 animate-marquee">
            {/* First set of logos */}
            {clients.map((client, index) => <div key={`first-${index}`} className="flex flex-col items-center min-w-max">
                <div className="bg-white shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-all duration-300" style={{
              width: '3cm',
              height: '3cm'
            }}>
                  <img src={client.logo} alt={client.name} className="w-full h-full object-contain" style={{
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%'
              }} />
                </div>
                <div className="text-center">
                  <p className="font-bold mb-1 text-sm bg-gradient-to-r from-[#678bd4] to-[#678bd4]/70 bg-clip-text text-transparent">{client.name}</p>
                  <p className="text-gray-600 text-xs">{client.industry}</p>
                </div>
              </div>)}
            
            {/* Duplicate set for seamless animation */}
            {clients.map((client, index) => <div key={`second-${index}`} className="flex flex-col items-center min-w-max">
                <div className="bg-white shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-all duration-300" style={{
              width: '3cm',
              height: '3cm'
            }}>
                  <img src={client.logo} alt={client.name} className="w-full h-full object-contain" style={{
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%'
              }} />
                </div>
                <div className="text-center">
                  <p className="font-bold mb-1 text-sm bg-gradient-to-r from-[#678bd4] to-[#678bd4]/70 bg-clip-text text-transparent">{client.name}</p>
                  <p className="text-gray-600 text-xs">{client.industry}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ClientLogos;