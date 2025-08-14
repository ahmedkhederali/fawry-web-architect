
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import ContactSection from '../components/ContactSection';
import Card from '@/components/Card';

const Contact = () => {
  const { language, t } = useLanguage(); // assumed lang is 'en' or 'ar'

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white  pt-12 pb-6">
        <Card
          title={t('contactUs')}
          desc={t('contact_desc')}
          img_src="/images/contact.jpg"
          img_alt="Contact Us Illustration"
          className="container"
          color="text-white"
        />
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
