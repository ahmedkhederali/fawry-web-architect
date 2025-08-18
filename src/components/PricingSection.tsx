// components/PricingSection.tsx

import React from 'react';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  cta: string;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <div className="bg-white py-4 px-4 text-[#003366]">
      {/* <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-3xl font-extrabold mb-2 text-[#006b99]">
          Choose the Right Plan for Your Business
        </h2>
        <p className="text-[#003366] text-base">
          Flexible pricing tailored to your HR management needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] border border-[#eee] rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-xl font-bold text-[#006b99] mb-2">{plan.title}</h3>
              <p className="text-2xl font-extrabold text-[#002c5f] mb-4">{plan.price}</p>
              <ul className="space-y-2 text-sm text-[#4a4a4a] mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#ffd400] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-auto bg-[#ffd400] hover:bg-[#006b99] hover:text-white text-[#006b99] font-semibold py-2 px-4 rounded-full transition">
              {plan.cta}
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default PricingSection;
