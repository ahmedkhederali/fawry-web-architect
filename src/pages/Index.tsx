
import React from 'react';
import { LanguageProvider, useLanguage } from '../components/LanguageContext';
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
import FawryHeaderHero from '@/components/FawryHero';

const Index = () => {
  const { language, t } = useLanguage(); // assumed lang is 'en' or 'ar'

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* <Header /> */}
        <div className="relative w-full  overflow-hidden">

          <FawryHeaderHero />
          {/* <HeroSection /> */}
        </div>
        {/* <PDFDownloadSection /> */}

        <AboutSection />

        <SolutionsSection />
        <ClientsSection />
        <PartnersSection />
        <TestimonialsSection />
        <ContactSection
          hubspotFormId={
            language === 'ar'
              ? '64b9308d-6d38-4fdf-80c3-8c0ce4d99420'
              : '0fa3d708-1edd-45d7-940c-47901b61691f'
          }
        />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
