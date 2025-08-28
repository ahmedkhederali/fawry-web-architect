// src/components/HorizontalTabs.tsx / .jsx
import React, { useEffect, useState } from "react";
import { logos } from "@/lib/solutionsData";
type Props = {
  categories: string[];
  defaultActive?: string | null;
  // optional styling hooks
  tabsClassName?: string;
  tabItemClassName?: string;
  tabItemActiveClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  logoClassName?: string;
  containerClassName?: string;
};
const HorizontalTabs: React.FC<Props> = ({
  categories,
  defaultActive,
  containerClassName = "container mx-auto px-4 py-1",
  tabsClassName = "flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar mb-6",
  tabItemClassName = "shrink-0 snap-start px-3 py-1.5 rounded-full border border-[#006b99]/30 text-sm text-[#006b99] hover:bg-[#ffd300] hover:text-black transition",
  tabItemActiveClassName = "bg-[#006b99] text-white border-transparent",
  gridClassName = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
  cardClassName = "flex justify-center items-center p-2 bg-white rounded-lg shadow-sm",
  logoClassName = "w-20 h-20 sm:w-24 sm:h-24 object-contain",
}) => {
  const initial = defaultActive ?? categories?.[0] ?? null;
  const [active, setActive] = useState<string | null>(initial);
  // Reset selected tab when categories/defaultActive change
  useEffect(() => {
    const next = defaultActive ?? categories?.[0] ?? null;
    setActive(next);
  }, [categories, defaultActive]);
  if (!categories || categories.length === 0) {
    return <div className="text-center text-gray-500">No clients available</div>;
  }
  if (!active) {
    return <div className="text-center text-gray-500">No category selected</div>;
  }
  const items = logos[active] ?? [];
  return (
    <div className={containerClassName}>
      {/* Tabs (horizontal) */}
      <div className={tabsClassName} role="tablist" aria-label="Client categories" style={{ marginBottom: '1rem' }}>
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={`${tabItemClassName} ${isActive ? tabItemActiveClassName : ""}`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      {/* Logos grid */}
      {items.length > 0 ? (
        <div className={gridClassName}>
          {items.map((logo: string, i: number) => (
            <div key={i} className={cardClassName}>
              <img src={logo} alt={`${active} logo ${i + 1}`} className={logoClassName} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No logos available for this category</div>
      )}
    </div>
  );
};
export default HorizontalTabs;