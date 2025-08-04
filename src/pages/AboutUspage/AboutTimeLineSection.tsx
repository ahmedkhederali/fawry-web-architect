import React from "react";

const timeline = [
  {
    year: "2012–2014",
    title: "DIRAC Systems Established",
    desc: "Dirac Systems was officially established in 2014, based on a team that had been developing systems since 2012.",
  },
  {
    year: "2016",
    title: "Digital Payment Integrations",
    desc: "Became a leading company in enabling electronic integration for digital payments with Fawry and major Egyptian entities.",
  },
  {
    year: "2017",
    title: "ERP & Outsourcing Services Launched",
    desc: "Launched the first ERP system for corrugated carton factories and introduced outsourcing services to Gulf countries.",
  },
  {
    year: "2019",
    title: "Digital Transformation Projects",
    desc: "Expanded into digital transformation projects both locally and internationally.",
  },
  {
    year: "2020",
    title: "Strategic Partnership with Fawry",
    desc: "Formed a strategic SaaS partnership with Fawry, which acquired a 51% stake in Dirac.",
  },
  {
    year: "2023",
    title: "Launch of Fawry Business HR",
    desc: "Official launch of the HR system under Fawry Business.",
  },
  {
    year: "2024",
    title: "Launch of Fawry Business Accounting",
    desc: "Expanded the platform with the launch of Fawry Business Accounting system.",
  },
]

const AboutTimeLineSection = () => (
  <section className="py-16 bg-gray-50 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Our Journey</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Improved curved dashed line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full h-full pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 1600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYStretch"
          >
            <path
              d="M200 50 Q250 150 200 250 Q150 350 200 450 Q250 550 200 650 Q150 750 200 850 Q250 950 200 1050 Q150 1150 200 1250 Q250 1350 200 1450"
              stroke="#00bcd4"
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
                <div className="w-5 h-5 bg-[#00bcd4] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Content container */}
              <div className={`w-full flex ${idx % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"}`}>
                <div className={`max-w-md ${idx % 2 === 0 ? "mr-16" : "ml-16"}`}>
                  {/* Year badge */}
                  <div className="inline-block bg-[#00bcd4] text-white px-4 py-2 rounded-lg font-bold text-lg mb-4 shadow-lg">
                    {item.year}
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting line from dot to card */}
                  <div
                    className={`absolute top-8 w-12 h-0.5 bg-[#00bcd4] opacity-60 ${
                      idx % 2 === 0 ? "left-1/2 ml-6" : "right-1/2 mr-6"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Decorative paper plane for certain milestones */}
              {(idx === 2 || idx === 4 || idx === 6) && (
                <div
                  className={`absolute top-8 ${idx % 2 === 0 ? "right-8" : "left-8"} text-[#00bcd4] text-2xl transform ${idx % 2 === 0 ? "rotate-45" : "-rotate-45"} animate-pulse`}
                >
                  ✈️
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#00bcd4] opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#00bcd4] opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#00bcd4] opacity-10 rounded-full"></div>
    </div>
  </section>

)

export default AboutTimeLineSection


