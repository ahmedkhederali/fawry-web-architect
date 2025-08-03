import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

// Add these colors to your Tailwind config for easy use
const FAWRY_YELLOW = '#FFD900';
const FAWRY_BLUE = '#1252A3';

const PartnersSection = () => {
  const { t } = useLanguage();
  const partners = [
    { id: 1, name: 'Bank', icon: '/icons/bank.png' },
    { id: 2, name: 'Cegid', icon: '/icons/cegid.png' },
    { id: 3, name: 'Ejada', icon: '/icons/ejada.png' },
    { id: 4, name: 'Fawry', icon: '/icons/fawry.png' },
    { id: 5, name: 'IMC', icon: '/icons/imc.png' },
    { id: 6, name: 'IT', icon: '/icons/it.png' },
    { id: 7, name: 'ITIDA', icon: '/icons/itida.png' },
    { id: 8, name: 'Virtual CFO', icon: '/icons/virtual-cfo.png' }
  ];

 
  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
          {t('partnersTitle')}
        </h2>
        <p className="text-lg text-gray-600">
          Strategic partnerships with industry leaders
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={partner.icon}
                alt={partner.name}
                className="w-24 h-24 mb-4 object-contain"
              />
              <div className="text-base font-medium text-gray-600 text-center">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
