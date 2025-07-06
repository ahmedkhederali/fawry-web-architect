
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { t, direction } = useLanguage();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary">TechCorp</h3>
            <p className="text-blue-100 mb-6 max-w-md">
              {t('footerText')} delivering innovative solutions that transform businesses and drive digital success.
            </p>
            
            {/* Embedded Map */}
            <div className="bg-blue-800/50 rounded-lg p-4 h-48 flex items-center justify-center">
              <p className="text-blue-200">🗺️ Company Location Map</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">{t('contactUs')}</Link></li>
              <li><Link to="/career" className="text-blue-100 hover:text-white transition-colors">{t('career')}</Link></li>
              <li><Link to="/blog" className="text-blue-100 hover:text-white transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('services')}</h4>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-blue-100 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/solutions" className="text-blue-100 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/solutions" className="text-blue-100 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/solutions" className="text-blue-100 hover:text-white transition-colors">AI & ML</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className={`border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
          <div className="mb-4 md:mb-0">
            <p className="text-blue-100">&copy; 2024 TechCorp. All rights reserved.</p>
          </div>
          
          {/* Social Links */}
          <div className={`flex space-x-4 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
            <h5 className="text-primary font-medium">{t('followUs')}:</h5>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
