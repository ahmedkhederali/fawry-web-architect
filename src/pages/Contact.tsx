
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  const { language, t } = useLanguage(); // assumed lang is 'en' or 'ar'

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contactUs')}</h1>
          <p className="text-xl text-blue-100">Get in touch with our team</p>
        </div>
      </div>
      <ContactSection
        hubspotFormId={
          language === 'ar'
            ? '64b9308d-6d38-4fdf-80c3-8c0ce4d99420'
            : '0fa3d708-1edd-45d7-940c-47901b61691f'
        }
      />
    </div>
  );
};

export default Contact;
