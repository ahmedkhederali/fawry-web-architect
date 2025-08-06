// src/components/HorizontalTabs.jsx
import { categories, logos } from "@/lib/solutionsData";
import React, { useState } from "react";


const HorizontalTabs = () => {
  const [active, setActive] = useState("Packaging Industry");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border-2 transition 
              ${
                active === cat
                  ? "bg-[#00699c] text-white border-[#00699c]"
                  : "bg-white text-[#00699c] border-[#00699c] hover:bg-[#ffd300] hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {logos[active]?.map((logo, i) => (
          <div key={i} className="flex justify-center">
            <img src={logo} alt={`${active} logo ${i}`} className="h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTabs;
