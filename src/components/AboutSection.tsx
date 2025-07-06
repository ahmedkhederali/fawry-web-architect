
import React from 'react';
import { useLanguage } from './LanguageContext';

const AboutSection = () => {
  const { t, direction } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'lg:grid-cols-2' : ''}`}>
          {/* Text Content */}
          <div className={`animate-fade-in ${direction === 'rtl' ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('aboutText')}
            </p>
            <p className="text-gray-600 mb-8">
              With over a decade of experience in the software industry, we have successfully delivered hundreds of projects across various sectors, helping businesses achieve their digital transformation goals.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`animate-slide-up ${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
              alt="About us"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
