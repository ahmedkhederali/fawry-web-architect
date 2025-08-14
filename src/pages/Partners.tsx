
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import PartnersSection from '../components/PartnersSection';
import Card from '@/components/Card';

const Partners = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white  pt-12 pb-6">
        <Card
          title={t('partners_title')}
          desc={t('partners_desc')}
          img_src="/images/partner.jpeg"
          img_alt="Partners Illustration"
          className="container"
          color="text-white"
        />
      </div>

      <PartnersSection />
    </div>
  );
};

export default Partners;
