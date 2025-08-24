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
      <div className="mx-auto max-w-7xl px-4 space-y-6">
        {/* FIRST ROW */}
        <div
          className="
     grid grid-cols-1 gap-4
     sm:grid-cols-1
     md:flex md:flex-wrap md:justify-center md:gap-6
     lg:grid lg:grid-cols-5 lg:gap- lg:justify-items-center
   "
        >
          {firstRow.map((icon, index) => (
            <div
              key={`first-${index}`}
              className="
         flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow
         w-full h-[140px] p-4
         sm:h-[160px] sm:p-6
         md:basis-[calc(33.333%-24px)] md:max-w-[260px]   /* 3 per line approx on md, wraps */
         lg:basis-auto lg:max-w-[240px]                   /* grid controls at lg */
       "
            >
              <img
                src={icon || "/placeholder.svg"}
                alt={`partner-${index}`}
                className="object-contain max-h-[100px] sm:max-h-[120px] max-w-[180px]"
              />
            </div>
          ))}
        </div>
        {/* SECOND ROW */}
        <div
          className="
   flex flex-wrap gap-6
   justify-center    /* ده اللي بيخلي العناصر في النص */
 "
        >
          {secondRow.map((icon, index) => (
            <div
              key={`second-${index}`}
              className="
       flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow
       w-full sm:w-[240px] h-[160px] p-6
     "
            >
              <img
                src={icon || '/placeholder.svg'}
                alt={`partner-${index}`}
                className="object-contain max-h-[100px] sm:max-h-[120px] max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default PartnersSection;
