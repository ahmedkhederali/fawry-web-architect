import React, { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

declare global {
  interface Window {
    hbspt?: any;
  }
}

interface ContactSectionProps {
  hubspotFormId?: string; // ✅ formId is passed as a prop
}

const ContactSection: React.FC<ContactSectionProps> = ({ hubspotFormId }) => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hubspotFormId) return; // ✅ if no formId, exit early

    if (formRef.current) {
      formRef.current.innerHTML = '';
    }

    const createForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "140495086",
          formId: hubspotFormId,
          region: "eu1",
          target: '#hubspotForm',
        });
      }
    };

    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      createForm();
    }
  }, [hubspotFormId]);

  if (!hubspotFormId) return null; // ✅ return nothing if no formId

  return (
    <section className="py-1 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-10">
          {/* يمكنك إضافة عنوان هنا إذا احتجت */}
        </div>
        <div id="hubspotForm" ref={formRef}></div>
      </div>
    </section>
  );
};

export default ContactSection;
