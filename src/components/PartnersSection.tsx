import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  // Use your actual partner icons from public/icons/
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

  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, partners.length - 3));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden w-full ">
      <div className="w-full ">
        <div className="text-center mb-16 w-full ">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('partnersTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            Strategic partnerships with industry leaders
          </p>
        </div>

        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={startIdx === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary text-white rounded-full p-2 shadow disabled:opacity-50 z-10"
          >
            &#8592;
          </button>
          {/* Carousel */}
          <div className="overflow-hidden w-full px-16">
            <div
              className="flex gap-10 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIdx * 250}px)`,
                width: `${partners.length * 250}px`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center justify-center w-[19%] h-44 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0"
                >
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    className="w-28 h-28 mx-auto mb-2 object-contain"
                  />
                  <div className="text-base font-medium text-gray-600 text-center">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={startIdx + 3 >= partners.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary text-white rounded-full p-2 shadow disabled:opacity-50"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
