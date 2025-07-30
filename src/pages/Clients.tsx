
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import HorizontalTabs from '@/components/HorizontalTabs';
import VerticalTabs from '@/components/VerticalTabs';

const Clients = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('ourClients')}</h1>
          <p className="text-xl text-blue-100">Companies that trust our solutions</p>
        </div>
      </div>
     {/* // tabs to display client logos based on category */}
     {/* <HorizontalTabs /> */}
     <VerticalTabs />
      </div>
  );
};

export default Clients;
