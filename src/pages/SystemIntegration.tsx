import React, { useRef, useState } from 'react';
import { useLanguage } from '../components/LanguageContext';



const SystemIntegration = () => {

  const { t } = useLanguage();

  return (
    <div className="">
      {/* Hero Section */}
      <section className="w-full bg-[#006b99] text-white mt-10 pt-16 pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">
              {t("system_integration")}
            </h1>
            <p className="text-lg mb-6 leading-relaxed tracking-wide text-white text-justify">
              {t("system_integration_desc")}
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="/products/vansales/system integration.png"
              alt="Van Sales Illustration"
              className="h-[300px] rounded-xl shadow-2xl w-full contain-content transform"
              style={{ perspective: "1200px" }}
            />
          </div>
        </div>
      </section>

    
     

    
    </div>
  );
};

export default SystemIntegration;
