import React from 'react';

const Footer = () => {
  const footerData = {
    info: {
      address: 'Copyright © 2013-2025\nComputools | 341 Raven Cir, Camden\nWyoming, Delaware 19934, US',
      links: [
        'Privacy Policy',
        'Cookie Policy',
        'Terms of Use',
        'Information on Potential Fraud Cases',
        'ESG Report for 2024',
      ],
      certLogos: [
        'https://computools.com/wp-content/uploads/2022/11/iso_color.svg',
        'https://computools.com/wp-content/uploads/2022/11/iso-27001_highlited.svg',
        'https://computools.com/wp-content/uploads/2024/10/gdpr-dpr-logo-white-color.svg',
        'https://computools.com/wp-content/uploads/2024/10/hipaa-color.svg',
      ],
    },
    columns: [
      {
        title: 'CONSULTING',
        items: [
          { text: 'Data Driven Decisions:', isSubheading: true },
          { text: 'Data and Analytics' },
          { text: 'Artificial Intelligence' },
          { text: 'Cybersecurity' },
          { text: 'Internet of Things' },
          { text: 'Computer Vision' },
          { text: 'Blockchain' },
          { text: 'Revenue Growth:', isSubheading: true },
          { text: 'eCommerce' },
          { text: 'CX Strategy & Design' },
          { text: 'Cost Optimization:', isSubheading: true },
          { text: 'Software Modernization' },
          { text: 'Business Process Automation' },
          { text: 'Digital Transformation' },
          { text: 'Cloud Transformation' },
          { text: 'Products and Services:', isSubheading: true },
          { text: 'Digital Workplace' },
          { text: 'Startup Software Engineering' },
          { text: 'Research and Development' },
          { text: 'CTO Advisory' },
        ],
      },
      {
        title: 'ENGINEERING',
        items: [
          { text: 'Solution Architecture:', isSubheading: true },
          { text: 'Project Management' },
          { text: 'Business Analysis' },
          { text: 'User Experience Design' },
          { text: 'User Interface Design' },
          { text: 'Software Architecture' },
          { text: 'Development:', isSubheading: true },
          { text: 'Web Development' },
          { text: 'Cross-Platform Development' },
          { text: 'Mobile App Development' },
          { text: 'DevOps' },
          { text: 'Quality Assurance' },
        ],
      },
      {
        title: 'INDUSTRIES',
        items: [
          { text: 'Retail:', isSubheading: true },
          { text: 'Grocery Retail' },
          { text: 'E-commerce' },
          { text: 'Fashion & Apparel' },
          { text: 'Logistics:', isSubheading: true },
          { text: 'Ground Transportation' },
          { text: 'Marine Transportation' },
          { text: 'Warehouses' },
          { text: 'Air Cargo & Logistics' },
          { text: 'Finance:', isSubheading: true },
          { text: 'Retail Banks' },
          { text: 'Insurance' },
          { text: 'Trading & Investing' },
          { text: 'Healthcare:', isSubheading: true },
          { text: 'Hospitals' },
          { text: 'Pharmacy' },
          { text: 'Pharmaceutical' },
          { text: 'Healthcare Hardware' },
          { text: 'Hi-Tech:', isSubheading: true },
          { text: 'Fintech' },
          { text: 'Healthtech' },
          { text: 'Edtech' },
          { text: 'More:', isSubheading: true },
          { text: 'HoReCa' },
          { text: 'Livestock Farming' },
          { text: 'Oil and Gas' },
          { text: 'Electric Power' },
        ],
      },
    ],
    rightColumn: [
        { title: 'CLIENTS', links: ['Case Studies', 'Biggest Clients', 'Testimonials'] },
        { title: 'COMPANY', links: ['About Computools', 'Brand History', 'Locations', 'Why Computools', 'Leadership', 'Awards & Recognitions', 'Corporate Social Responsibility', 'Careers', 'Employee Training and Development'] },
        { title: 'INSIGHTS', links: ['Blog', 'Press Releases', 'Events', 'Scaler'] },
    ]
  };

  const ListColumn = ({ title, items }: { title: string; items: { text: string; isSubheading?: boolean }[] }) => (
    <div>
      <h3 className="font-semibold border-b border-gray-300 pb-2 mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className={item.isSubheading ? 'text-gray-500 mt-3' : 'text-black'}>
            {item.isSubheading ? item.text : <a href="#" className="hover:underline">{item.text}</a>}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-100 text-black py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="col-span-1 text-sm">
            <h2 className="text-2xl font-bold mb-4 relative">
              COMPUTOOLS<sup className="text-xs absolute -top-1 -right-4">®</sup>
            </h2>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">{footerData.info.address}</p>
            <ul className="space-y-1 mt-4">
              {footerData.info.links.map(link => (
                <li key={link}><a href="#" className="underline hover:text-gray-700">{link}</a></li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 mt-4">
              {footerData.info.certLogos.map((src, index) => (
                <img key={index} src={src} alt="Certification" className="h-8" />
              ))}
            </div>
          </div>

          {footerData.columns.map(col => <ListColumn key={col.title} title={col.title} items={col.items} />)}

          <div>
            {footerData.rightColumn.map(section => (
                <div key={section.title} className="mb-6">
                    <h3 className="font-semibold border-b border-gray-300 pb-2 mb-4">{section.title}</h3>
                    <ul className="space-y-2 text-sm">
                        {section.links.map(link => (
                            <li key={link}><a href="#" className="hover:underline">{link}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
             <a href="#" className="font-bold text-lg tracking-wider hover:underline">GET IN TOUCH →</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;