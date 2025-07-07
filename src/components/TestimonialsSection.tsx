
import React from 'react';
import { useLanguage } from './LanguageContext';

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
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        <div className="flex testimonial-scroll">
          {/* First set */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-start space-x-4">
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
          
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <div key={`${testimonial.id}-duplicate`} className="testimonial-card">
              <div className="flex items-start space-x-4">
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
    </section>
  );
};

export default TestimonialsSection;
