import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselData } from '@/lib/sliderData';

const HeroSection = () => {
  const { t, direction } = useLanguage();
  const [current, setCurrent] = useState(0);
  const total = carouselData.length;

  // Auto play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2000); // 2 seconds
    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden pt-16">
      <div className="relative w-full h-[65vh] group">
        {carouselData.map((item, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay: black, 50% transparent, not full width */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-2xl px-4">
              <div className="bg-black/50 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{item.title}</h1>
                <p className="text-lg md:text-2xl text-blue-100 mb-6 drop-shadow">{item.subtitle}</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold">
                  {item.button}
                </Button>
              </div>
            </div>
          </div>
        ))}
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border border-white ${current === idx ? 'bg-white' : 'bg-transparent'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
