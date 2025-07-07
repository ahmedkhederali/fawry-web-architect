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
            <Link to="/" className="flex items-center space-x-2">
              {/* <img 
                src="https://www.fawrypayday.com/assets/images/logo/logo.png" 
                alt="Dirac Systems" 
                className="h-8 w-auto"
              /> */}
              <span className="text-xl font-bold bg-clip-text text-[#00699c]">
                Dirac Systems
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8 ${direction === 'rtl' ? 'space-x-reverse order-1' : 'order-2'}`}>
            <Link to="/" className="text-gray-700 hover:text-secondary transition-colors">
              {t('home')}
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-secondary transition-colors">
                {t('aboutUs')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className={`dropdown-menu ${isAboutDropdownOpen ? 'show' : ''}`}>
                <Link to="/career" className="dropdown-item transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 hover:bg-[#f3f6f8] hover:text-[#00699c] rounded-md px-4">
                  {t('career')}
                </Link>
                <Link to="/contact" className="dropdown-item transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 hover:bg-[#f3f6f8] hover:text-[#00699c] rounded-md px-4">
                  {t('contactUs')}
                </Link>
                <Link to="/clients" className="dropdown-item transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 hover:bg-[#f3f6f8] hover:text-[#00699c] rounded-md px-4">
                  {t('ourClients')}
                </Link>
                <Link to="/partners" className="dropdown-item transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 hover:bg-[#f3f6f8] hover:text-[#00699c] rounded-md px-4">
                  {t('ourPartners')}
                </Link>
              </div>
            </div>

            <Link to="/solutions" className="text-gray-700 hover:text-secondary transition-colors">
              {t('serviceSolutions')}
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-secondary transition-colors">
              {t('products')}
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-secondary transition-colors">
              {t('blog')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className={`flex items-center space-x-4 ${direction === 'rtl' ? 'space-x-reverse order-1' : 'order-3'}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
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
              <Link to="/" className="text-gray-700 hover:text-secondary">
                {t('home')}
              </Link>
              <Link to="/career" className="text-gray-700 hover:text-secondary">
                {t('career')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-secondary">
                {t('contactUs')}
              </Link>
              <Link to="/clients" className="text-gray-700 hover:text-secondary">
                {t('ourClients')}
              </Link>
              <Link to="/partners" className="text-gray-700 hover:text-secondary">
                {t('ourPartners')}
              </Link>
              <Link to="/solutions" className="text-gray-700 hover:text-secondary">
                {t('serviceSolutions')}
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-secondary">
                {t('products')}
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-secondary">
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
