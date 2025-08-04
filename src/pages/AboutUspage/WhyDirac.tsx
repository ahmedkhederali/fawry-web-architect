import React from "react";

const features = [
  {
    title: "Tailored Solutions",
    description:
      "At DIRAC, we understand that every business is unique. Our ability to customize systems ensures that our software solutions align perfectly with your specific needs, enhancing operational efficiency and effectiveness.",
  },
  {
    title: "Comprehensive Digital Transformation",
    description:
      "We offer a holistic approach to digital transformation, providing a wide spectrum of services that integrate seamlessly, helping businesses navigate their journey from traditional processes to innovative digital practices.",
  },
  {
    title: "Expertise in Local and Regional Markets",
    description:
      "With extensive experience in the Egyptian and Gulf markets, we bring valuable insights and best practices that cater to the distinct challenges and opportunities faced by businesses in the region.",
  },
  {
    title: "Robust Support Network",
    description:
      "Our commitment to customer success extends beyond implementation. We provide ongoing support and training, ensuring that your team is empowered to maximize the benefits of our solutions.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest advancements in technology to deliver solutions that not only meet current demands but also anticipate future trends, keeping your business ahead of the competition.",
  },
];

const WhyDirac = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-12">
      <h3 className="text-3xl font-bold text-center text-[#f36c26] mb-12">Why DIRAC?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-[#f36c26]/50 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Top bar */}
            <div className="w-10 h-1 rounded-full bg-[#f36c26] mb-4" />

            {/* Title */}
            <h4 className="text-[#111827] text-lg font-semibold mb-2 flex items-center justify-between">
              {item.title}
              <span className="text-[#f36c26] text-xl ml-2">&rsaquo;</span>
            </h4>

            {/* Description */}
            <p className="text-[#4b5563] text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDirac;
