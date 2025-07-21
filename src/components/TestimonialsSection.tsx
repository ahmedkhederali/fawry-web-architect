import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const FAWRY_YELLOW = '#FFD900';
const FAWRY_BLUE = '#1252A3';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Isabella Rodriguez',
      company: 'CEO and Co-founder of ABC Company',
      text: 'Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Gabrielle Williams',
      company: 'CEO and Co-founder of XYZ Company',
      text: 'Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Samantha Johnson',
      company: 'CEO and Co-founder of DEF Company',
      text: 'Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Michael Chen',
      company: 'CTO of Tech Innovations',
      text: 'Outstanding technical expertise combined with creative vision. They delivered beyond what we imagined possible.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Sarah Ahmed',
      company: 'Marketing Director at Global Corp',
      text: 'Professional, innovative, and results-driven. Our collaboration has transformed our digital presence completely.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Amr Youssef',
      company: 'CFO at FinTech Hub',
      text: 'Very fast and high quality work, they really care about details and user experience.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 7,
      name: 'Fatima Saleh',
      company: 'Product Owner at Appify',
      text: 'Absolutely the best team for UI/UX. They took our product to the next level.',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 8,
      name: 'Alex Kim',
      company: 'Lead Designer at Designify',
      text: 'If you need modern design and creativity, this is the team to work with!',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=60&h=60&fit=crop&crop=face'
    }
  ];

  // Show 3 at a time
  const visibleCount = 3;
  const [startIdx, setStartIdx] = useState(0);

  // Infinite scroll logic
  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % testimonials.length);
  };

  // Only show the visible ones
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(startIdx + i) % testimonials.length]);
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden w-full">
      <div className="px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t ? t('testimonialsTitle') : "What Our Clients Say"}
          </h2>
        </div>
      </div>
      <div className="relative flex items-center w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className={`
            absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center
            h-14 w-14 rounded-full border-2 border-[#FFD900] bg-white
            hover:bg-[#FFD900] transition-all duration-300 group z-20 shadow-lg
          `}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.5 19L9.5 12L15.5 5"
                stroke={FAWRY_BLUE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Carousel */}
        <div className="overflow-hidden w-full px-16">
          <div className="flex gap-12 justify-center">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id + '-' + idx}
                className="testimonial-card bg-white rounded-lg shadow p-6 w-[350px] max-w-full shrink-0 flex flex-col"
              >
                <div className="flex items-start space-x-4 mb-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-4xl text-secondary mb-2">"</div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div>
                      <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className={`
            absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center
            h-14 w-14 rounded-full border-2 border-[#FFD900] bg-white
            hover:bg-[#FFD900] transition-all duration-300 group z-20 shadow-lg
          `}
        >
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.5 5L14.5 12L8.5 19"
                stroke={FAWRY_BLUE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
