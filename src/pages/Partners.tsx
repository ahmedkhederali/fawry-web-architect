
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import PartnersSection from '../components/PartnersSection';
import Card from '@/components/Card';

const Partners = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="w-full bg-[#006b99] text-white mt-10 pt-20 pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
       <div className="md:w-1/2 relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">
        {t("partners_title")}
      </h1>
      <p className="text-lg mb-6 leading-relaxed tracking-wide text-white text-justify">
        {t("partners_desc")}
      </p>
    </div>

    {/* Right side image */}
    <div className="md:w-1/2">
      <img
        src="/images/partner.jpeg"
        alt="partners illustration"
        className=" h-[300px] rounded-xl shadow-2xl  w-full  contain-content transform"
       // className="rounded-xl shadow-2xl w-full max-h-[400px] object-cover transform "
        style={{ perspective: "1200px" }}
      />
    </div>
  
        </div>
      </section>
      <PartnersSection />
    </div>
  );
};

export default Partners;
