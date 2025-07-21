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

  const visibleCount = 4; // Show 4 at a time for better full-width look!
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + partners.length) % partners.length);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % partners.length);
  };

  // Get visible partners, looping
  const visiblePartners = [];
  for (let i = 0; i < visibleCount; i++) {
    visiblePartners.push(partners[(startIdx + i) % partners.length]);
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden w-full">
      <div className="w-full">
        <div className="text-center mb-16 w-full">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('partnersTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            Strategic partnerships with industry leaders
          </p>
        </div>
        <div className="relative w-full flex items-center">
          {/* Left Arrow - full height */}
          <button
  onClick={handlePrev}
  aria-label="Previous"
  className={`
    absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center
    h-14 w-14 rounded-full border-2 border-[#FFD900] bg-white
    hover:bg-[#FFD900] transition-all duration-300 group z-20 shadow-lg
  `}
>
  <span className="transition-transform duration-300 group-hover:-translate-x-1">
    {/* Chevron Left */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M15.5 19L9.5 12L15.5 5"
        stroke="#1252A3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>

          {/* Carousel */}
          <div className="w-full px-20">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                width: '100%',
                // No translateX needed, since we re-calculate visiblePartners in JS
              }}
            >
              {visiblePartners.map((partner, idx) => (
                <div
                  key={partner.id + '-' + idx}
                  className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1 min-w-0"
                  style={{
                    aspectRatio: '1 / 1',
                    height: '220px',
                    minWidth: 0,
                    maxWidth: '100%',
                  }}
                >
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto mb-2 object-contain"
                  />
                  <div className="text-base font-medium text-gray-600 text-center">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - full height */}
          <button
  onClick={handleNext}
  aria-label="Next"
  className={`
    absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center
    h-14 w-14 rounded-full border-2 border-[#FFD900] bg-white
    hover:bg-[#FFD900] transition-all duration-300 group z-20 shadow-lg
  `}
>
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    {/* Chevron Right */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.5 5L14.5 12L8.5 19"
        stroke="#1252A3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
