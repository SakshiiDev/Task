import React from 'react';

const Header = () => {
  const navItems = [
    'CONSULTING',
    'ENGINEERING',
    'TECH TEAMS',
    'INDUSTRIES',
    'CLIENTS',
    'COMPANY',
    'INSIGHTS',
  ];

  return (
    <header className=" w-full bg-white">
      <div className="flex items-stretch h-20 min-w-full">
        
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <div className="bg-[#a4d62d] h-full flex items-center justify-center px-6">
            {/* New Logo SVG based on the final image */}
            <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
              <path d="M30.6387 3.01855C31.5432 1.34863 33.7915 1.34863 34.6961 3.01855L38.4519 10.1504C38.9377 11.0549 39.866 11.6406 40.8997 11.6406H41.1338C43.2031 11.6406 44.502 14.0039 43.4902 15.7734L40.9766 20.252C40.6123 20.8926 40.6123 21.6875 40.9766 22.3281L43.4902 26.8066C44.502 28.5762 43.2031 30.9395 41.1338 30.9395H40.8997C39.866 30.9395 38.9377 31.5254 38.4519 32.4297L34.6961 39.5615C33.7915 41.2314 31.5432 41.2314 30.6387 39.5615L22.5 24.5L30.6387 3.01855Z" fill="currentColor"/>
              <path d="M13.3613 3.01855C12.4568 1.34863 10.2085 1.34863 9.30393 3.01855L5.54808 10.1504C5.06227 11.0549 4.13402 11.6406 3.10034 11.6406H2.86621C0.796875 11.6406 -0.501953 14.0039 0.509766 15.7734L3.02344 20.252C3.3877 20.8926 3.3877 21.6875 3.02344 22.3281L0.509766 26.8066C-0.501953 28.5762 0.796875 30.9395 2.86621 30.9395H3.10034C4.13402 30.9395 5.06227 31.5254 5.54808 32.4297L9.30393 39.5615C10.2085 41.2314 12.4568 41.2314 13.3613 39.5615L21.5 24.5L13.3613 3.01855Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="bg-black h-full flex items-center pl-8 pr-12">
            <span className="text-white text-4xl font-extrabold tracking-wider relative whitespace-nowrap">
              COMPUTOOLS
              <sup className="text-xs absolute top-1 -right-4 font-normal">®</sup>
            </span>
          </div>
        </div>
        
        {/* Navigation Section */}
        <nav className="flex-grow flex items-center justify-center bg-gray-200 text-black font-semibold text-xs tracking-wider space-x-7 px-4">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-gray-700 transition-colors">
              {item} +
            </a>
          ))}
        </nav>

        {/* Get in Touch Section */}
        <div className="flex items-center bg-black px-12 shrink-0">
           <a href="#" className="text-white font-bold text-sm tracking-wider whitespace-nowrap">
            GET IN TOUCH →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;