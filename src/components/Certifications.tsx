import React from 'react';

const Certifications = () => {
  const certificationLogos = [
    { src: 'https://computools.com/wp-content/uploads/2024/10/Group-1-3.svg', alt: 'ISO 9001:2015 Certified Company', colored: false },
    { src: 'https://computools.com/wp-content/uploads/2024/10/iso-27001_default-1-1.svg', alt: 'ISO 27001:2013 Certified Company' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/gdpr-dpr-logo-white-color-1.svg', alt: 'GDPR DPR Certified' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/hipaa-color-1.svg', alt: 'HIPAA Compliant Company' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/Group-27-1.svg', alt: 'Microsoft Partner' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/the-global-outsourcing-100_2022_color-1-1.svg', alt: 'IAOP The Global Outsourcing 100 2020' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/the-global-outsourcing-100_2022_color-1.svg', alt: 'IAOP The Global Outsourcing 100 2022' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/Clip-path-group2.svg', alt: 'IAOP Global Outsourcing 100 2023' },
    { src: 'https://computools.com/wp-content/uploads/2024/10/Clip-path-group3.svg', alt: 'IAOP Global Outsourcing 100 2024' },
    { src: 'https://computools.com/wp-content/uploads/2025/02/iaop2025-small-color.svg', alt: 'IAOP Global Outsourcing 100 2025' }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-12 lg:gap-x-16">
          {certificationLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt || 'Certification Logo'}
              className={`
                h-16 md:h-20
                transition-all duration-300 ease-in-out
                ${!logo.colored ? 'filter grayscale hover:grayscale-0' : ''}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;