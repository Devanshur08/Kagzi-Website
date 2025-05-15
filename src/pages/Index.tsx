
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import ProductFeatures from '@/components/ProductFeatures';
import StartupsSection from '@/components/StartupsSection';
import AboutSection from '@/components/AboutSection';
import ProductsShowcase from '@/components/ProductsShowcase';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <VisionSection />
        <ProductFeatures />
        <StartupsSection />
        <AboutSection />
        <ProductsShowcase />
        <TeamSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
