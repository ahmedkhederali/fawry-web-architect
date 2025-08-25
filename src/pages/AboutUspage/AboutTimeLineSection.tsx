const timeline = [
 { year: "2012–2014", title: "Foundation & Early Development",
  image: "/images/DiracSystems.png",
  desc: "DIRAC Systems was officially established in 2014, building on system development that began in 2012." },
 { year: "2016", title: "Leadership in Digital Payment Integration", desc: "DIRAC became a leading provider of electronic integration solutions for digital payments, partnering with Fawry and other major institutions in Egypt." },
 {
   year: "2017",
   title: "Launch of Dirapack",
   desc: "DIRAC launched Dirapack, the first ERP system in Egypt and the Arab world specifically designed for managing corrugated carton factories. This was a significant step in delivering tailored digital solutions for the industry.",
   image: "/images/DiracSystems.png",
 },
 { year: "2019", title: "Digital Transformation Projects", desc: "We expanded into digital transformation initiatives both locally and internationally, enhancing operational efficiency and driving innovation.", icon: "🌐" },
 { year: "2020", title: "Strategic Partnership with Fawry", desc: "DIRAC formed a strategic SaaS partnership with Fawry, which acquired a 51% stake in the company, marking a major milestone in our growth.", icon: "🤝" },
 { year: "2023", title: "Launch of Fawry Business HR", desc: "Officially launched the Human Resources system under the Fawry Business brand, providing comprehensive HR solutions.", icon: "🧑‍💼" },
 { year: "2024", title: "Launch of Fawry Business Accounting", desc: "Expanded our platform with the release of the Fawry Business Accounting system, offering integrated financial management tools.", icon: "📊" },
];
const AboutTimeLineSection = () => (
<section className="py-10 bg-gray-50 relative overflow-hidden">
<div className="container mx-auto px-4">
<h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center text-[#006b99]">
       Our Journey
</h2>
<div className="relative max-w-5xl mx-auto">
       {/* Mobile: straight dashed line */}
<div className="absolute left-1/2 top-0 -translate-x-1/2 h-full border-l-2 border-dashed border-[#006b99] opacity-60 md:hidden pointer-events-none" />
       {/* Desktop+: curved dashed SVG */}
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none">
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
<div className="space-y-12 sm:space-y-16 md:space-y-24 relative z-10">
         {timeline.map((item, idx) => {
           const isLeft = idx % 2 === 0;
           return (
<div key={item.year} className="relative flex items-stretch">
               {/* Dot (mobile centered) */}
<div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 md:hidden z-20">
<div className="w-4 h-4 bg-[#006b99] rounded-full border-4 border-white shadow-lg" />
</div>
               {/* Dot (desktop offset to match curve) */}
<div
                 className="hidden md:block absolute top-2 z-20"
                 style={{
                   left: isLeft ? "calc(50% + 20px)" : "calc(50% - 20px)",
                   transform: "translate(-50%, -0.5rem)",
                 }}
>
<div className="w-5 h-5 bg-[#006b99] rounded-full border-4 border-white shadow-lg" />
</div>
               {/* Card container */}
<div
                 className={[
                   "w-full flex",
                   "justify-center px-2 sm:px-6", // mobile: center single column
                   isLeft ? "md:justify-start md:pr-8" : "md:justify-end md:pl-8", // desktop: alternate
                 ].join(" ")}
>
<div className={["relative w-full max-w-[26rem] sm:max-w-xl md:max-w-md", isLeft ? "md:mr-16" : "md:ml-16"].join(" ")}>
                   {/* Year badge */}
<div className="inline-block bg-[#006b99] text-white px-3 py-1.5 rounded-lg font-semibold text-base sm:text-lg mb-3 sm:mb-4 shadow">
                     {item.year}
</div>
                   {/* Card */}
<div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
<div className="flex items-start gap-3 sm:gap-4">
                       {item.image ? (
<img
                           src={item.image}
                           alt={item.title}
                           className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-contain flex-shrink-0"
                         />
                       ) : null}
<div>
<h3 className="text-lg sm:text-xl font-bold text-[#FFD300] mb-1.5 sm:mb-2 leading-tight">
                           {item.title}
</h3>
<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                           {item.desc}
</p>
</div>
</div>
</div>
                   {/* Connector from line to card (hidden on mobile) */}
<div
                     className={[
                       "hidden md:block absolute top-8 w-12 h-0.5 bg-[#006b99] opacity-60",
                       isLeft ? "left-1/2 ml-6" : "right-1/2 mr-6",
                     ].join(" ")}
                   />
</div>
</div>
               {/* Decorative plane on some milestones */}
               {(idx === 2 || idx === 4 || idx === 6) && (
<div
                   className={[
                     "absolute top-8 text-[#006b99] text-2xl",
                     isLeft ? "right-4 md:right-8 rotate-45" : "left-4 md:left-8 -rotate-45",
                     "animate-pulse",
                   ].join(" ")}
>
                   ✈️
</div>
               )}
</div>
           );
         })}
         {/* Footer pill */}
<div className="relative flex items-center justify-center mt-4 sm:mt-8 md:mt-16 px-2">
<div className="bg-[#006b99] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg flex items-center">
             Stay Tuned For More Updates
<div className="ml-3 w-4 h-4 sm:w-5 sm:h-5 bg-[#006b99] rounded-full border-4 border-white shadow-lg animate-pulse" />
</div>
</div>
</div>
</div>
     {/* Background shapes */}
<div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#006b99] opacity-10 rounded-full" />
<div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#006b99] opacity-5 rounded-full" />
<div className="absolute top-1/2 right-6 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-[#006b99] opacity-10 rounded-full" />
</div>
</section>
);
export default AboutTimeLineSection;