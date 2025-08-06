import React from "react";

const content = [
  {
    title: "Mission",
    description:
      "Teaming with clients to improve their business, protect and enhance enterprise value by identifying, anticipating, and solving critical business challenges.",
  },
  {
    title: "Vision",
    description:
      "Enabling the Enterprises by Digital Transformation in the MENA region.",
  },
  {
    title: "Values",
    description:
      "Empowerment Through Transformation, Synergy of Minds, Sustainable Innovation, Connected & Belong",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#006b99]">Who We Are</h2>
        <p className="text-[#4b5563] mt-2 text-md max-w-2xl mx-auto">
          Discover our mission, vision, and the values that define DIRAC’s digital leadership.
        </p>
      </div>

      {/* Mission, Vision, Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {content.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-all duration-300 hover:bg-[#006b99]"
          >
            <div className="w-6 h-2 bg-[#FFD300] rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-[#006b99] group-hover:text-white mb-2 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-700 group-hover:text-white text-sm transition-colors duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHeroSection;
