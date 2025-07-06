
import React from 'react';
import { useLanguage } from './LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStartup Inc.',
      text: 'Working with this team has been exceptional. They delivered a high-quality solution that exceeded our expectations.',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Ahmed Al-Rahman',
      company: 'Digital Solutions LLC',
      text: 'Professional, reliable, and innovative. They transformed our business processes completely.',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Maria Garcia',
      company: 'E-Commerce Pro',
      text: 'The mobile app they developed for us increased our sales by 200%. Highly recommended!',
      avatar: '👩‍🚀'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('testimonialsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg shadow-lg card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <h4 className="font-bold text-lg text-secondary">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
