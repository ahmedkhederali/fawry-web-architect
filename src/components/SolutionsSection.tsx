

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import solutions from '../lib/solutionsData';

const SolutionsSection = () => {
  const { t } = useLanguage();



  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('productsTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to meet your business needs and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            // Custom grid placement for each card to match the image
            let customSpan = '';
            // Top row: 3 cards
            if (solution.id === 'erp') customSpan = 'col-start-1 row-start-1 row-span-1';
            if (solution.id === 'sass') customSpan = 'col-start-2 row-start-1 row-span-1';
            if (solution.id === 'vansales') customSpan = 'col-start-3 row-start-1 row-span-2';
            // Bottom left: spans two columns
            if (solution.id === 'digital-marketing') customSpan = 'col-start-1 row-start-2 col-span-2';

            const hasChildren = Array.isArray(solution.children) && solution.children.length > 0;
            const linkTo = hasChildren
              ? `/solutions/${solution.id}`
              : `/solutions/${solution.id}`;
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
                  className={
                    solution.id === 'vansales'
                      ? 'w-full h-full object-cover min-h-[200px]'
                      : solution.id === 'digital-marketing'
                        ? 'w-full h-[200px] object-cover'
                        : 'w-full h-full object-cover min-h-[200px]'
                  }
                />
                <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/80 transition-all"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-lg font-normal opacity-90">{solution.description}</p>
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
