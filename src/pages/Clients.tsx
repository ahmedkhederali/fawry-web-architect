
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import HorizontalTabs from '@/components/HorizontalTabs';
import VerticalTabs from '@/components/VerticalTabs';
import Card from '@/components/Card';

const Clients = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white pt-12 pb-6">
        <Card
                  title={t('ourClients')}
                  desc={t('clients_desc')}
                  img_src="/images/clients.jpg"
                  img_alt="Clients Illustration"
                  className="container"
                  color="text-white"
                />
      </div>
     {/* // tabs to display client logos based on category */}
     {/* <HorizontalTabs /> */}
     <VerticalTabs />
      </div>
  );
};

export default Clients;
