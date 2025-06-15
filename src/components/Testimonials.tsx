import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const ratings = [
    { platform: 'Clutch', reviews: '56 REVIEWS', image: '/images/testimonials/clutch-logo.svg' },
    { platform: 'ForFirms', reviews: '19 REVIEWS', image: '/images/testimonials/forfirms-logo.svg' },
    { platform: 'Recommendation', reviews: '11 LETTERS', isText: true },
  ];

  const videoTestimonials = [
    {
      type: 'video', clientLogo: 'https://computools.com/wp-content/uploads/2022/11/Data-Access.svg', clientName: 'DataAccess Worldwide', mediaSrc: 'https://computools.com/wp-content/uploads/2025/05/russell_shumate.webm', authorImage: 'https://computools.com/wp-content/uploads/2022/09/pic.png', authorName: 'RUSELL SHUMATE', authorPosition: 'OWNER OF DATA ACESS COMPANY', industry: 'SOFTWARE', location: 'USA', year: '2018', readMore: { platform: 'CLUTCH.CO', url: '#' },
    },
    {
      type: 'video', clientLogo: 'https://computools.com/wp-content/uploads/2022/11/logo_scalarsolutions.png', clientName: 'Scalar Solutions', mediaSrc: 'https://computools.com/wp-content/uploads/2025/05/video_alexis_pellegrini.webm', authorImage: 'https://computools.com/wp-content/uploads/2021/04/ALEXIS-PELLEGRINI.png', authorName: 'ALEX PELLIGRINI', authorPosition: 'PARTNER AT SCALAR SOLUTIONS', industry: 'SOFTWARE', location: 'USA', year: '2020',
    },
    {
      type: 'video', clientLogo: 'https://computools.com/wp-content/uploads/2022/11/sakura-communication-1-1.svg', clientName: 'Sakura Communication', mediaSrc: 'https://computools.com/wp-content/uploads/2025/05/Tokio_Kuwamura.webm', authorImage: 'https://computools.com/wp-content/uploads/2022/09/pic-2.png', authorName: 'TOKIO KUWAMURA', authorPosition: 'DIRECTOR OF SAKURA-COMMUNICATION', industry: 'SOFTWARE', location: 'JAPAN', year: '2022', readMore: { platform: 'GOODFIRMS', url: '#' },
    },
  ];

  const textTestimonials = [
    {
      type: 'text', clientLogo: 'https://computools.com/wp-content/uploads/2022/10/Logo-11.png', clientName: 'Sopra Steria', quote: '"Computools offered me great support in defying the technical needs and providing a lot of ideas and improvement to our original idea. They pitched in their thoughts and really worked on the idea like it was theirs! I was really surprised by the great inputs. The price offered was really reasonable and the experience with their employees was extremely positive (account manager and pm were great with us!)"', authorImage: 'https://computools.com/wp-content/uploads/2024/06/Mafalda-Cogliani.png', authorName: 'MAFALDA COGLIANI', authorPosition: 'PROCESS OFFICER AT SOPRA STERIA', industry: 'SOFTWARE', location: 'GERMANY', year: '2017', readMore: { platform: 'CLUTCH.CO', url: '#' },
    },
    {
      type: 'text', clientLogo: 'https://computools.com/wp-content/uploads/2021/03/Group-957.svg', clientName: 'MyTownMyCity', quote: '"We’ve worked with many outsource companies over the years. But Computools has by far been the best. The technology knowledge and quality of the team leave us with no question about the project we get back. Plus we have multi-code disciplines and they handle these with ease. Communication through the project is great, whilst they also meet or exceed expectations."', authorImage: 'https://computools.com/wp-content/uploads/2021/06/Mask-Group-37.png', authorName: 'ROBERT BAILEY', authorPosition: 'CEO MYTOWNMYCITY LTD', industry: 'SOFTWARE', location: 'UNITED KINGDOM', year: '2017',
    },
    {
      type: 'text', clientLogo: 'https://computools.com/wp-content/uploads/2022/10/Logo-10.png', clientName: 'Creelit', quote: '"I started with just a single developer from Computools to test their skill level and communication. I have done this so many times before with new development teams. I was immediately pleased with the first developer that I increased to 3 people and now 8 months later we have 13 people. The team has grown and rapidly improved my product extensively. We are now about to exit private beta and on board over 500,000 users."', authorImage: 'https://computools.com/wp-content/uploads/2022/10/Mask-Avatar-7.png', authorName: 'WAYNE CREEL', authorPosition: 'CEO AT CREELIT', industry: 'SOFTWARE', location: 'USA', year: '2017', readMore: { platform: 'GOODFIRMS', url: '#' },
    }
  ];

  const nextVideo = () => setCurrentVideoIndex(prev => (prev + 1) % (videoTestimonials.length - 1));
  const prevVideo = () => setCurrentVideoIndex(prev => (prev - 1 + (videoTestimonials.length - 1)) % (videoTestimonials.length - 1));
  
  const nextText = () => setCurrentTextIndex(prev => (prev + 1) % (textTestimonials.length - 1));
  const prevText = () => setCurrentTextIndex(prev => (prev - 1 + (textTestimonials.length - 1)) % (textTestimonials.length - 1));

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="border border-gray-300 p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <img src={testimonial.clientLogo} alt={`${testimonial.clientName} logo`} className="h-10" />
        {testimonial.readMore && (
          <a href={testimonial.readMore.url} className="text-xs bg-gray-200 px-3 py-2 font-bold tracking-wider whitespace-nowrap">
            READ ON {testimonial.readMore.platform} →
          </a>
        )}
      </div>
      <div className="flex-grow mb-4 flex items-center">
        {testimonial.type === 'video' ? (
          <video controls src={testimonial.mediaSrc} className="w-full h-auto">Your browser does not support the video tag.</video>
        ) : (
          <blockquote className="text-base text-gray-700 leading-relaxed italic">"{testimonial.quote}"</blockquote>
        )}
      </div>
      <div className="flex items-center mt-auto pt-4">
        <img src={testimonial.authorImage} alt={testimonial.authorName} className="w-14 h-14 rounded-full mr-4" />
        <div className="flex-grow grid grid-cols-2 gap-x-4 text-xs">
          <div>
            <p className="font-bold">{testimonial.authorName}</p>
            <p className="text-gray-600">{testimonial.authorPosition}</p>
          </div>
          <div>
            <p><span className="font-bold">INDUSTRY:</span> {testimonial.industry}</p>
            <p><span className="font-bold">LOCATION:</span> {testimonial.location}</p>
            <p><span className="font-bold">YEAR:</span> {testimonial.year}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-10 items-start mb-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-wider">TESTIMONIALS</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-4xl font-bold leading-snug">DISCOVER WHY CLIENTS TRUST COMPUTOOLS</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center space-x-2 border border-gray-300 px-4 py-2">
                {!rating.isText && <img src={rating.image} alt={rating.platform} className="h-6" />}
                <div className="text-left">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-green-500 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold">{rating.reviews}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-16">
        <div>
          <div className="container mx-auto px-4 lg:px-8 flex justify-end mb-4">
            <div className="flex">
              <button onClick={prevVideo} className="w-12 h-12 flex items-center justify-center bg-gray-300 text-black"><ArrowLeft size={24} /></button>
              <button onClick={nextVideo} className="w-12 h-12 flex items-center justify-center bg-black text-white"><ArrowRight size={24} /></button>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentVideoIndex * 50}%)` }}>
              {videoTestimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-full md:w-1/2 px-4"><TestimonialCard testimonial={testimonial} /></div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="container mx-auto px-4 lg:px-8 flex justify-end mb-4">
            <div className="flex">
              <button onClick={prevText} className="w-12 h-12 flex items-center justify-center bg-gray-300 text-black"><ArrowLeft size={24} /></button>
              <button onClick={nextText} className="w-12 h-12 flex items-center justify-center bg-black text-white"><ArrowRight size={24} /></button>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTextIndex * 50}%)` }}>
              {textTestimonials.map((testimonial, index) => (
                <div key={index} className="flex-none w-full md:w-1/2 px-4"><TestimonialCard testimonial={testimonial} /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;