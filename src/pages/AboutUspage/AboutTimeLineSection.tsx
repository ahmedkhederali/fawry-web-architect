const timeline = [
  {
    year: "2012–2014",
    title: "Foundation & Early Development",
    desc: "DIRAC Systems was officially established in 2014, building on system development that began in 2012.",
    icon: "🏢",
  },
  {
    year: "2016",
    title: "Leadership in Digital Payment Integration",
    desc: "DIRAC became a leading provider of electronic integration solutions for digital payments, partnering with Fawry and other major institutions in Egypt.",
    icon: "💳",
  },
  {
    year: "2017",
    title: "Launch of Dirapack",
    desc: "DIRAC launched Dirapack, the first ERP system in Egypt and the Arab world specifically designed for managing corrugated carton factories. This was a significant step in delivering tailored digital solutions for the industry.",
    icon: "📦",
  },
  {
    year: "2019",
    title: "Digital Transformation Projects",
    desc: "We expanded into digital transformation initiatives both locally and internationally, enhancing operational efficiency and driving innovation.",
    icon: "🌐",
  },
  {
    year: "2020",
    title: "Strategic Partnership with Fawry",
    desc: "DIRAC formed a strategic SaaS partnership with Fawry, which acquired a 51% stake in the company, marking a major milestone in our growth.",
    icon: "🤝",
  },
  {
    year: "2023",
    title: "Launch of Fawry Business HR",
    desc: "Officially launched the Human Resources system under the Fawry Business brand, providing comprehensive HR solutions.",
    icon: "🧑‍💼",
  },
  {
    year: "2024",
    title: "Launch of Fawry Business Accounting",
    desc: "Expanded our platform with the release of the Fawry Business Accounting system, offering integrated financial management tools.",
    icon: "📊",
  },
];


const AboutTimeLineSection = () => (
  <section className="py-16 bg-gray-50 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center text-[#006b99]">Our Journey</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Improved curved dashed line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full h-full pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 1900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYStretch"
          >
            <path
              d="M200 50 Q250 150 200 250 Q150 350 200 450 Q250 550 200 650 Q150 750 200 850 Q250 950 200 1050 Q150 1150 200 1250 Q250 1350 200 1450 Q150 1550 200 1650 Q250 1750 200 1850"
              stroke="#006b99"
              strokeWidth="4"
              strokeDasharray="20,15"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="space-y-24 relative z-10">
          {timeline.map((item, idx) => (
            <div key={item.year} className="relative flex items-start">
              {/* Timeline dot positioned on the curve */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
                style={{
                  left: idx % 2 === 0 ? "calc(50% + 20px)" : "calc(50% - 20px)",
                }}
              >
                <div className="w-5 h-5 bg-[#006b99] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Content container */}
              <div className={`w-full flex ${idx % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"}`}>
                <div className={`max-w-md ${idx % 2 === 0 ? "mr-16" : "ml-16"}`}>
                  {/* Year badge */}
                  <div className="inline-block bg-[#006b99] text-white px-4 py-2 rounded-lg font-bold text-lg mb-4 shadow-lg">
                    {item.year}
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#FFD300] mb-2 leading-tight">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting line from dot to card */}
                  <div
                    className={`absolute top-8 w-12 h-0.5 bg-[#006b99] opacity-60 ${
                      idx % 2 === 0 ? "left-1/2 ml-6" : "right-1/2 mr-6"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Decorative paper plane for certain milestones */}
              {(idx === 2 || idx === 4 || idx === 6) && (
                <div
                  className={`absolute top-8 ${idx % 2 === 0 ? "right-8" : "left-8"} text-[#[#006b99]] text-2xl transform ${idx % 2 === 0 ? "rotate-45" : "-rotate-45"} animate-pulse`}
                >
                  ✈️
                </div>
              )}
            </div>
          ))}
          {/* "More to come" indicator */}
          <div className="relative flex items-center justify-center mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-5 h-5 bg-[#006b99] rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            </div>
            <div className="bg-gradient-to-r from-[#006b99] to-[#006b99] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
              More exciting updates coming soon...
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#006b99] opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#006b99] opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#006b99] opacity-10 rounded-full"></div>
    </div>
  </section>
)

export default AboutTimeLineSection
