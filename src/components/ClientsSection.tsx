import React from 'react';
import { useLanguage } from './LanguageContext';

const ClientsSection = () => {
  const { t } = useLanguage();

  // Mock client logos - in real implementation, these would be actual client logos
  const clients = [
    { id: 1, name: 'ATD', logo: '/public/clients/ATD.png', fontClass: 'font-bold', colorClass: 'text-[#009fe3]' },
    { id: 2, name: 'ABA', logo: '/public/clients/Aba.png', fontClass: 'font-extrabold', colorClass: 'text-[#e30613]' },
    { id: 3, name: 'Ain Shams University', logo: '/public/clients/AinShamsUniversity.png', fontClass: 'font-semibold', colorClass: 'text-[#009688]' },
    { id: 4, name: 'Arab Tech', logo: '/public/clients/ArabTech.png', fontClass: 'font-bold', colorClass: 'text-[#bfa46d]' },
    { id: 5, name: 'Benisuef University', logo: '/public/clients/BenisuefUniversity.png', fontClass: 'font-bold', colorClass: 'text-[#1a237e]' },
    { id: 6, name: 'GMS', logo: '/public/clients/GMS.png', fontClass: 'font-bold', colorClass: 'text-[#f7941d]' },
    { id: 7, name: 'HRZN', logo: '/public/clients/HRZN.png', fontClass: 'font-extrabold', colorClass: 'text-[#7c3aed]' },
    { id: 8, name: 'International Medical Group', logo: '/public/clients/IMG.png', fontClass: 'font-bold', colorClass: 'text-[#f59e42]' },
    { id: 9, name: 'Lush Fresh', logo: '/public/clients/LushFresh.png', fontClass: 'font-semibold', colorClass: 'text-[#009fe3]' },
    { id: 10, name: 'Lychee', logo: '/public/clients/Lychee.png', fontClass: 'font-bold', colorClass: 'text-[#1e293b]' },
    { id: 11, name: 'ALLWEILER FARID HASSANEUN PUMPS', logo: '/public/clients/allwellerFarid.png', fontClass: 'font-bold', colorClass: 'text-[#009688]' },
    { id: 12, name: 'Nabati', logo: '/public/clients/Nabati.png', fontClass: 'font-bold', colorClass: 'text-[#fbbf24]' },
    { id: 13, name: 'Nano Food', logo: '/public/clients/NanoFood.png', fontClass: 'font-semibold', colorClass: 'text-[#16a34a]' },
    { id: 14, name: 'Rehana', logo: '/public/clients/Rehana.png', fontClass: 'font-bold', colorClass: 'text-[#e11d48]' },
    { id: 15, name: 'TechnoBit', logo: '/public/clients/TechnoBit.png', fontClass: 'italic font-bold', colorClass: 'text-[#a21caf]' },
    { id: 16, name: 'TechnoGym', logo: '/public/clients/TechnoGym.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 17, name: 'ACGI', logo: '/public/clients/acgi.png', fontClass: 'font-bold', colorClass: 'text-[#f59e42]' },
    { id: 18, name: 'Furx', logo: '/public/clients/furx.png', fontClass: 'font-bold', colorClass: 'text-[#fbbf24]' },
    { id: 19, name: 'AL-AZHAR UNIVERSITY', logo: '/public/clients/alazharuniveristy.png', fontClass: 'font-bold', colorClass: 'text-[#f59e42]' },
    { id: 20, name: 'AL HOMAIDHI', logo: '/public/clients/alhomaidhi.png', fontClass: 'font-bold', colorClass: 'text-[#1e293b]' },
    { id: 22, name: 'AL Monairy For Corn Products', logo: '/public/clients/almonairy.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 23, name: 'AlWan', logo: '/public/clients/alwan.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 24, name: 'Athad', logo: '/public/clients/athad.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 25, name: 'BEYTI', logo: '/public/clients/beyti.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 26, name: 'BTROTRED', logo: '/public/clients/btrotred.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 27, name: 'Cairo University', logo: '/public/clients/cairouniveristy.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 28, name: 'Catex', logo: '/public/clients/catex.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 29, name: 'COCA COLA', logo: '/public/clients/cocacola.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 30, name: 'Company Drink Water', logo: '/public/clients/companyDrinkWater.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 31, name: 'Company Egyptel 3lya', logo: '/public/clients/companyEgyptel3lya.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 32, name: 'Company North Delta', logo: '/public/clients/companyNorthDelta.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 33, name: 'Company North Cairo Elect', logo: '/public/clients/companyNorhcairoElect.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 34, name: 'Company South Cairo', logo: '/public/clients/companySouthCairo.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 35, name: 'Company South Delta', logo: '/public/clients/companySouthDlta.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 36, name: 'Company South Cairo', logo: '/public/clients/companySouthCairo.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 37, name: 'Company Water & Red Sea', logo: '/public/clients/companyWater&redSea.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 38, name: 'Company Water in Giza', logo: '/public/clients/companyWaterinGiza.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 39, name: 'Company Water in Domyat', logo: '/public/clients/companyWaterindomyat.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 40, name: 'Company AlKabada', logo: '/public/clients/companyalkabada.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 41, name: 'Crocs', logo: '/public/clients/crocs.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 42, name: 'elm films', logo: '/public/clients/elm.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 43, name: 'AL Mohamdya', logo: '/public/clients/elmohamdya.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 44, name: 'Elsalam Plastic', logo: '/public/clients/elsalamplastic.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 45, name: 'Espranzaa', logo: '/public/clients/espranzaa.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 46, name: 'Faragalla', logo: '/public/clients/faragalla.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },
    { id: 47, name: 'Footloose', logo: '/public/clients/footloose.png', fontClass: 'font-bold', colorClass: 'text-[#0ea5e9]' },

  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-[#FFD900] to-[#1252A3] bg-clip-text text-transparent">
              {t('clientsTitle')}
            </span>
          </h2>
          <p className="text-lg text-[#006b99]">
            Trusted By Leading Companies Worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll">
            <div className="flex space-x-16 scroll-animation">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-center min-w-[200px] h-40 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center w-full">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-20 w-40 mx-auto mb-2 object-contain"
                    />
                    <div className="text-base font-bold italic text-[#1252A3] tracking-wider mt-2 uppercase drop-shadow-sm">
                      {client.name}
                    </div>
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
