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
    title: "Digital Pioneering",
    description:
      "We lead the charge into the digital frontier, daring to explore uncharted territories in technology and innovation to redefine business possibilities.",
  },
  {
    title: "Empowerment Through Transformation",
    description:
      "We believe in the transformative power of technology, empowering our clients to not just adapt but thrive in their digital journeys, unlocking their full potential.",
  },
  {
    title: "Synergy of Minds",
    description:
      "Collaboration is our superpower. We harness diverse perspectives and expertise, creating a vibrant ecosystem where ideas flourish and every voice contributes to our collective success.",
  },
  {
    title: "Sustainable Innovation",
    description:
      "We are committed to creating solutions that not only drive business success but also promote sustainability, ensuring a better future for generations to come.",
  },
  {
    title: "Connected & Belong",
    description:
      "We cultivate a supportive and inclusive environment where every team member feels valued and connected. Together, we celebrate successes, learn from challenges, and foster a sense of belonging that strengthens our collective mission.",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#f36c26]">Who We Are</h2>
        <p className="text-[#4b5563] mt-2 text-md max-w-2xl mx-auto">
          Discover our mission, vision, and the values that define DIRAC’s digital leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {content.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-[#f36c26] mb-2">
              {item.title}
            </h3>

            {/* Hidden Description */}
            <p className="text-[#00699c] text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 group-hover:mt-2 transition-all duration-500 ease-in-out overflow-hidden">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHeroSection;
