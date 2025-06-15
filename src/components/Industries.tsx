import React, { useState } from 'react';

const Industries = () => {
  const [openIndustry, setOpenIndustry] = useState<string | null>('RETAIL');

  const industriesData = [
    {
      name: 'RETAIL',
      subIndustries: ['GROCERY RETAIL', 'E-COMMERCE', 'FASHION & APPAREL', 'CONSUMER ELECTRONICS'],
    },
    {
      name: 'LOGISTICS',
      subIndustries: ['GROUND TRANSPORTATION', 'MARINE TRANSPORTATION', 'AIR CARGO', 'WAREHOUSE MANAGEMENT'],
    },
    {
      name: 'FINANCE',
      subIndustries: ['BANKING', 'INSURANCE', 'INVESTMENT MANAGEMENT', 'FINTECH SOLUTIONS'],
    },
    {
      name: 'HEALTHCARE',
      subIndustries: ['TELEMEDICINE', 'MEDICAL DEVICES', 'HEALTH RECORDS', 'PHARMACEUTICAL'],
    },
    {
      name: 'HI-TECH',
      subIndustries: ['SOFTWARE DEVELOPMENT', 'IOT SOLUTIONS', 'AI & MACHINE LEARNING', 'CYBERSECURITY'],
    },
    {
      name: 'MORE',
      subIndustries: ['EDUCATION', 'REAL ESTATE', 'ENERGY', 'MANUFACTURING'],
    },
  ];

  const toggleIndustry = (industryName: string) => {
    setOpenIndustry(openIndustry === industryName ? null : industryName);
  };

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold tracking-wider">
              INDUSTRIES
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-4xl font-bold leading-snug tracking-normal">
              WITH INDUSTRY-FOCUSED EXPERTISE, COMPUTOOLS ENHANCES YOUR INNOVATION AND BOOSTS YOUR MARKET POSITION
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300">
          {industriesData.map((industry) => (
            <div key={industry.name} className="border-b border-gray-300">
              <button
                onClick={() => toggleIndustry(industry.name)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <h3 className="text-base font-semibold tracking-wider">
                  {industry.name}
                </h3>
                <span className="text-3xl font-light">
                  {openIndustry === industry.name ? '−' : '+'}
                </span>
              </button>
              
              {openIndustry === industry.name && (
                <div className="pb-4">
                  <div className="flex items-center border-t border-gray-300 pt-1">
                    {industry.subIndustries.map((sub, index) => (
                      <div
                        key={sub}
                        className={`py-3 px-6 text-sm font-semibold tracking-wider whitespace-nowrap ${index === 1 ? 'border-x border-gray-300' : ''}`}
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;