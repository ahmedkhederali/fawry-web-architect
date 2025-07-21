import React from 'react';
import { useLanguage } from './LanguageContext';

const ClientsSection = () => {
  const { t } = useLanguage();

  // Mock client logos - in real implementation, these would be actual client logos
  const clients = [
    { id: 1, name: 'Fawry', logo: '/clients/fawry.png', fontClass: 'font-bold', colorClass: 'text-[#009fe3]' },
    { id: 2, name: 'EGYPTIAN DANISH', logo: '/clients/egyptian.png', fontClass: 'font-extrabold', colorClass: 'text-[#e30613]' },
    { id: 3, name: 'eldwlia', logo: '/clients/eldawila.png', fontClass: 'font-semibold', colorClass: 'text-[#009688]' },
    { id: 4, name: 'GENEDY CONSTRUCTION', logo: '/clients/gendy.png', fontClass: 'font-bold', colorClass: 'text-[#bfa46d]' },
    { id: 5, name: 'HORIZON Egypt', logo: '/clients/horizon.png', fontClass: 'font-bold', colorClass: 'text-[#1a237e]' },
    { id: 6, name: 'KOBAA Manufacturing', logo: '/clients/kobaa.png', fontClass: 'font-bold', colorClass: 'text-[#f7941d]' },
    { id: 7, name: 'KADOURA', logo: '/clients/kadora.png', fontClass: 'font-extrabold', colorClass: 'text-[#7c3aed]' },
    { id: 8, name: 'elMalahy', logo: '/clients/malahy.png', fontClass: 'font-bold', colorClass: 'text-[#f59e42]' },
    { id: 9, name: 'Med Scan', logo: '/clients/med.png', fontClass: 'font-semibold', colorClass: 'text-[#009fe3]' },
    { id: 10, name: 'Kayan Lab', logo: '/clients/kayan.png', fontClass: 'font-bold', colorClass: 'text-[#1e293b]' },
    { id: 11, name: 'GLOBAL PLASTIC COMPANY', logo: '/clients/gpc.png', fontClass: 'font-bold', colorClass: 'text-[#009688]' },
    { id: 12, name: 'EL Shams School', logo: '/clients/shams.png', fontClass: 'font-bold', colorClass: 'text-[#fbbf24]' },
    { id: 13, name: 'Pharmacy Elwaa Tby', logo: '/clients/pharmteby.png', fontClass: 'font-semibold', colorClass: 'text-[#16a34a]' },
    { id: 14, name: 'Fantastic Services', logo: '/clients/fantastic.png', fontClass: 'font-bold', colorClass: 'text-[#e11d48]' },
    { id: 15, name: 'Josephine Shahid Design', logo: '/clients/shaid.png', fontClass: 'italic font-bold', colorClass: 'text-[#a21caf]' },
    { id: 16, name: 'COPE', logo: '/clients/cope.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 17, name: 'Creative Basket', logo: '/clients/basket.png', fontClass: 'font-bold', colorClass: 'text-[#f59e42]' },
    { id: 18, name: 'Tayseer CHEMICALS & FERTILIZERS', logo: '/clients/tayseer.png', fontClass: 'font-bold', colorClass: 'text-[#fbbf24]' },
    { id: 19, name: 'El Helal & El Negma', logo: '/clients/helal.png', fontClass: 'font-bold', colorClass: 'text-[#f59e42]' },
    { id: 20, name: 'University May', logo: '/clients/universty.png', fontClass: 'font-bold', colorClass: 'text-[#1e293b]' },
    { id: 21, name: 'ElWan', logo: '/clients/anwan.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4">
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
                  className="flex items-center justify-center min-w-[200px] h-32 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center w-full">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 mx-auto mb-2 object-contain"
                    />
                    <div className="text-base font-bold italic text-secondary tracking-wider mt-2 uppercase drop-shadow-sm">
                      {client.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
