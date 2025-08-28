import React, { useRef, useState, useMemo } from 'react';
import { useLanguage } from '../components/LanguageContext';
import HorizontalTabs from '@/components/HorizontalTabs';
import VerticalTabs from '@/components/VerticalTabs';
import { ClientTabsParent } from '@/lib/solutionsData';
const Clients = () => {
  const [activeTab, setActiveTab] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const defaultActive = useMemo(() => {
    if (activeTab === 0) return 'Packaging Industry';
    if (activeTab === 1) return 'Corporate Sector';
    return ClientTabsParent[activeTab].categories[0];
  }, [activeTab]);
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="bg-secondary text-white pd-4 md:pt-12 pb-6">
        <section className="w-full bg-[#006b99] text-white mt-10 pt-16 pb-8 relative">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2 relative z-10">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#ffd400] drop-shadow-lg">
                {t('Clients')}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed tracking-wide text-white/95 text-justify">
                {t('clients_desc')}
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src="/images/clients.jpg"
                alt="client illustration"
                className="w-full rounded-xl shadow-2xl object-cover aspect-[16/9] max-h-[260px] sm:max-h-[320px] md:max-h-[360px]"
              />
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 sm:px-6 pt-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {ClientTabsParent.map((child, index) => (
              <button
                key={child.id}
                onClick={() => setActiveTab(index)}
                className={[
                  'relative pb-2 text-base sm:text-lg font-medium transition',
                  'snap-start shrink-0',
                  index === activeTab ? 'text-[#ffd400]' : 'text-white/70',
                ].join(' ')}
              >
                {child.label}
                {index === activeTab && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ffd400] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* CONTENT */}
      {ClientTabsParent[activeTab] && (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div
            ref={descriptionRef}
            className="flex flex-col items-center justify-between gap-6 md:gap-8"
          >
            <div className="w-full md:hidden">
              <HorizontalTabs
                key={`h-${activeTab}`}
                categories={ClientTabsParent[activeTab].categories}
                defaultActive={defaultActive}
                gridClassName="grid grid-cols-2 gap-4"
                logoClassName="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto"
                cardClassName="bg-white rounded-xl p-3 shadow border border-gray-100"
                tabsClassName="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                tabItemClassName="shrink-0 snap-start px-3 py-1.5 rounded-full border border-[#006b99]/30 text-sm"
                tabItemActiveClassName="bg-[#006b99] text-white border-transparent"
              />
            </div>
            <div className="hidden md:block w-full">
              <VerticalTabs
                key={`v-${activeTab}`}
                categories={ClientTabsParent[activeTab].categories}
                defaultActive={defaultActive}
                logoClassName="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                leftColClassName="md:max-w-xs lg:max-w-sm"
                panelClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                cardClassName="bg-white rounded-xl p-4 shadow border border-gray-100"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Clients;