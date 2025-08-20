// src/components/VerticalTabs.jsx
import React, { useState } from "react";
import { logos } from "@/lib/solutionsData";

const VerticalTabs = ({ categories }) => {
  const [active, setActive] = useState(categories[0] || "Packaging Industry");
  
  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Vertical Tab List */}
      <div className="w-1/4 flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-left rounded-r-lg border-l-4 transition
              ${
                active === cat
                  ? "bg-[#00699c] text-white border-[#ffd300]"
                  : "bg-white text-[#00699c] border-transparent hover:bg-[#ffd300] hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Logos */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pl-6">
        {logos[active]?.map((logo, i) => (
          <div key={i} className="flex justify-center items-center p-2 bg-white rounded-lg shadow-sm">
            <img 
              src={logo} 
              alt={`${active} logo ${i}`} 
              className="w-full max-w-[180px] h-24 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTabs;