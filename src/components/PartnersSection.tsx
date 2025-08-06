import React from 'react';
import { useLanguage } from './LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  const firstRow = [
    '/icons/virtual-cfo.png',
    '/icons/itida.png',
    '/icons/it.png',
    '/icons/bank.png',
    '/icons/ejada.png',
  ];

  const secondRow = [
    '/icons/imc.png',
    '/icons/cegid.png',
  ];

  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#FFD900] to-[#1252A3] bg-clip-text text-transparent">
            {t('partnersTitle')}
          </span>
        </h2>
        <p className="text-lg text-[#006b99]">
          Strategic partnerships with industry leaders
        </p>
      </div>

      <div className=" mx-auto px-4 space-y-10">
        {/* First row */}
        <div className="flex flex-wrap justify-center gap-8">
          {firstRow.map((icon, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow w-[240px] h-[160px]"
            >
              <img
                src={icon}
                alt={`partner-${index}`}
                className="object-contain max-h-[120px] max-w-[180px]"
              />
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center gap-8">
          {secondRow.map((icon, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow w-[240px] h-[160px]"
            >
             <img
              src={icon}
              alt={`partner-${index + 5}`}
              className="object-contain max-h-[120px] max-w-[180px]"
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
