
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contactUs')}</h1>
          <p className="text-xl text-blue-100">Get in touch with our team</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Contact;
