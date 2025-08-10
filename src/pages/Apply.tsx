import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";
import React from "react";
const Apply: React.FC = () => {
  const {language} = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-4">
     <ContactSection
        hubspotFormId={
          language === 'ar'
            ? '64b9308d-6d38-4fdf-80c3-8c0ce4d99420'
            : '0fa3d708-1edd-45d7-940c-47901b61691f'
        }
      />
    </div>
  );
};

export default Apply;
