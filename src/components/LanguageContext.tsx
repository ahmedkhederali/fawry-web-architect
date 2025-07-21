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
    serviceSolutions: 'Solutions',
    products: 'Products',
    blog: 'Blog',
    heroTitle: 'Software for the digital revolution',
    heroSubtitle: 'Protect your independence and offer them solutions, insurance products',
    getStarted: 'Get a Quote',
    learnMore: 'Learn More',
    downloadPdf: 'Download PDF',
    aboutTitle: 'About Our Company',
    aboutText: 'We are a leading software company dedicated to delivering innovative solutions that transform businesses and drive digital success.',
    aboutExperience: 'With over a decade of experience in the software industry, we have successfully delivered hundreds of projects across various sectors, helping businesses achieve their digital transformation goals.',
    aboutProjects: 'Projects Completed',
    aboutClients: 'Happy Clients',
    productsTitle: 'Our Products',
    clientsTitle: 'Our Trusted Clients',
    partnersTitle: 'Our Partners',
    testimonialsTitle: 'What Our Clients Say',
    contactTitle: 'Get In Touch',
    footerText: 'Leading software solutions provider',
    "Hire, pay & manage your employees all in one place.": 'Hire, pay & manage your employees all in one place.',
    quickLinks: 'Quick Links',
    services: 'Services',
    company: 'Company',
    followUs: 'Follow Us',
    profile_title: 'Company Profile',
    profile_download:'Download our comprehensive company profile to learn more about our services, expertise, and successful projects.'
  },
  ar: {
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    career: 'الوظائف',
    contactUs: 'اتصل بنا',
    ourClients: 'عملاؤنا',
    ourPartners: 'شركاؤنا',
    "Hire, pay & manage your employees all in one place.":"أدر جميع عمليات التوظيف و الدفع وادارة موظفينك من مكان واحد",
    serviceSolutions: 'الحلول',
    products: 'المنتجات',
    blog: 'المدونة',
    heroTitle: 'برمجيات للثورة الرقمية',
    heroSubtitle: 'احم استقلاليتك وقدم لهم الحلول ومنتجات التأمين',
    getStarted: 'احصل على عرض سعر',
    learnMore: 'اعرف أكثر',
    downloadPdf: 'تحميل PDF',
    aboutTitle: 'عن شركتنا',
    aboutText: 'نحن شركة برمجيات رائدة مكرسة لتقديم حلول مبتكرة تحول الأعمال وتحقق النجاح الرقمي.',
    aboutExperience: 'مع أكثر من عقد من الخبرة في صناعة البرمجيات، قمنا بتنفيذ مئات المشاريع بنجاح عبر مختلف القطاعات، وساعدنا الشركات على تحقيق أهداف التحول الرقمي.',
    aboutProjects: 'مشروع مكتمل',
    aboutClients: 'عميل سعيد',
    productsTitle: 'منتجاتنا',
    clientsTitle: 'عملاؤنا الموثوقون',
    partnersTitle: 'شركاؤنا',
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    contactTitle: 'تواصل معنا',
    footerText: 'مزود حلول البرمجيات الرائد',
    quickLinks: 'روابط سريعة',
    services: 'الخدمات',
    company: 'الشركة',
    followUs: 'تابعنا',
    profile_title:'الملف التعريفي للشركة',
    profile_download:'قم بتنزيل الملف التعريفي الشامل لشركتنا للتعرف على خدماتنا وخبراتنا ومشاريعنا الناجحة.'

  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'en';
    }
    return 'en';
  });
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', language);
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  };

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
