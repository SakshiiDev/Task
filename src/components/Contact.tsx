import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Custom hook to get live time for a timezone
const useCurrentTime = (timeZone: string) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: timeZone,
      };
      // Format time and remove leading zero if present
      let formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
      if (formattedTime.startsWith('0')) {
        formattedTime = formattedTime.substring(1);
      }
      setTime(formattedTime.replace(' ', ' ')); // Ensures AM/PM separation
    };
    
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    
    return () => clearInterval(timerId);
  }, [timeZone]);

  return time;
};

// OfficeCard Component
const OfficeCard = ({ office }: { office: any }) => {
  const currentTime = useCurrentTime(office.timeZone);

  return (
    <div className="flex-none w-1/2 md:w-1/4 lg:w-1/6 p-6 border-r border-gray-300">
      <h3 className="text-4xl font-bold mb-3">{currentTime.replace(' AM', ' AM').replace(' PM', ' PM')}</h3>
      <p className="font-semibold text-sm mb-2">{office.country}</p>
      <address className="text-xs text-gray-600 not-italic mb-4">
        {office.company}<br />
        <a href="#" className="underline hover:text-black">{office.address}</a>
      </address>
      <p className="text-xs text-gray-800">{office.phone}</p>
      <a href={`mailto:${office.email}`} className="text-xs text-gray-800 underline hover:text-black">{office.email}</a>
    </div>
  );
};


const ContactAndOffices = () => {
  const [currentOfficeIndex, setCurrentOfficeIndex] = useState(0);

  const officesData = [
    { country: 'USA (HQ)', company: 'Computools LLC', address: 'New York, 430 Park Ave. NY 10022', phone: '+1 917 348 7243', email: 'info@computools.com', timeZone: 'America/New_York' },
    { country: 'USA', company: 'Computools LLC', address: 'Miami, 79 SW 7th St, FL 33130', phone: '+1 917 348 7243', email: 'info@computools.com', timeZone: 'America/New_York' },
    { country: 'UNITED KINGDOM', company: 'Computools LLC (USA)', address: 'London, Second Floor Office, 10 St Bride Street, EC4A 4AD', phone: '+44 (0) 793 9311 355', email: 'info@computools.com', timeZone: 'Europe/London' },
    { country: 'NORWAY', company: 'Computools LLC (USA)', address: 'Oslo, Haakon VIIs Gate 5, 0161', phone: '+44 (0) 793 9311 355', email: 'info@computools.com', timeZone: 'Europe/Oslo' },
    { country: 'GERMANY', company: 'Computools LLC (USA)', address: 'Berlin, Kemperplatz 1 Mitte D, 10785', phone: '+43 67 764441977', email: 'info@computools.com', timeZone: 'Europe/Berlin' },
    { country: 'AUSTRIA', company: 'Computools LLC (USA)', address: 'Linz, Promenade, 4020', phone: '+43 67 764441977', email: 'info@computools.com', timeZone: 'Europe/Vienna' },
    { country: 'POLAND', company: 'Computools Sp. z o.o.', address: 'Warsaw, Grzybowska 62, 00-844', phone: '+48 572 407 017', email: 'info@computools.com', timeZone: 'Europe/Warsaw' },
    { country: 'ISRAEL', company: 'Computools LLC (USA)', address: 'Tel Aviv, Shoken St 23, 1st Floor, 69016', phone: '+38 050 303 2169', email: 'info@computools.com', timeZone: 'Asia/Jerusalem' },
    { country: 'UKRAINE', company: 'Computools LLC', address: 'Kyiv, Astarta, building C, 04070', phone: '+38 050 303 2169', email: 'info@computools.com', timeZone: 'Europe/Kyiv' },
  ];
  
  const nextOffice = () => setCurrentOfficeIndex(prev => Math.min(prev + 1, officesData.length - 5));
  const prevOffice = () => setCurrentOfficeIndex(prev => Math.max(prev - 1, 0));

  return (
    <>
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-x-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">CONTACT US</h2>
              <p className="text-lg leading-relaxed mb-12">
                Get in touch with us to explore how our consulting and engineering expertise can help you achieve your goals. Use the form below or email us at <a href="mailto:info@computools.com" className="font-semibold">info@computools.com</a>
              </p>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-x-8">
                  <input type="text" placeholder="FULL NAME*" className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white" />
                  <input type="text" placeholder="COMPANY NAME" className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white" />
                </div>
                <div className="grid md:grid-cols-2 gap-x-8">
                  <input type="email" placeholder="CORPORATE EMAIL*" className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white" />
                  <input type="tel" placeholder="PHONE NUMBER" className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white" />
                </div>
                <textarea placeholder="MESSAGE*" rows={3} className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white resize-none"></textarea>
                <div className="flex items-center space-x-3 text-xs text-gray-400">
                  <input type="checkbox" className="w-4 h-4 bg-transparent border-gray-600" />
                  <label>I agree and consent to the <a href="#" className="underline">Privacy Policy</a>, its terms of processing of my personal data.</label>
                </div>
                <button type="submit" className="text-5xl font-extrabold text-[#A4D62D] tracking-tighter">SEND MESSAGE →</button>
              </form>
            </div>
            
            <div className="bg-gray-100 text-black p-8 relative">
              <span className="absolute top-4 left-4 text-8xl font-serif opacity-10">“</span>
              <p className="text-sm leading-relaxed mb-6 mt-8">
                “Computools was selected through an RFP process. They were shortlisted and selected from between 5 other suppliers. Computools has worked thoroughly and timely to solve all security issues and launch as agreed. Their expertise is impressive.”
              </p>
              <span className="absolute bottom-16 right-4 text-8xl font-serif opacity-10">”</span>
              <div className="flex items-center mt-12">
                <img src="https://computools.com/wp-content/uploads/2024/06/Elie-Manoukain.png" alt="Mona Madbouly" className="w-20 h-20 object-cover mr-4" />
                <div className="flex-grow">
                  <h4 className="font-bold">MONA MADBOULY</h4>
                  <p className="text-xs text-gray-700">GLOBAL WEB OFFICER AT BRITISH COUNCIL</p>
                  <p className="text-xs mt-2"><span className="font-bold">INDUSTRY:</span> Education Services</p>
                  <p className="text-xs"><span className="font-bold">LOCATION:</span> United Kingdom</p>
                </div>
                <img src="https://computools.com/wp-content/uploads/2022/02/British_COUNCIL_logo-2.svg" alt="British Council" className="w-24 self-start" />
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-1">
                <div className="w-2 h-2 border border-black"></div>
                <div className="w-2 h-2 border border-black"></div>
                <div className="w-2 h-2 border border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100 text-black">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-bold">OUR OFFICES</h2>
                <div className="flex">
                    <button onClick={prevOffice} className="w-12 h-12 flex items-center justify-center bg-gray-300 text-black"><ArrowLeft size={24} /></button>
                    <button onClick={nextOffice} className="w-12 h-12 flex items-center justify-center bg-black text-white"><ArrowRight size={24} /></button>
                </div>
            </div>
        </div>
        <div className="w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentOfficeIndex * (100 / 6)}%)` }}>
                {officesData.map((office, index) => <OfficeCard key={index} office={office} />)}
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactAndOffices;