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
    <div className="min-h-screen">
      <div className="bg-secondary text-white pt-12 pb-6">
        <section className="w-full bg-[#006b99] text-white mt-10 pt-16 pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
       <div className="md:w-1/2 relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">
        {t("Clients")}
      </h1>
      <p className="text-lg mb-6 leading-relaxed tracking-wide text-white text-justify">
        {t("clients_desc")}
      </p>
    </div>

    {/* Right side image */}
    <div className="md:w-1/2">
      <img
        src="/images/clients.jpg"
        alt="client illustration"
        className=" h-[300px] rounded-xl shadow-2xl  w-full  contain-content transform"
       // className="rounded-xl shadow-2xl w-full max-h-[400px] object-cover transform "
        style={{ perspective: "1200px" }}
      />
    </div>
  
        </div>
      </section>
      
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
         
          <div ref={descriptionRef} className={`flex flex-col md:flex-row items-center justify-between gap-8`}>
            <VerticalTabs 
              categories={ClientTabsParent[activeTab].categories} 
              logoClassName="w-32 h-32 object-contain" // Added uniform logo sizing
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;