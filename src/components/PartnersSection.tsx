
import React from 'react';
import { useLanguage } from './LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners = [
    { id: 1, name: 'Microsoft', logo: '🏢' },
    { id: 2, name: 'AWS', logo: '☁️' },
    { id: 3, name: 'Google Cloud', logo: '🌐' },
    { id: 4, name: 'Oracle', logo: '💼' },
    { id: 5, name: 'IBM', logo: '🔵' },
    { id: 6, name: 'Salesforce', logo: '⚡' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className=" mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('partnersTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            Strategic partnerships with industry leaders
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            <div className="flex space-x-16 animate-none scroll-animation" style={{ animationDirection: 'reverse' }}>
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{partner.logo}</div>
                    <div className="text-sm font-medium text-gray-600">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-16 animate-none scroll-animation" style={{ animationDirection: 'reverse' }}>
              {partners.map((partner) => (
                <div
                  key={`${partner.id}-duplicate`}
                  className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{partner.logo}</div>
                    <div className="text-sm font-medium text-gray-600">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
