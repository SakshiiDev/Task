
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import Industries from '../components/Industries';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Associations from '@/components/Associations';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <VideoSection />
      <Services />
      <Certifications />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <Awards/>
      <Associations/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
