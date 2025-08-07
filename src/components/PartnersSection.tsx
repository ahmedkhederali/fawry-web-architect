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
    <section className="py-10 bg-gray-50 w-full">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#FFD900] to-[#1252A3] bg-clip-text text-transparent">
            {t('partnersTitle')}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#006b99]">
          Strategic Partnerships With Industry Leaders
        </p>
      </div>
      <div className="mx-auto px-4 space-y-4 sm:space-y-6 max-w-7xl">
        {/* First row - Mobile: 1 column, Small: 2 columns, Medium+: 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {firstRow.map((icon, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[240px] h-[140px] sm:h-[160px]"
            >
              <img
                src={icon || "/placeholder.svg"}
                alt={`partner-${index}`}
                className="object-contain max-h-[100px] sm:max-h-[120px] max-w-[160px] sm:max-w-[180px]"
              />
            </div>
          ))}
        </div>
        {/* Second row - Mobile: 1 column, larger screens: centered flex */}
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-6 md:gap-8">
          {secondRow.map((icon, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[240px] h-[140px] sm:h-[160px] mx-auto sm:mx-0"
            >
              <img
                src={icon || "/placeholder.svg"}
                alt={`partner-${index + 5}`}
                className="object-contain max-h-[80px] sm:max-h-[100px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default PartnersSection;
