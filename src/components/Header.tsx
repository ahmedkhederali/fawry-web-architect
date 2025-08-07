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
        <div className={`flex items-center justify-between h-16 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo */}
          <div className={`flex items-center ${direction === 'rtl' ? 'order-3' : 'order-1'}`}>
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/DiracSystems.png" alt="Dirac Systems" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8 ${direction === 'rtl' ? 'space-x-reverse order-2 justify-center flex-1' : 'order-2 justify-center flex-1'}`}>
            <Link to="/" className="text-[#006b99] hover:text-[#ffd300]">{t('home')}</Link>

            {/* Dropdown Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="flex items-center text-[#006b99] hover:text-[#ffd300]">
                {t('aboutUs')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute mt-2 bg-white shadow-md rounded-md z-50 p-2 space-y-2 ${isAboutDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/about" className="block px-4 py-2 hover:bg-white hover:text-[#006b99] rounded-md">{t('aboutUs')}</Link>
                <Link to="/career" className="block px-4 py-2 hover:bg-[#ffd300] hover:text-[#006b99] rounded-md">{t('career')}</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-[#ffd300] hover:text-[#006b99] rounded-md">{t('contactUs')}</Link>
                <Link to="/clients" className="block px-4 py-2 hover:bg-[#ffd300] hover:text-[#006b99] rounded-md">{t('ourClients')}</Link>
                <Link to="/partners" className="block px-4 py-2 hover:bg-[#ffd300] hover:text-[#006b99] rounded-md">{t('ourPartners')}</Link>
              </div>
            </div>

            <Link to="/products" className="text-[#006b99] hover:text-[#ffd300]">{t('products')}</Link>
            <Link to="/solutions" className="text-[#006b99] hover:text-[#ffd300]">{t('serviceSolutions')}</Link>
            <Link to="/blog" className="text-[#006b99] hover:text-[#ffd300]">{t('blog')}</Link>
          </nav>

          {/* Right Side (Language Switch + Mobile Button) */}
          <div className={`flex items-center space-x-4 ${direction === 'rtl' ? 'space-x-reverse order-1' : 'order-3'} justify-end`}>
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
              className="lg:hidden p-2 text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md py-4 px-6 space-y-4 border-t z-40">
            <Link to="/" className="block text-[#006b99] hover:text-[#ffd300]">{t('home')}</Link>
            <Link to="/career" className="block text-[#006b99] hover:text-[#ffd300]">{t('career')}</Link>
            <Link to="/contact" className="block text-[#006b99] hover:text-[#ffd300]">{t('contactUs')}</Link>
            <Link to="/clients" className="block text-[#006b99] hover:text-[#ffd300]">{t('ourClients')}</Link>
            <Link to="/partners" className="block text-[#006b99] hover:text-[#ffd300]">{t('ourPartners')}</Link>
            <Link to="/products" className="block text-[#006b99] hover:text-[#ffd300]">{t('products')}</Link>
            <Link to="/solutions" className="block text-[#006b99] hover:text-[#ffd300]">{t('serviceSolutions')}</Link>
            <Link to="/blog" className="block text-[#006b99] hover:text-[#ffd300]">{t('blog')}</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
