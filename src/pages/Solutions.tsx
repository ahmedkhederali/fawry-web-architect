
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import SolutionsSection from '../components/SolutionsSection';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('serviceSolutions')}</h1>
          <p className="text-xl text-blue-100">Comprehensive software solutions for your business</p>
        </div>
      </div>
      <SolutionsSection />
    </div>
  );
};

export default Solutions;
