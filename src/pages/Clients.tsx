import React, { useRef, useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import HorizontalTabs from '@/components/HorizontalTabs';
import VerticalTabs from '@/components/VerticalTabs';
import Card from '@/components/Card';
import { ClientTabsParent } from '@/lib/solutionsData';

const Clients = () => {
  const [activeTab, setActiveTab] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null)

  const { language, t } = useLanguage();
  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white pt-12 pb-6">
        <Card
          title={t('ourClients')}
          desc={t('clients_desc')}
          img_src="/images/clients.jpg"
          img_alt="Clients Illustration"
          className="container"
          color="text-white "
        />
        <div className="container mx-auto px-6 pt-5  border-[white]/30">
        <div className="flex space-x-8 overflow-x-auto">
          {ClientTabsParent.map((child, index) => (
            <button
              key={child.id}
              onClick={() => handleTabClick(index)}
              className={`relative pb-2 text-lg font-medium transition duration-300 ease-in-out ${index === activeTab ? "text-[#ffd400]" : "text-white/70"
                }`}
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
      
      {ClientTabsParent[activeTab] &&  (
        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Full-width description */}
          <div ref={descriptionRef} className={`flex flex-col md:flex-row items-center justify-between gap-8`}>
            <VerticalTabs 
              categories={ClientTabsParent[activeTab].categories} 
              logoClassName="w-32 h-24 object-contain" // Added uniform logo sizing
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;