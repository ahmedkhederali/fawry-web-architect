import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { t, direction } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 w-full items-start">
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col max-w-md w-full">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="https://www.fawrypayday.com/assets/images/logo/logo.png" 
                alt="Dirac Systems" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6 text-x leading-relaxed max-w-md">
              Dirac Systems empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.
            </p>
            <div className="flex space-x-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.987 11.987s11.987-5.366 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.455 4.864c1.309-.549 2.717-.856 4.157-.856 1.439 0 2.848.307 4.157.856a8.13 8.13 0 012.856 2.334c.549 1.009.856 2.117.856 3.256 0 1.139-.307 2.247-.856 3.256a8.13 8.13 0 01-2.856 2.334c-1.309.549-2.717.856-4.157.856-1.44 0-2.848-.307-4.157-.856a8.13 8.13 0 01-2.856-2.334C4.95 12.7 4.643 11.593 4.643 10.454c0-1.139.307-2.247.856-3.256a8.13 8.13 0 012.856-2.334z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product, Resources, Company */}
          <div className="flex flex-row gap-16 w-full justify-end items-start">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary">Product</h4>
              <ul className="space-y-3">
                <li><Link to="/solutions" className="text-gray-600 hover:text-secondary transition-colors text-sm">Features</Link></li>
                <li><Link to="/solutions" className="text-gray-600 hover:text-secondary transition-colors text-sm">Pricing</Link></li>
                <li><Link to="/solutions" className="text-gray-600 hover:text-secondary transition-colors text-sm">Integrations</Link></li>
                <li><Link to="/solutions" className="text-gray-600 hover:text-secondary transition-colors text-sm">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary">Resources</h4>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-gray-600 hover:text-secondary transition-colors text-sm">Documentation</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-secondary transition-colors text-sm">Tutorials</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-secondary transition-colors text-sm">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors text-sm">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors text-sm">About</Link></li>
                <li><Link to="/career" className="text-gray-600 hover:text-secondary transition-colors text-sm">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors text-sm">Contact</Link></li>
                <li><Link to="/partners" className="text-gray-600 hover:text-secondary transition-colors text-sm">Partners</Link></li>
              </ul>
            </div>
            {/* Map at the right, larger size */}
            <div className="ml-12 flex-shrink-0">
              <div className="w-96 h-60 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Dirac Systems Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0123456789!2d31.235711315115!3d30.0444199818797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60c2c1eaf%3A0x2e2b2b2b2b2b2b2b!2sDirac%20Systems!5e0!3m2!1sen!2seg!4v1689000000000!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <p className="text-gray-600 text-sm">&copy; 2025 Dirac Systems. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <Link to="#" className="text-gray-600 hover:text-secondary transition-colors text-sm">Privacy Policy</Link>
              <Link to="#" className="text-gray-600 hover:text-secondary transition-colors text-sm">Terms of Service</Link>
              <Link to="#" className="text-gray-600 hover:text-secondary transition-colors text-sm">Cookies Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
