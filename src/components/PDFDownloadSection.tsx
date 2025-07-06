
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const PDFDownloadSection = () => {
  const { t } = useLanguage();

  const handleDownload = () => {
    // This would typically link to an actual PDF file
    console.log('Downloading PDF...');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Company Profile
          </h2>
          <p className="text-gray-600 mb-8">
            Download our comprehensive company profile to learn more about our services, expertise, and successful projects.
          </p>
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-secondary font-semibold"
          >
            <FileText className="mr-2 h-5 w-5" />
            {t('downloadPdf')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PDFDownloadSection;
