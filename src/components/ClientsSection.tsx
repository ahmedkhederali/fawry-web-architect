
import React from 'react';
import { useLanguage } from './LanguageContext';

const ClientsSection = () => {
  const { t } = useLanguage();

  // Mock client logos - in real implementation, these would be actual client logos
  const clients = [
    { id: 1, name: 'TechCorp', logo: '🏢' },
    { id: 2, name: 'InnovateLab', logo: '🔬' },
    { id: 3, name: 'DataFlow', logo: '📊' },
    { id: 4, name: 'CloudSync', logo: '☁️' },
    { id: 5, name: 'WebSolutions', logo: '💻' },
    { id: 6, name: 'MobileFirst', logo: '📱' },
    { id: 7, name: 'AI Systems', logo: '🤖' },
    { id: 8, name: 'SecureNet', logo: '🔐' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            {t('clientsTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16 animate-none scroll-animation">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-center min-w-[200px] h-24 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{client.logo}</div>
                    <div className="text-sm font-medium text-gray-600">{client.name}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-16 animate-none scroll-animation">
              {clients.map((client) => (
                <div
                  key={`${client.id}-duplicate`}
                  className="flex items-center justify-center min-w-[200px] h-24 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{client.logo}</div>
                    <div className="text-sm font-medium text-gray-600">{client.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
