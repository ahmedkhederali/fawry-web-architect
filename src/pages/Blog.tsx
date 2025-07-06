
import React from 'react';
import { useLanguage } from '../components/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-secondary">{t('blog')}</h1>
          <p className="text-xl text-muted-foreground">Latest insights and industry news</p>
          <div className="mt-8 p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Blog posts and articles will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
