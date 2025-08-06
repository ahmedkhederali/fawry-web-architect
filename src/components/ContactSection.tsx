import React, { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

declare global {
  interface Window {
    hbspt?: any;
  }
}

const ContactSection = () => {
  const { language, t } = useLanguage(); // assumed lang is 'en' or 'ar'
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.innerHTML = '';
    }

    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      createForm();
    }

    function createForm() {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "140495086",
          formId: language === 'ar'
            ? "64b9308d-6d38-4fdf-80c3-8c0ce4d99420" // Arabic
            : "0fa3d708-1edd-45d7-940c-47901b61691f", // English
          region: "eu1",
          target: '#hubspotForm',
        });
      }
    }
  }, [language]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t
              ? "Hire, pay & manage your employees all in one place."
              : "Hire, pay & manage your employees all in one place."
            }
          </h2> */}
        </div>
        {/* الديف ده HubSpot بيحط الفورم جواه */}
        <div id="hubspotForm" ref={formRef}></div>
      </div>
    </section>
  );
};

export default ContactSection;
