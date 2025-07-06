
import React from 'react';
import { useLanguage } from '../components/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-secondary">{t('products')}</h1>
          <p className="text-xl text-muted-foreground">Our innovative software products</p>
          <div className="mt-8 p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Product catalog and details will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
