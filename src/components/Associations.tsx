import React, { useState } from 'react';

const Associations = () => {
  const [openAssociation, setOpenAssociation] = useState<string | null>('ADP');

  const leftColumnData = [
    {
      id: 'ADP',
      abbreviation: 'ADP',
      fullName: 'ARTIFICIAL INTELLIGENCE BUSINESS DIRECTORY BY AMERICAN DATA PROCESSING, INC.',
      logoSrc: 'https://computools.com/wp-content/uploads/2024/10/memberbadge.png',
      description: 'American Data Processing, Inc. builds the Artificial Intelligence Business Directory to connect businesses seeking AI services & solutions to AI companies that have wide experience and qualifications in those specific industries. The platform helps decision-makers to identify companies that can quickly apply the AI solution they need. Businesses in all fields can be assured they are working with an AI company that is competent in their specific industry and able to proactively take their operations to the next level.',
    },
    {
      id: 'IFIP',
      abbreviation: 'IFIP',
      fullName: 'INTERNATIONAL FEDERATION FOR INFORMATION PROCESSING (IFIP)',
      logoSrc: 'https://computools.com/wp-content/uploads/2024/10/logoIFIP.png',
      description: 'IFIP is a non-governmental, non-profit umbrella organization for national societies working in the field of information processing since 1960. It is the leading multinational, apolitical organization in Information & Communications Technologies and Sciences, recognized by the United Nations and other world organizations. It represents IT Societies from 56 countries/regions, covering five continents with a total membership of over half a million. The association helps its members find a meeting place for sharing experience, discussing challenges and opportunities.',
    },
    { id: 'WITSA', abbreviation: 'WITSA', fullName: 'WORLD INFORMATION TECHNOLOGY AND SERVICES ALLIANCE (WITSA)' },
    { id: 'MICROSOFT', abbreviation: 'MICROSOFT', fullName: 'MICROSOFT PARTNER' },
    { id: 'EEN', abbreviation: 'EEN', fullName: 'ENTERPRISE EUROPE NETWORK' },
  ];

  const rightColumnData = [
    { id: 'TECHUK', abbreviation: 'TECHUK', fullName: 'THE UK’S TECHNOLOGY TRADE ASSOCIATION' },
    { id: 'JASIPA', abbreviation: 'JASIPA', fullName: 'JAPAN SYSTEM INTEGRATION PARTNERS ASSOCIATION (JASIPA)' },
    { id: 'SODA', abbreviation: 'SODA', fullName: 'SOFTWARE ENGINEERING ASSOCIATION POLAND' },
    { id: 'ITUA', abbreviation: 'IT UA', fullName: 'IT UKRAINE ASSOCIATION' },
    { id: 'DIICITY', abbreviation: 'DIIA CITY', fullName: 'DIIA CITY – UNIQUE LEGAL AND TAX SPACE FOR IT BUSINESS' },
  ];

  const toggleAssociation = (id: string) => {
    if (openAssociation === id) {
      setOpenAssociation(null);
    } else {
      setOpenAssociation(id);
    }
  };

  const AccordionItem = ({ item }: { item: any }) => {
    const isOpen = openAssociation === item.id;
    const hasDetails = item.logoSrc && item.description;

    return (
      <div className="border-b border-gray-300">
        <button
          onClick={() => hasDetails && toggleAssociation(item.id)}
          className={`w-full flex items-center justify-between py-5 text-left ${hasDetails ? 'cursor-pointer' : 'cursor-default'}`}
          disabled={!hasDetails}
        >
          <div className="flex items-baseline gap-x-4 pr-4">
            <h3 className="text-base font-semibold tracking-wider">{item.abbreviation}</h3>
            <span className="text-xs text-gray-600">{item.fullName}</span>
          </div>
          <span className="text-3xl font-light">
            {isOpen ? '−' : '+'}
          </span>
        </button>

        {isOpen && hasDetails && (
          <div className="px-6 pb-6 flex items-start gap-x-6">
            <img src={item.logoSrc} alt={`${item.abbreviation} logo`} className="w-24 h-24 object-contain shrink-0" />
            <p className="text-sm text-gray-700 leading-relaxed pt-2">{item.description}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-wider leading-snug">
              ASSOCIATIONS &<br/>
              CORPORATE SOCIAL<br/>
              RESPONSIBILITY
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-4xl font-bold leading-snug">
              COMPUTOOLS IS A SOCIALLY RESPONSIBLE COMPANY THAT TAKES PART IN VARIOUS KNOWLEDGE SHARING INITIATIVES TOGETHER WITH PARTNERS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-r border-gray-300">
            {leftColumnData.map((item) => <AccordionItem key={item.id} item={item} />)}
          </div>
          <div>
            {rightColumnData.map((item) => <AccordionItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Associations;