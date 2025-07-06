
import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PDFDownloadSection from '../components/PDFDownloadSection';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import ClientsSection from '../components/ClientsSection';
import PartnersSection from '../components/PartnersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <PDFDownloadSection />
        <AboutSection />
        <SolutionsSection />
        <ClientsSection />
        <PartnersSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
