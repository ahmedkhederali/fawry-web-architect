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
    our_recent_blog: 'Our Recent Blog',
    downloadPdf: 'Download PDF',
    aboutTitle: 'About Our Company',
    aboutText: 'We are a leading software company dedicated to delivering innovative solutions that transform businesses and drive digital success.',
    aboutExperience: 'With over a decade of experience in the software industry, we have successfully delivered hundreds of projects across various sectors, helping businesses achieve their digital transformation goals.',
    aboutProjects: 'Projects Completed',
    aboutClients: 'Happy Clients',
    productsTitle: 'Business Line',
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
    profile_download:'Download our comprehensive company profile to learn more about our services, expertise, and successful projects.',
    blog_title: 'Dirac Systems Blog',
    blog_desc: 'Explore our latest articles, insights, and updates on technology, business solutions, and industry trends Explore our latest articles, insights, and updates on technology, business solutions, and industry trends Explore our latest articles, insights, and updates on technology, business solutions, and industry trends.',
    career_desc: 'Join our team and become part of a vibrant, forward-thinking environment where innovation meets limitless opportunity. At DIRAC Systems, every idea matters and every team member plays a vital role in shaping the future. We are constantly seeking passionate, talented individuals who are ready to take on challenges, contribute their unique skills, and grow alongside industry experts. Explore our current job openings, discover exciting career paths, and take the next bold step toward building a successful future with us.',
    available_jobs: 'Available Jobs',
    carrer: 'Career',
    contact_desc: 'Get in touch with us for a free consultation or more information about our services. We are here to help you achieve your digital goals.',
    partners_title: 'Partners',
    partners_desc: 'We collaborate with world-class technology providers and industry leaders to deliver innovative, high-quality, and future-ready solutions for our clients. By leveraging the latest advancements, proven expertise, and strong strategic partnerships, we ensure that every solution is tailored to meet our clients’ unique needs, drive efficiency, and create lasting value.',
    clients_desc:"Our clients are at the heart of everything we do. We are proud to partner with a diverse range of businesses, from innovative startups to established enterprises, across multiple industries and regions. Each collaboration is built on trust, transparency, and a shared commitment to excellence. By understanding their unique challenges and goals, we deliver tailored solutions that empower them to innovate, grow, and succeed in a competitive world."
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
    our_recent_blog: 'مدونتنا الأخيرة',
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
    profile_download:'قم بتنزيل الملف التعريفي الشامل لشركتنا للتعرف على خدماتنا وخبراتنا ومشاريعنا الناجحة.',
    blog_title: 'مدونة ديراك سيستم',
    blog_desc: 'استكشف أحدث مقالاتنا ورؤانا وتحديثاتنا حول التكنولوجيا وحلول الأعمال واتجاهات الصناعة.',
    career_desc: 'انضم إلى فريقنا وكن جزءًا من بيئة ديناميكية حيث يلتقي الابتكار بالفرصة. استكشف فرص العمل الحالية لدينا واتخذ الخطوة التالية في مسيرتك المهنية معنا.',
    carrer: 'وظائف',
    available_jobs: 'الوظائف المتاحة',
    contact_desc: 'تواصل معنا للحصول على استشارة مجانية أو لمزيد من المعلومات حول خدماتنا. نحن هنا لمساعدتك في تحقيق أهدافك الرقمية.',
    partners_title: 'شركاؤنا',
    partners_desc: 'نتعاون مع مزودي التكنولوجيا الرائدين لتقديم أفضل الحلول لعملائنا.',
    clients_desc: 'عملاؤنا هم في قلب كل ما نقوم به. نحن فخورون بشراكتنا مع مجموعة متنوعة من الشركات، من الشركات الناشئة المبتكرة إلى المؤسسات الراسخة، عبر صناعات ومناطق متعددة. كل تعاون مبني على الثقة والشفافية والالتزام بالتميز. من خلال فهم تحدياتهم وأهدافهم الفريدة، نقدم حلولاً مصممة خصيصًا تمكنهم من الابتكار والنمو والنجاح في عالم تنافسي.'
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
