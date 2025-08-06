import React, { useState, useEffect } from "react";

const carouselImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=1200",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=1200",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=1200",
];

const FawryHeaderHero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-[#006b99]">
      {/* Yellow Side */}
      <div
        className="relative flex flex-col justify-between bg-[#ffd300] py-10 z-10"
        style={{ width: "55%", borderBottomRightRadius: "120px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10 px-8">
         <img
            src="/images/DiracSystems.png"
            alt="Dirac Systems"
            className="
              h-auto 
              w-[110px] 
              rounded-xl 
              shadow-lg 
              border-4 border-white 
              transform 
              hover:scale-105 hover:-translate-y-1 
              transition-all duration-500 ease-in-out 
              bg-white 
              object-contain
            "
          />
          <nav className="hidden md:flex gap-10 relative ml-auto mr-[30%] md:mr-[16%] font-weight[700]">
            <a href="/" className="text-[#006b99] font-medium hover:underline">
              Home
            </a>

            <div className="relative group">
              <span className="cursor-pointer text-[#006b99] font-medium">
                <a href="/about" className="block">
                  About Us
                </a>
              </span>
              <div
                className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300"
                style={{ backgroundColor: "#006b99" }}
              >
                <a
                  href="/career"
                  className="block py-2 px-4 text-white hover:text-[#006b99] hover:bg-white"
                >
                  Career
                </a>
                <a
                  href="/clients"
                  className="block py-2 px-4 text-white hover:text-[#006b99] hover:bg-white"
                >
                  Our Clients
                </a>
                <a
                  href="/partner"
                  className="block py-2 px-4 text-white hover:text-[#006b99] hover:bg-white"
                >
                  Our Partners
                </a>
              </div>
            </div>

            <a
              href="/products"
              className="text-[#006b99] font-medium hover:underline"
            >
              Products
            </a>
            <a
              href="/blog"
              className="text-[#006b99] font-medium hover:underline"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Hero Text */}
       {/* Hero Text */}
      <div className="flex-1 px-6 md:px-16 text-gray-900 flex flex-col justify-center">
        <div className="max-w-4xl px-4 py-8 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#006b99]">
            Dirac Systems:
          </h1>
          <p className="text-xl md:text-2xl text-[#006b99] leading-snug">
            Driving Digital Evolution
            <span> Powering the Digital Shift</span>
          </p>
        </div>
        <div className="flex gap-4 mt-4 px-4">
          <button className="bg-[#006b99] text-[#ffd300] px-6 py-3 rounded-md font-semibold shadow hover:bg-[#005fa3] transition">
            Get a Quote
          </button>
       <button
        className="flex items-center gap-2 bg-white text-[#006b99] border border-[#0074d9] px-6 py-3 rounded-md shadow hover:bg-[#ffe066] transition"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/files/Dirac_Co.Profile.pdf";
          link.download = "CompanyProfile.pdf";
          link.click();
        }}
        aria-label="Download Company Profile"
      >
        <span className="font-semibold">Company Profile</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
          />
        </svg>
      </button>
        </div>
      </div>

      </div>

      {/* Blue Side */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-[45%] mt-8 md:mt-0">
        <div className="absolute top-8 right-8 text-[#ffd300] font-semibold">
          +20 123-456-789
        </div>

        {/* Carousel */}
        <div className="relative w-[90%] h-[300px] md:w-[125%] md:h-[300px] flex items-center justify-center overflow-hidden rounded-tl-[80px] shadow-2xl bg-white z-20 xl:h-[450px]">
          <img
            src={carouselImages[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Stylish Text Overlay */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 text-center w-[90%]">
            <div className="inline-block px-8 py-6 bg-black/60 rounded-xl text-white shadow-2xl space-y-2 text-start">
              {current === 0 && (
                <>
                  <h2 className="text-3xl font-extrabold tracking-tight">
                    ERP System:
                  </h2>
                  <p className="text-lg font-medium">
                    One System, Infinite Possibilities
                  </p>
                </>
              )}
              {current === 1 && (
                <>
                  <h2 className="text-3xl font-extrabold tracking-tight ">
                    SaaS Solutions:
                  </h2>
                  <p className="text-lg font-medium">
                    Manage More, Spend Less and Start Now
                  </p>
                </>
              )}
              {current === 2 && (
                <>
                  <h2 className="text-3xl font-extrabold tracking-tight ">
                    Digital Transformation:
                  </h2>
                  <p className="text-lg font-medium">
                    Digitally Driven, Future Focused
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full border border-[#006b99] ${
                  current === idx ? "bg-[#006b99]" : "bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* New Arrow Buttons with SVG */}
        <div className="flex gap-6 mt-6">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCurrent(
                (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
              )
            }
            className="bg-[#ffd300] hover:bg-[#f9d853] transition-all duration-300 p-4 rounded-full shadow-lg border-2 border-white z-30"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#006b99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
            className="bg-[#ffd300] hover:bg-[#f9d853] transition-all duration-300 p-4 rounded-full shadow-lg border-2 border-white z-30"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#006b99]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FawryHeaderHero;
