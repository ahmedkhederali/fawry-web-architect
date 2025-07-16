import React from "react";

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    icon: "🏠",
  },
  {
    year: "2009",
    title: "First Product Launch",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    icon: "✅",
  },
  {
    year: "2011",
    title: "Reached 100 Clients",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    icon: "ℹ️",
  },
  {
    year: "2013",
    title: "International Expansion",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    icon: "👥",
  },
  {
    year: "2015",
    title: "Launched ERP Solution",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    icon: "💻",
  },
  {
    year: "2016",
    title: "500+ Projects Completed",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    icon: "💰",
  },
];

const AboutTimeLineSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#006b99]">Timeline Infographics</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/40 -translate-x-1/2 z-0" />
        <div className="space-y-12 relative z-10">
          {timeline.map((item, idx) => (
            <div key={item.year} className="flex items-center w-full">
              {/* Left side */}
              <div className={`w-1/2 pr-6 text-right ${idx % 2 === 0 ? "" : "opacity-0 pointer-events-none"}`}>
                {idx % 2 === 0 && (
                  <div className="inline-block text-primary text-2xl mb-2">{item.icon}</div>
                )}
                {idx % 2 === 0 && (
                  <>
                    <h3 className="text-lg font-bold text-[#006b99]">{item.title}</h3>
                    <span className="block text-sm font-semibold text-gray-500">{item.year}</span>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </>
                )}
              </div>
              {/* Center dot */}
              <div className="w-0 flex flex-col items-center">
                <span className="block w-5 h-5 bg-[#006b99] rounded-full border-4 border-white shadow-lg z-10" />
              </div>
              {/* Right side */}
              <div className={`w-1/2 pl-6 text-left ${idx % 2 === 1 ? "" : "opacity-0 pointer-events-none"}`}>
                {idx % 2 === 1 && (
                  <div className="inline-block text-primary text-2xl mb-2">{item.icon}</div>
                )}
                {idx % 2 === 1 && (
                  <>
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <span className="block text-sm font-semibold text-gray-500">{item.year}</span>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutTimeLineSection;