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
            ? 'ef5b35e2-b8a7-4a29-a3be-02fa116e5f44'
            : 'ef5b35e2-b8a7-4a29-a3be-02fa116e5f44'
        }
      />
    </div>
  );
};

export default Apply;
