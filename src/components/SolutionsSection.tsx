import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import solutions from '../lib/solutionsData';

const SolutionsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-[#ffd300] to-[#006b99] bg-clip-text text-transparent">
              {t('productsTitle')}
            </span>
          </h2>
          <p className="text-lg text-[#006b99] max-w-2xl mx-auto">
            Comprehensive Software Solutions Tailored To Meet Your Business Needs And Drive Growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-none md:grid-rows-2 gap-6 max-w-7xl mx-auto co">
          {solutions.map((solution, index) => {
            // Apply custom spans only on md+
            let customSpan = '';
            if (solution.id === 'erp') customSpan = 'md:col-start-1 md:row-start-1 md:row-span-1';
            if (solution.id === 'sass') customSpan = 'md:col-start-2 md:row-start-1 md:row-span-1';
            if (solution.id === 'vansales') customSpan = 'md:col-start-3 md:row-start-1 md:row-span-2';
            if (solution.id === 'digital-transformation') customSpan = 'md:col-start-1 md:row-start-2 md:col-span-2';

            const linkTo = `/solutions/${solution.id}`;

            return (
              <Link
                to={linkTo}
                key={solution.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg card-hover animate-fade-in ${customSpan}`}
                style={{ animationDelay: `${index * 0.2}s`, minHeight: '200px' }}
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[250px] lg:h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/80 transition-all"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-lg font-normal opacity-90">{solution.min_dec}</p>
                 
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
