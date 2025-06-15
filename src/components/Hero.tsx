import React from 'react';

const Hero = () => {
  const trustedLogos = [
    { name: 'Visa', component: <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic leading-[1]" style={{fontFamily: 'sans-serif'}}>VISA</span> },
    { name: 'Epson', component: <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1]" style={{fontFamily: 'sans-serif'}}>EPSON</span> },
    { name: 'IBM', component: <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1]" style={{fontFamily: 'monospace'}}>IBM</span> },
    { name: 'Dior', component: <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1]" style={{fontFamily: 'serif'}}>Dior</span> },
    { name: 'Bombardier', component: <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1]" style={{fontFamily: 'sans-serif'}}>BOMBARDIER</span> },
    { name: 'BritishCouncil', component: (
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <div className="grid grid-cols-2 gap-0.5 sm:gap-1 md:gap-1.5">
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-black rounded-full"></span>
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-black rounded-full"></span>
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-black rounded-full"></span>
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-black rounded-full"></span>
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-[1]">
                <p className="leading-[1]">BRITISH</p>
                <p className="leading-[1]">COUNCIL</p>
            </div>
        </div>
    )}
  ];

  return (
    <section className="bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10">
        <div className="max-w-4xl w-full">
          {/* Main Headline */}
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2 sm:mb-3 leading-[0.95] tracking-tight">
            UNLOCK TOMORROW
          </h4>
          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl font-normal text-black uppercase mb-4 sm:mb-6 md:mb-8 max-w-2xl tracking-wide leading-relaxed">
            Computools creates the most structured, efficient software solutions to elevate a wide range of businesses
          </p>
          {/* Trusted By Section */}
          <div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1 sm:mb-2">Trusted by:</p>
            <div className="flex flex-wrap items-center justify-between gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 mb-1 sm:mb-2">
              {trustedLogos.map((logo) => (
                <div key={logo.name} className="leading-[1]">
                  {logo.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;