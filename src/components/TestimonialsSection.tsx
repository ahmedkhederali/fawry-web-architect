import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const FAWRY_YELLOW = '#FFD900';
const FAWRY_BLUE = '#1252A3';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const initialTestimonials = [
    {
      id: 1,
      name: "Ahmed Allakany",
      company: "CFO, Koffee Kulture",
      text: "One of the key factors enabling us to compete with international brands is our strategic partnership with Fawry Business. It's not just about accepting payments; it's also about how we manage HR, financial processes, and collections across our branches.",
      avatar: '/testmolies/test.png'
    },
    {
      id: 2,
      name: 'Kamel Abd Al-Latif',
      company: 'COO - Creative Basket',
      text: 'Fawry Business offered us a comprehensive HR solution for all our HR operations. We were able to track employee attendance, leave, and vacation balances, as well as facilitating salary transfers through endless payment channels. Furthermore, they provided us with the fawry yellow card for employee payroll & medical, which is equipped with a wide range of benefits for our employees.',
      avatar: '/testmolies/test2.png'
    },
    {
      id: 3,
      name: 'Kamel Abd Al-Latif',
      company: 'COO - Creative Basket',
      text: 'Fawry Business offered us a comprehensive HR solution for all our HR operations. We were able to track employee attendance, leave, and vacation balances, as well as facilitating salary transfers through endless payment channels. Furthermore, they provided us with the fawry yellow card for employee payroll & medical, which is equipped with a wide range of benefits for our employees.',
      avatar: '/testmolies/test2.png'
    },
  ];

  // Show 3 at a time
  const visibleCount = 3;
  const [startIdx, setStartIdx] = useState(0);


  const [testimonials, setTestimonials] = useState(
    initialTestimonials.map(t => ({ ...t, expanded: false }))
  );

  const toggleExpand = (id) => {
    setTestimonials(testimonials.map(t =>
      t.id === id ? { ...t, expanded: !t.expanded } : t
    ));
  };


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
    <section className="py-10 bg-gray-50 overflow-hidden w-full">
      <div className="px-4 mb-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-[#FFD900] to-[#1252A3] bg-clip-text text-transparent">
              {t ? t('testimonialsTitle') : "What Our Clients Say"}
            </span>
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
                key={testimonial.id + "-" + idx}
                className="testimonial-card bg-white rounded-lg shadow p-6 w-[350px] max-w-full shrink-0 flex flex-col"
              >
                <div className="flex items-start space-x-4 mb-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="text-4xl text-secondary mb-2">"</div>

                    <p
                      className={`text-gray-700 mb-4 leading-relaxed transition-all duration-300 custom-scrollbar ${testimonial.expanded ? "max-h-40 overflow-y-auto pr-2" : "line-clamp-5"
                        }`}
                    >
                      {testimonial.text}
                    </p>

                    <button
                      className="text-blue-600 text-sm font-medium hover:underline self-start"
                      onClick={() => toggleExpand(testimonial.id)}
                    >
                      {testimonial.expanded ? "Read Less" : "Read More"}
                    </button>

                    <div className="mt-2">
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
