import React from 'react';

const CaseStudies = () => {
  const filterOptions = [
    { label: 'By Industry' },
    { label: 'By Business Size' },
    { label: 'By Location' },
    { label: 'By Technology' },
  ];

  const caseStudyRows = [
    [
      {
        client: 'BOMBARDIER',
        imageSrc: 'https://computools.com/wp-content/uploads/2024/10/Group-138-2.jpg',
        tags: '#AEROSPACE AND DEFENSE #ENTERPRISE #CANADA #.NET',
        description: 'As part of its Digital Transformation and Information Technology Automation initiatives, Bombardier, along with other smaller manufacturers, operating in the aviation industry, benefited from an enhanced document version control system, built around distributed architecture concepts in line with stringent security requirements. The system provides detailed aircraft maintenance instructions to aircraft technicians in seconds, eliminating the need to contact technical support or search for a specific version of a document. The solution reduced the interaction time between pilots and technical staff and saved back-and-forth communication requesting correct versions of operational manuals.',
      },
      {
        client: 'BRITISH COUNCIL',
        imageSrc: 'https://computools.com/wp-content/uploads/2024/10/Epson-Case-Study-1.jpg',
        tags: '#EDTECH #ENTERPRISE #UNITED KINGDOM #WORDPRESS',
        description: 'Our client, the British Council, needed to update its web portal to effectively promote English language tests. We solved the problem by offering a digital transformation of the portal, including user experience strategy and design, content optimization, and analytics implementation. The project involved user research, user experience and service design, portal development, website hosting setup, analytics integration, and full project lifecycle management.',
      },
    ],
    [
      {
        client: 'CARIBBEAN BANK',
        imageSrc: 'https://computools.com/wp-content/uploads/2024/10/Group-595-3.jpg',
        tags: '#BANKS #ENTERPRISE #USA #JAVA',
        description: 'Due to platform and product engineering, a Caribbean bank expanded into the younger demographic group and increased its market share by 12% in the 18-to-30-year-old segment. It managed transaction validation while abroad, parental control and approvals, limits, and temporary blocks. For our client, we provided competency development services, like microservice-based integration with Visa card processing facilities and a revamped user experience for web and mobile banking.',
      },
      {
        client: 'EPSON',
        imageSrc: 'https://computools.com/wp-content/uploads/2024/10/Mask-Group-33-1.jpg',
        tags: '#ELECTRONIC EQUIPMENT #ENTERPRISE #JAPAN #CLOUD #JAVA',
        description: 'Epson partnered with Computools to develop ReadyInk, an innovative solution that leverages modernisation and IT automation to transform customer experience and generate a steady revenue stream. ReadyInk automatically monitors ink levels in printers and notifies the customer when it is time to place an order. The system provides an end-to-end interface for ordering cartridges, organising delivery and processing payments.',
      },
    ],
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-10 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-wider">
              SELECTED CASES
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-4xl font-bold leading-snug tracking-normal">
              EXPLORE AND LEARN MORE ABOUT SOME OF COMPUTOOLS’ RECENTLY DELIVERED PROJECTS
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-8">
          Use filter below to simplify searching for most relevant case study to your business:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 mb-20">
          {filterOptions.map((filter, index) => (
            <div key={index} className="relative w-full">
              <select className="w-full bg-transparent border-b border-gray-600 py-2 text-white appearance-none focus:outline-none focus:border-white cursor-pointer">
                <option value="" className="bg-black">{filter.label}</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0L10 10.405l2.908-2.857c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615L10 13.232l-4.484-4.069c-.408-.418-.436-1.17 0-1.615z"></path></svg>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-24">
          {caseStudyRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {row.map((study, studyIndex) => (
                  <img key={studyIndex} src={study.imageSrc} alt={`${study.client} case study`} className="w-full h-auto" />
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
                {row.map((study, studyIndex) => (
                  <div key={studyIndex}>
                    <h3 className="text-2xl font-semibold mb-4">{study.client}</h3>
                    <p className="text-sm font-semibold tracking-wider text-gray-400 mb-4">{study.tags}</p>
                    <p className="text-base text-gray-300 leading-relaxed">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button className="bg-gray-200 text-black px-8 py-4 font-semibold tracking-wider">
            EXPLORE MORE CASES →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;