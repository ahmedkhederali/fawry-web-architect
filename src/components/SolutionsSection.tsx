
import React from 'react';
import { useLanguage } from './LanguageContext';

const SolutionsSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
      span: 'col-span-1 row-span-2'
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and data analytics',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=300&fit=crop',
      span: 'col-span-2 row-span-1'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('solutionsTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to meet your business needs and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg card-hover ${solution.span} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
