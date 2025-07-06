
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, direction, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`flex items-center ${direction === 'rtl' ? 'order-2' : 'order-1'}`}>
            <Link to="/" className="text-2xl font-bold text-secondary">
              TechCorp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8 ${direction === 'rtl' ? 'space-x-reverse order-1' : 'order-2'}`}>
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              {t('home')}
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                {t('aboutUs')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isAboutDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <Link to="/career" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('career')}
                  </Link>
                  <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('contactUs')}
                  </Link>
                  <Link to="/clients" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('ourClients')}
                  </Link>
                  <Link to="/partners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('ourPartners')}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/solutions" className="text-gray-700 hover:text-primary transition-colors">
              {t('serviceSolutions')}
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              {t('products')}
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
              {t('blog')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className={`flex items-center space-x-4 ${direction === 'rtl' ? 'space-x-reverse order-1' : 'order-3'}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary">
                {t('home')}
              </Link>
              <Link to="/career" className="text-gray-700 hover:text-primary">
                {t('career')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary">
                {t('contactUs')}
              </Link>
              <Link to="/clients" className="text-gray-700 hover:text-primary">
                {t('ourClients')}
              </Link>
              <Link to="/partners" className="text-gray-700 hover:text-primary">
                {t('ourPartners')}
              </Link>
              <Link to="/solutions" className="text-gray-700 hover:text-primary">
                {t('serviceSolutions')}
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-primary">
                {t('products')}
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary">
                {t('blog')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
