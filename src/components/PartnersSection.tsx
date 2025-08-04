import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

// Add these colors to your Tailwind config for easy use
const FAWRY_YELLOW = '#FFD900';
const FAWRY_BLUE = '#1252A3';

const PartnersSection = () => {
  const { t } = useLanguage();
  const partners = [
    { id: 1,  icon: '/icons/bank.png' },
    { id: 2,  icon: '/icons/cegid.png' },
    { id: 3,  icon: '/icons/ejada.png' },
    { id: 4,  icon: '/icons/imc.png' },
    { id: 5,  icon: '/icons/it.png' },
    { id: 6,  icon: '/icons/itida.png' },
    { id: 7,  icon: '/icons/virtual-cfo.png' }
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

      <div className=" mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={partner.icon}  
                className="w-50 h-50 mb-4 object-contain"
              />
              <div className="text-base font-medium text-gray-600 text-center">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
