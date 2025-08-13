import React from 'react';
import { useLanguage } from './LanguageContext';
import { clients } from '@/lib/solutionsData';

const ClientsSection = () => {
  const { t } = useLanguage();

  // Mock client logos - in real implementation, these would be actual client logos
 

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-[#FFD900] to-[#1252A3] bg-clip-text text-transparent">
              {t('clientsTitle')}
            </span>
          </h2>
          <p className="text-lg text-[#006b99]">
            Trusted By Leading Companies Worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            <div className="flex space-x-16 scroll-animation">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-center min-w-[200px] h-40 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center w-full">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-20 w-40 mx-auto mb-2 object-contain"
                    />
                    <div className="text-base font-bold italic text-[#1252A3] tracking-wider mt-2 uppercase drop-shadow-sm">
                      {client.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
