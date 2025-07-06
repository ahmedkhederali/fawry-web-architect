
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t, direction } = useLanguage();

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'lg:grid-cols-2' : ''}`}>
          {/* Left Content */}
          <div className={`text-white animate-fade-in ${direction === 'rtl' ? 'lg:order-2 text-right' : 'lg:order-1 text-left'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {t('heroSubtitle')}
            </p>
            <div className={`flex ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'} gap-4 flex-wrap`}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold">
                {t('getStarted')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                {t('learnMore')}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`animate-slide-up ${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Team workspace"
                className="rounded-lg shadow-2xl animate-bounce-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
