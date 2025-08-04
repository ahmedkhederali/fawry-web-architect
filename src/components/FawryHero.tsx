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
            className="h-12 w-[120px]"
          />
          <nav className="hidden md:flex gap-10 relative ml-auto mr-[30%] md:mr-[16%] font-weight[700]">
            <a href="/" className="text-[#0074d9] font-medium hover:underline">
              Home
            </a>

            <div className="relative group">
              <span className="cursor-pointer text-[#0074d9] font-medium">
                <a href="/about" className="block">
                  About Us
                </a>
              </span>
              <div
                className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300"
                style={{ backgroundColor: "#0074d9" }}
              >
                <a
                  href="/career"
                  className="block py-2 px-4 text-white hover:text-[#00699c] hover:bg-white"
                >
                  Career
                </a>
                <a
                  href="/clients"
                  className="block py-2 px-4 text-white hover:text-[#00699c] hover:bg-white"
                >
                  Our Clients
                </a>
                <a
                  href="/partner"
                  className="block py-2 px-4 text-white hover:text-[#00699c] hover:bg-white"
                >
                  Our Partners
                </a>
              </div>
            </div>

            <a
              href="/products"
              className="text-[#0074d9] font-medium hover:underline"
            >
              Products
            </a>
            <a
              href="/blog"
              className="text-[#0074d9] font-medium hover:underline"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Hero Text */}
        <div className="py-12 px-6 md:px-16 text-gray-900">
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600">
              Dirac Systems:
            </h1>

            <p className="text-xl md:text-2xl text-[#2e3d49] leading-snug">
              - Driving Digital Evolution
              <br />
              - Powering the Digital Shift
            </p>

            <p className="text-lg md:text-xl text-[#020405] font-medium">
              Transforming Visions into Digital Realities
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#0074d9] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#005fa3] transition">
              Get a Quote
            </button>
            <button
              className="bg-white text-[#0074d9] border border-[#0074d9] px-6 py-3 rounded-md font-semibold shadow hover:bg-[#ffe066] transition"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/files/Dirac_Co.Profile.pdf";
                link.download = "CompanyProfile.pdf";
                link.click();
              }}
            >
              Download Company Profile
            </button>
          </div>
        </div>
      </div>

      {/* Blue Side */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-[45%] mt-8 md:mt-0">
        <div className="absolute top-8 right-8 text-white font-semibold">
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
            <div className="inline-block px-8 py-6 bg-black/60 rounded-xl text-white shadow-2xl space-y-2">
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
                  <h2 className="text-3xl font-extrabold tracking-tight">
                    SaaS Solutions:
                  </h2>
                  <p className="text-lg font-medium">
                    Manage More. Spend Less. Start Now
                  </p>
                </>
              )}
              {current === 2 && (
                <>
                  <h2 className="text-3xl font-extrabold tracking-tight">
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
                className={`w-3 h-3 rounded-full border border-[#0074d9] ${
                  current === idx ? "bg-[#0074d9]" : "bg-white"
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
            className="bg-[#ffd300] hover:bg-[#ffcc00] transition-all duration-300 p-4 rounded-full shadow-lg border-2 border-white z-30"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
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
            className="bg-[#ffd300] hover:bg-[#ffcc00] transition-all duration-300 p-4 rounded-full shadow-lg border-2 border-white z-30"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
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
