import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awardsData = [
    {
      logoSrc: 'https://computools.com/wp-content/uploads/2025/02/iaop2025-color.svg',
      subtitle: 'IAOP',
      title: 'COMPUTOOLS IS PROUD TO ANNOUNCE THAT WE HAVE BEEN AWARDED THE 2024 GLOBAL OUTSOURCING 100 ACCORDING TO THE IAOP!',
      description: 'This prestigious recognition is a testament to our continued commitment to excellence in providing high-quality outsourcing services. We are proud to be among the top 100 outsourcing companies in the world and would like to thank our clients, partners and employees for their continued support.',
      footer: 'FEATURED - 2024'
    },
    {
      logoSrc: 'https://computools.com/wp-content/uploads/2024/10/iaop-2024-color.png',
      subtitle: 'DOU',
      title: 'BEST PLACE TO WORK IN 2024',
      description: 'DOU, the most famous hub for Ukrainian IT professionals, has highly praised Computools in the ranking of the best IT employers in 2024. The ranking is based on a survey of specialists on satisfaction with their current jobs in five blocks of questions: compensation, working conditions, project, career, and loyalty. Computools was ranked third in the 200-800 professionals category.',
      footer: 'RECOGNITION - 2024'
    },
    {
      logoSrc: 'https://computools.com/wp-content/uploads/2025/01/dou_color-2024-horizontal-black-2.svg',
      subtitle: 'COMPARABLY',
      title: 'BEST COMPANY FOR COMPENSATION IN 2024',
      description: 'Computools has been named one of the Best Companies for Compensation in 2024 by Comparably, recognising its competitive salaries and comprehensive benefits. This award is based on high employee satisfaction with the company’s compensation packages, including salary, bonuses, and work-life balance.',
      footer: 'AWARD - 2024'
    },
    {
      logoSrc: 'https://computools.com/wp-content/uploads/2024/12/Best-Company-Compensation-2024-color.svg',
      subtitle: 'IAOP',
      title: 'ANOTHER GREAT ACHIEVEMENT IN GLOBAL OUTSOURCING',
      description: 'Our consistent performance and client satisfaction have once again placed us on this prestigious list, reinforcing our position as a leader in the global outsourcing industry.',
      footer: 'AWARD - 2023'
    }
  ];

  const totalSlides = awardsData.length;
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % (totalSlides - 2));
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + (totalSlides - 2)) % (totalSlides - 2));

  return (
    <section className="py-24 bg-gray-100 text-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 w-full">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-semibold tracking-wider">AWARDS & RECOGNITIONS</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-4xl font-bold leading-snug">
                COMPUTOOLS HAS GAINED A LOT OF EXPERTISE OVER THE YEARS BECOMING A TOP-RATED SOFTWARE ENGINEERING COMPANY
              </p>
            </div>
          </div>
          <div className="flex shrink-0 ml-8">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center bg-gray-300 text-black">
              <ArrowLeft size={24} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center bg-black text-white">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-hidden border-y border-gray-300">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {awardsData.map((award, index) => (
            <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3">
              <div className="p-8 border-r border-gray-300 h-full flex flex-col">
                <div className="flex-grow">
                  <img src={award.logoSrc} alt={`${award.subtitle} logo`} className="h-20 mb-8" />
                  <h3 className="text-lg font-bold mb-1">{award.subtitle}</h3>
                  <h4 className="text-xl font-bold mb-4 leading-tight">{award.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
                </div>
                <p className="text-xs font-semibold tracking-wider text-gray-500 mt-8">{award.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;