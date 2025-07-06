
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    career: 'Career',
    contactUs: 'Contact Us',
    ourClients: 'Our Clients',
    ourPartners: 'Our Partners',
    serviceSolutions: 'Service Solutions',
    products: 'Products',
    blog: 'Blog',
    heroTitle: 'Innovative Software Solutions',
    heroSubtitle: 'Empowering businesses with cutting-edge technology and exceptional service quality',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    downloadPdf: 'Download PDF',
    aboutTitle: 'About Our Company',
    aboutText: 'We are a leading software company dedicated to delivering innovative solutions that transform businesses and drive digital success.',
    solutionsTitle: 'Our Solutions',
    clientsTitle: 'Our Trusted Clients',
    partnersTitle: 'Our Partners',
    testimonialsTitle: 'What Our Clients Say',
    contactTitle: 'Get In Touch',
    footerText: 'Leading software solutions provider',
    quickLinks: 'Quick Links',
    services: 'Services',
    company: 'Company',
    followUs: 'Follow Us'
  },
  ar: {
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    career: 'الوظائف',
    contactUs: 'اتصل بنا',
    ourClients: 'عملاؤنا',
    ourPartners: 'شركاؤنا',
    serviceSolutions: 'الحلول والخدمات',
    products: 'المنتجات',
    blog: 'المدونة',
    heroTitle: 'حلول برمجية مبتكرة',
    heroSubtitle: 'نمكن الشركات بالتكنولوجيا المتطورة وجودة الخدمة الاستثنائية',
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف أكثر',
    downloadPdf: 'تحميل PDF',
    aboutTitle: 'عن شركتنا',
    aboutText: 'نحن شركة برمجيات رائدة مكرسة لتقديم حلول مبتكرة تحول الأعمال وتحقق النجاح الرقمي.',
    solutionsTitle: 'حلولنا',
    clientsTitle: 'عملاؤنا الموثوقون',
    partnersTitle: 'شركاؤنا',
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    contactTitle: 'تواصل معنا',
    footerText: 'مزود حلول البرمجيات الرائد',
    quickLinks: 'روابط سريعة',
    services: 'الخدمات',
    company: 'الشركة',
    followUs: 'تابعنا'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
