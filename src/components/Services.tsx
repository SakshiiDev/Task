import React from 'react';

const Services = () => {
  const serviceItems = [
    {
      title: 'CONSULTING',
      description: 'Reimagine your business with IT Consulting',
    },
    {
      title: 'SOFTWARE ENGINEERING',
      description: 'Get Cutting-Edge Software — Tailored to Your Business, Engineered for the Future',
    }
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-12 mb-24">
          <div className="lg:col-span-1">
          <h2 className="text-3xl font-semibold tracking-wider">SERVICES</h2>

          </div>
          <div className="lg:col-span-2">
            <p className="text-4xl font-bold leading-snug tracking-wide">
              WE EMPOWER COMPANIES TO MEET THE NEEDS OF TOMORROW THROUGH STRATEGIC CONSULTING AND CUSTOM SOFTWARE ENGINEERING
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {serviceItems.map((service, index) => (
            <div key={index}>
              <div className="border-t border-gray-300 pt-8">
                <h3 className="text-2xl font-bold tracking-widest mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;